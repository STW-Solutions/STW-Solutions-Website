import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import apiClient, { CanceledError } from "../../services/api-client";
import { Blog } from "../../models";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./BlogDetails.css";
import BlogMiniSummary from "../../components/BlogMiniSummary/BlogMiniSummary";
import { Link, useNavigate } from "react-router";
import { useBlogsContext } from "../../contexts/blogs-context-provider";
import ReplySummary from "../../components/ReplySummary/ReplySummary";
import ReplyForm from "../../components/ReplyForm/ReplyForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BlogDetails = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { setCurrentCategory, categories, blogDetailId, recentBlogs } =
    useBlogsContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    blogDetailId && getBlog(parseInt(blogDetailId));
  }, []);

  const getBlog = (id: number) => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Blog>(`/posts/${id}?_embed`, {
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
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`${blog?.title.rendered} - STW Solutions Ltd`}</title>
          <meta name="blog details" content={blog?.title.rendered} />
        </Helmet>
      </HelmetProvider>
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
          <div className="px-sm-5 px-1">
            <div className="ms-5 mt-5">
              <Link
                to={"/blogs"}
                className="btn border-0 back-btn rounded text-white mb-5 align-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-back-icon me-3"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
                {t("back_to_blogs")}
              </Link>
            </div>
            <h1 className="stw-solutions-h1 text-center text-black text-capitalize mt-3">
              {blog?.title.rendered}
            </h1>
            {error && (
              <div className="alert alert-danger text-center w-100 my-5">
                {t("fetch_blogs_error")}
              </div>
            )}
            {blog && (
              <>
                <div className="row justify-content-evenly mt-5">
                  <div className="bg-white shadow p-5 col-12 col-lg-7">
                    <BlogSummary blog={blog} useAsDetails={true} />
                    <div
                      className="pt-5"
                      dangerouslySetInnerHTML={{
                        __html: blog?.content.rendered || "",
                      }}
                    ></div>
                  </div>
                  <div className="mt-5 mt-lg-0 col-lg-4">
                    <div className="rounded category-box py-3">
                      <h2 className="fs-4 text-center text-uppercase">
                        {t("categories")}
                      </h2>
                      <ul className="mt-3 ms-0">
                        {categories?.map((category, i) => (
                          <li className="mt-3" key={i}>
                            <button
                              onClick={() => {
                                navigate("/blogs");
                                setCurrentCategory(category);
                              }}
                              className="btn border-0 text-decoration-underline fs-5 text-black text-capitalize"
                            >
                              {t(category.name)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`rounded category-box px-3 py-4 mt-3`}
                      key={`${blog.id}recentBlogs`}
                    >
                      <h2 className="fs-4 text-center text-uppercase fw-bold">
                        {t("recent_posts")}
                      </h2>
                      <div className="mx-auto recent-post-blog-details-box">
                        {recentBlogs?.map(
                          (recentBlog, i) =>
                            i < 3 && (
                              <div
                                onClick={() => getBlog(recentBlog.id)}
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
                </div>
                {blog._embedded?.replies &&
                  blog._embedded.replies[0].length && (
                    <div className="mt-5 ms-0 ms-sm-5 ps-5">
                      <h3 className="text-uppercase fs-4">
                        {t("replies")} {`(${blog._embedded.replies[0].length})`}
                      </h3>
                      <div className="row">
                        <div className="col-12 col-md-8 mt-3">
                          {blog._embedded.replies[0].map((reply, i) => (
                            <ReplySummary reply={reply} key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                <div className="ms-0 ms-sm-5 ps-5 mt-5">
                  <h3 className="text-uppercase fs-4">{t("leave_a_reply")}</h3>
                  <div className="row">
                    <div className="col-12 col-md-8 mt-3">
                      <ReplyForm postId={blog.id} />
                    </div>
                  </div>
                </div>

                <div className="ms-5 mt-5 pt-0 pt-lg-5">
                  <Link
                    to={"/blogs"}
                    className="btn border-0 back-btn rounded text-white mb-5 align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-back-icon me-3"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                    {t("back_to_blogs")}
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
