import { Blog, PageInfo } from "../../models";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";
import { useTranslation } from "react-i18next";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./Blogs.css";
import BlogMiniSummary from "../../components/RecentBlogSummary/BlogMiniSummary";
import { Link } from "react-router";
import Pagination from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [blogsByPage, setBlogsByPage] = useState<Blog[]>([]);
  const [blogsByPageOriginal, setBlogsByPageOriginal] = useState<Blog[]>([]);
  const [pageDetails, setPageDetails] = useState<PageInfo>({
    size: 3,
    numberOfPages: 0,
    currentPage: 1,
    previousPage: 0,
  });
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState();

  useEffect(() => {
    setSearchParams({ page: "1", per_page: "3" });
  }, []);

  useEffect(() => {
    const page = searchParams.get("page");
    const perPage = searchParams.get("per_page");
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Blog[]>(`/posts?page=${page}&per_page=${perPage}&_embed`, {
        signal: controller.signal,
      })
      .then((res) => {
        setIsLoading(false);
        setBlogs(res.data);
        setBlogsByPage(res.data);
        setBlogsByPageOriginal(res.data);
        const numberOfPages = res.headers["x-wp-totalpages"];
        setPageDetails({ ...pageDetails, numberOfPages });
        setCategories(updateCategoryList(res.data));
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err);
      });
  }, [searchParams]);

  const updateCategoryList = (blogs: Blog[]) => {
    const allCategories = new Set();
    allCategories.add("all");
    for (const blog of blogs) {
      for (const categories of blog._embedded["wp:term"]) {
        for (const category of categories) {
          allCategories.add(category.name);
        }
      }
    }
    return Array.from(allCategories) as string[];
  };

  const handlePageInfoChange = (pageInfo: PageInfo) => {
    setSearchParams({ page: pageInfo.currentPage.toString(), per_page: "3" });
  };

  const filterBlogsByCategory = (filterCategory: string, blogs: Blog[]) => {
    if (filterCategory === "all") {
      setBlogsByPage(blogs);
      return;
    }
    const filteredBlogsSet = new Set();
    for (const blog of blogs) {
      for (const categories of blog._embedded["wp:term"]) {
        for (const category of categories) {
          if (category.name === filterCategory) {
            filteredBlogsSet.add(blog);
          }
        }
      }
    }
    const filteredBlogs = Array.from(filteredBlogsSet) as Blog[];
    setBlogsByPage(filteredBlogs);
  };

  return (
    <>
      <div className="container-fluid">
        {isLoading && <div className="spinner-border mx-auto"></div>}
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
                  <div className="mt-5">
                    <Pagination
                      pageInfo={pageDetails}
                      onPageInfoChange={handlePageInfoChange}
                    />
                  </div>
                  <div className="row justify-content-evenly">
                    {blogsByPage.map((blog, i) => (
                      <>
                        {i === 1 && (
                          <div
                            className="rounded category-box p-3 col-md-4 mt-5"
                            key={i + "recent"}
                          >
                            <h2 className="fs-4 text-center text-uppercase fw-bold">
                              {t("recent_posts")}
                            </h2>
                            {blogs.map(
                              (blog, i) =>
                                i < 3 && (
                                  <Link
                                    key={blog.id}
                                    className="text-decoration-none"
                                    to="#"
                                  >
                                    <BlogMiniSummary blog={blog} />
                                  </Link>
                                )
                            )}
                          </div>
                        )}
                        <div
                          className={
                            i === 0
                              ? "mt-5 col-md-7"
                              : i === 1
                              ? "mt-5 col-md-7"
                              : "mt-5 col-md-8"
                          }
                          key={i}
                        >
                          <BlogSummary blog={blog} />
                        </div>
                        {i === 0 && (
                          <div
                            className="rounded category-box py-3 col-md-4 mt-5"
                            key={i + "category"}
                          >
                            <h2 className="fs-4 text-center text-uppercase">
                              {t("categories")}
                            </h2>
                            <ul className="mt-3 ms-0">
                              {categories.map((category, i) => (
                                <li key={i} className="mt-3">
                                  <button
                                    className="fs-5 text-decoration-underline border-0 bg-transparent text-black text-capitalize"
                                    onClick={() =>
                                      filterBlogsByCategory(
                                        category,
                                        blogsByPageOriginal
                                      )
                                    }
                                  >
                                    {t(category)}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    ))}
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
