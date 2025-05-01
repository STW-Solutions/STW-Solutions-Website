import { Blog } from "../../models";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";
import { useTranslation } from "react-i18next";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./Blogs.css";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Blog[]>("/posts?_embed", {
        signal: controller.signal,
      })
      .then((res) => {
        setIsLoading(false);
        setBlogs(res.data);
        setCategories(updateCategoryList(res.data));
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const updateCategoryList = (blogs: Blog[]) => {
    const allCategories = new Set();
    for (const blog of blogs) {
      for (const categories of blog._embedded["wp:term"]) {
        for (const category of categories) {
          allCategories.add(category.name);
        }
      }
    }
    return Array.from(allCategories) as string[];
  };

  return (
    <>
      <div className="container-fluid">
        {isLoading && <div className="spinner-border mx-auto"></div>}
        {!isLoading && (
          <div>
            <h1 className="stw-solutions-h1 text-black text-capitalize">
              {t("blogs")}
            </h1>
            {blogs.length > 0 && (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <BlogSummary blog={blogs[0]} />
                  </div>
                  <div className="rounded category-box py-3 col-md-3">
                    <h2 className="fs-4 text-center text-capitalize">
                      {t("categories")}
                    </h2>
                    <ul className="mt-3 ms-0">
                      {categories.map((category, i) => (
                        <li key={i} className="">
                          <button className="text-decoration-underline border-0 bg-transparent text-black">
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row mt-4 justify-content-center">
                  <div className="rounded category-box py-3 col-md-3">
                    <h2 className="fs-4 text-center text-capitalize">
                      {t("categories")}
                    </h2>
                    <ul className="mt-3 ms-0">
                      {categories.map((category, i) => (
                        <li key={i} className="">
                          <button className="text-decoration-underline border-0 bg-transparent text-black">
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <BlogSummary blog={blogs[1]} />
                  </div>
                </div>
                <div className="row mt-4">
                <div className="col-md-7 mx-auto">
                    <BlogSummary blog={blogs[2]} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
