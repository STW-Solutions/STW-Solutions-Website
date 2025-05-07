import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import apiClient, { CanceledError } from "../../services/api-client";
import { Blog, BlogCategory } from "../../models";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./BlogDetails.css";
import BlogMiniSummary from "../../components/BlogMiniSummary/BlogMiniSummary";

const BlogDetails = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();
  const [error, setError] = useState();
  const [categories, setCategories] = useState<BlogCategory[][]>();

  useEffect(() => {
    const blogId = JSON.parse(localStorage.getItem("blogIdentifier") || "");
    console.log(blogId);
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Blog>(`/posts/${blogId}?_embed`, {
        signal: controller.signal,
      })
      .then((res) => {
        setIsLoading(false);
        setBlog(res.data);
        console.log(res.data);
        setCategories(res.data._embedded["wp:term"])
        // console.log(res.data.content.rendered);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err);
      });
  }, []);

  useEffect(() => {
    // const categories = blog?._embedded["wp:term"]
    console.log(categories)
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
                <div className="bg-white shadow p-5 col-12 col-md-8">
                  <BlogSummary blog={blog} useAsDetails={true} />
                  <div
                    className="pt-5"
                    dangerouslySetInnerHTML={{
                      __html: blog?.content.rendered || "",
                    }}
                  ></div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 related-blogs-box p-3">
                    <h3 className="text-capitalize fw-bold">{t("other_related_blogs")}</h3>
                    {

                    }
                    <BlogMiniSummary blog={blog} />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
