import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import apiClient, { CanceledError } from "../../services/api-client";
import { Blog } from "../../models";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./BlogDetails.css";
import BlogMiniSummary from "../../components/BlogMiniSummary/BlogMiniSummary";
import { Link } from "react-router";
import { setBlogId } from "../../services/general-services";

const BlogDetails = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();
  const [error, setError] = useState();
  const [categories, setCategories] = useState<number[]>();
  const [isOtherBlogsLoading, setIsOtherBlogsLoading] = useState(false);
  const [otherBlogs, setOtherBlogs] = useState<Blog[]>([]);
  const blogId = JSON.parse(localStorage.getItem("blogIdentifier") || "");

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
        // setCategories(res.data.categories);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err);
      });
  }, []);

  // useEffect(() => {
  //   if(blog?._embedded.replies[0].length) {

  //   }
  // })

  // useEffect(() => {
  //   setIsOtherBlogsLoading(true);
  //   const controller = new AbortController();
  //   categories?.forEach((category, i) => {
  //     if (i < 4) {
  //       apiClient
  //         .get<Blog[]>(`/posts?per_page=3&categories=${category}&_embed`, {
  //           signal: controller.signal,
  //         })
  //         .then((res) => {
  //           setIsOtherBlogsLoading(false);
  //           setOtherBlogs([...otherBlogs, ...res.data]);
  //         })
  //         .catch((err) => {
  //           if (err instanceof CanceledError) return;
  //           setIsOtherBlogsLoading(false);
  //         });
  //     }
  //   });
  // }, [categories]);

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
                <div className="bg-white shadow p-5 col-12 col-md-8">
                  <BlogSummary blog={blog} useAsDetails={true} />
                  <div
                    className="pt-5"
                    dangerouslySetInnerHTML={{
                      __html: blog?.content.rendered || "",
                    }}
                  ></div>
                </div>
                {/* <div className="col-12 col-md-4 col-lg-3 related-blogs-box p-3">
                  <h3 className="text-capitalize fw-bold">
                    {t("other_related_blogs")}
                  </h3>
                  {isOtherBlogsLoading && (
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border"></div>
                    </div>
                  )}
                  {!isOtherBlogsLoading &&
                    otherBlogs
                      .filter(
                        (relatedBlog, index, self) =>
                          relatedBlog.id !== blog.id &&
                          index ===
                            self.findIndex((t) => t.id === relatedBlog.id)
                      )
                      .map(
                        (relatedBlog, i) =>
                          i < 4 && (
                            <div onClick={() => setBlogId(relatedBlog.id)} key={i}>
                              <Link
                                className="text-decoration-none"
                                to={`/blog-details/${relatedBlog.slug}`}
                              >
                                <BlogMiniSummary
                                  blog={relatedBlog}
                                  titleWidth="mini-summary-blog-details"
                                />
                              </Link>
                            </div>
                          )
                      )}
                  {!isOtherBlogsLoading && otherBlogs.length === 0 && (
                    <BlogMiniSummary
                      titleWidth="mini-summary-blog-details"
                      blog={blog}
                    />
                  )}
                </div> */}
              </div>
              <div className="row">
                  
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
