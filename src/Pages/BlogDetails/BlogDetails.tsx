import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import apiClient, { CanceledError } from "../../services/api-client";
import { Blog, BlogCategory } from "../../models";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./BlogDetails.css";
import BlogMiniSummary from "../../components/BlogMiniSummary/BlogMiniSummary";
import { Link, useNavigate } from "react-router";
import { setBlogId } from "../../services/general-services";
import { useLocation } from "react-router";

const BlogDetails = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();
  const [error, setError] = useState();
  const blogId = JSON.parse(localStorage.getItem("blogIdentifier") || "");
  const categories: string[] = useLocation().state.blogCategories;
  const recentBlogs: Blog[] = useLocation().state.recentBlogs;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Blog>(`/posts/${blogId}?_embed`, {
        signal: controller.signal,
      })
      .then((res) => {
        setIsLoading(false);
        setBlog(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <div
      className={`container-fluid ${
        (error || isLoading) &&
        "blog-details-main d-flex justify-content-center align-items-center"
      }`}
    >
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )}
      {!isLoading && (
        <div className="px-5">
          <h1 className="stw-solutions-h1 text-center text-black text-capitalize">
            {blog?.title.rendered}
          </h1>
          {error && (
            <div className="alert alert-danger text-center w-100 my-5">
              {t("fetch_blogs_error")}
            </div>
          )}
          {blog && (
            <>
              <div className="row justify-content-evenly">
                <div className="bg-white shadow p-5 col-12 col-lg-7">
                  <BlogSummary blog={blog} useAsDetails={true} />
                  <div
                    className="pt-5"
                    dangerouslySetInnerHTML={{
                      __html: blog?.content.rendered || "",
                    }}
                  ></div>
                </div>
                <div className="col-lg-5">
                  <div className="rounded category-box py-3">
                    <h2 className="fs-4 text-center text-uppercase">
                      {t("categories")}
                    </h2>
                    <ul className="mt-3 ms-0">
                      {categories.map((category, i) => (
                        <li key={`${i}category`} className="mt-3">
                          <Link
                            to={""}
                            className="fs-5 text-black text-capitalize"
                          >
                            {t(category)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`rounded category-box p-3 mt-5}`}
                    key={`${blog.id}recentBlogs`}
                  >
                    <h2 className="fs-4 text-center text-uppercase fw-bold">
                      {t("recent_posts")}
                    </h2>
                    {recentBlogs.map(
                      (recentBlog, i) =>
                        i < 3 && (
                          <div
                            onClick={() => setBlogId(recentBlog.id)}
                            key={`${recentBlog.id}recentBlog`}
                          >
                            <Link
                              className="text-decoration-none"
                              state={{
                                blogCategories: categories,
                                recentBlogs: recentBlogs,
                              }}
                              to={`/blog-details/${recentBlog.slug}`}
                            >
                              <BlogMiniSummary
                                blog={recentBlog}
                                titleWidth="mini-summary-blog"
                              />
                            </Link>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="row"></div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
