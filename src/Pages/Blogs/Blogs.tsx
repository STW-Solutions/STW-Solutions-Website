import { Blog, BlogCategory, PageInfo } from "../../models";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";
import { useTranslation } from "react-i18next";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./Blogs.css";
import BlogMiniSummary from "../../components/BlogMiniSummary/BlogMiniSummary";
import { Link } from "react-router";
import Pagination from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router";
import { useBlogsContext } from "../../contexts/blogs-context-provider";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRecentBlog, setIsLoadingRecentBlog] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogsByPage, setBlogsByPage] = useState<Blog[]>([]);
  const [pageDetails, setPageDetails] = useState<PageInfo>({
    size: 3,
    numberOfPages: 0,
    currentPage: 1,
    previousPage: 0,
  });
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState();
  const {
    currentCategory,
    categories,
    setCategories,
    setBlogDetailId,
    setRecentBlogs,
    recentBlogs,
    language,
  } = useBlogsContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSearchParams({ page: "1", per_page: "3" });
  }, []);

  const getRecentBlogs = () => {
    setIsLoadingRecentBlog(true);
    const controller = new AbortController();
    apiClient
      .get<Blog[]>(`/posts?per_page=3&orderby=date&order=desc&_embed`, {
        signal: controller.signal,
      })
      .then((res) => {
        setIsLoadingRecentBlog(false);
        setRecentBlogs(res.data);
        setCategories(updateCategoryList(res.data));
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoadingRecentBlog(false);
        setError(err);
      });
  };

  const getBlogsByPage = (categoryId?: number) => {
    const page = searchParams.get("page");
    const perPage = searchParams.get("per_page");
    const url = categoryId
      ? `/posts?page=${page}&per_page=${perPage}&categories=${categoryId}&_embed`
      : `/posts?page=${page}&per_page=${perPage}&_embed`;
    if (page && perPage) {
      setIsLoading(true);
      const controller = new AbortController();
      apiClient
        .get<Blog[]>(url, {
          signal: controller.signal,
        })
        .then((res) => {
          setBlogsByPage(res.data);
          getRecentBlogs();
          setIsLoading(false);
          const numberOfPages = res.headers["x-wp-totalpages"];
          setPageDetails({ ...pageDetails, numberOfPages });
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setIsLoading(false);
          setError(err);
        });
    }
  };

  useEffect(() => {
    getBlogsByPage(currentCategory.id);
  }, [searchParams]);

  const updateCategoryList = (blogs: Blog[]) => {
    const allCategories = new Set();
    const defaultCategory: BlogCategory = {
      id: 0,
      name: "all",
      taxonomy: "",
    };
    allCategories.add(defaultCategory);
    for (const blog of blogs) {
      for (const categories of blog._embedded["wp:term"]) {
        for (const category of categories) {
          allCategories.add({
            name: category.name,
            id: category.id,
            taxonomy: category.taxonomy,
          });
        }
      }
    }
    return Array.from(allCategories) as BlogCategory[];
  };

  const handlePageInfoChange = (pageInfo: PageInfo) => {
    setSearchParams({ page: pageInfo.currentPage.toString(), per_page: "3" });
  };

  const filterBlogsByCategory = (filterCategory: BlogCategory) => {
    if (filterCategory.name === "all") {
      getBlogsByPage();
      return;
    }
    getBlogsByPage(filterCategory.id);
  };

  return (
    <>
      <div
        className={`container-fluid ${
          (isLoading || error || blogsByPage.length === 0) &&
          "blogs-main d-flex justify-content-center align-items-center"
        }`}
      >
        {isLoading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border"></div>
          </div>
        )}
        {!isLoading && (
          <>
            <div className="container">
              <h1 className="stw-solutions-h1 text-black ms-4 ps-1 text-capitalize">
                {t("blogs")}
              </h1>
              {error && (
                <div className="alert alert-danger text-center w-100">
                  {t("fetch_blogs_error")}
                </div>
              )}
              {blogsByPage.length === 0 && (
                <div className="alert alert-info text-center w-100">
                  {t("no_blogs")}
                </div>
              )}
              {blogsByPage.length > 0 && (
                <div>
                  {pageDetails.numberOfPages > 1 && (
                    <div className="mt-5">
                      <Pagination
                        pageInfo={pageDetails}
                        onPageInfoChange={handlePageInfoChange}
                      />
                    </div>
                  )}
                  <div className="row justify-content-evenly">
                    <div className="col-lg-7">
                      {blogsByPage.map((blog, index) => (
                        <div
                          key={`${index}`}
                          className={`${index > 0 ? "mt-5" : "mt-0"}`}
                          onClick={() => setBlogDetailId(blog.id.toString())}
                        >
                          <Link
                            className="text-decoration-none"
                            to={`/blog-details/${blog.slug}`}
                          >
                            <BlogSummary blog={blog} useAsDetails={false} />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-5">
                      <div className="rounded category-box py-3">
                        <h2 className="fs-4 text-center text-uppercase">
                          {t("categories")}
                        </h2>
                        <ul className="mt-3 ms-0">
                          {categories?.map((category, i) => (
                            <li key={`${i}category`} className="mt-3">
                              <button
                                className="fs-5 text-decoration-underline border-0 bg-transparent text-black text-capitalize"
                                onClick={() => filterBlogsByCategory(category)}
                              >
                                {t(category.name)}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {blogsByPage.map((blog, index) => (
                        <div
                          className={`rounded category-box p-3 mt-5 ${
                            index === 1 ? "d-block" : "d-none"
                          }`}
                          key={`${blog.id}recentBlogs`}
                        >
                          {isLoadingRecentBlog && (
                            <div className="d-flex justify-content-center">
                              <div className="spinner-border"></div>
                            </div>
                          )}
                          {!isLoadingRecentBlog && (
                            <>
                              <h2 className="fs-4 text-center text-uppercase fw-bold">
                                {t("recent_posts")}
                              </h2>
                              {recentBlogs?.map((recentBlog) => (
                                <div
                                  onClick={() =>
                                    setBlogDetailId(recentBlog.id.toString())
                                  }
                                  key={`${recentBlog.id}recentBlog`}
                                >
                                  <Link
                                    className="text-decoration-none"
                                    state={{
                                      blogCategories: categories,
                                      recentBlogs: blogs,
                                    }}
                                    to={`/blog-details/${recentBlog.slug}`}
                                  >
                                    <BlogMiniSummary
                                      blog={recentBlog}
                                      titleWidth="mini-summary-blog"
                                    />
                                  </Link>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {pageDetails.numberOfPages > 1 && (
                    <div className="mt-5">
                      <Pagination
                        pageInfo={pageDetails}
                        onPageInfoChange={handlePageInfoChange}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;
