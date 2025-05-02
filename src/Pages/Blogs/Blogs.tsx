import { Blog } from "../../models";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";
import { useTranslation } from "react-i18next";
import BlogSummary from "../../components/BlogSummary/BlogSummary";
import "./Blogs.css";
import RecentBlogSummary from "../../components/RecentBlogSummary/RecentBlogSummary";
import { Link } from "react-router";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sortedBlogs, setSortedBlogs] = useState<Blog[]>([]);
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
        mostRecentBlogSort(res.data);
        console.log(res.data);
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

  const mostRecentBlogSort = (blogs: Blog[]) => {
    blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setSortedBlogs(blogs);
  };

  return (
    <>
      <div className="container-fluid">
        {isLoading && <div className="spinner-border mx-auto"></div>}
        {!isLoading && (
          <div className="container">
            <h1 className="stw-solutions-h1 text-black ms-4 ps-1 text-capitalize">
              {t("blogs")}
            </h1>
            {blogs.length > 0 && (
              <div>
                <div className="row justify-content-evenly">
                  <div className="col-md-7">
                    <BlogSummary blog={blogs[0]} />
                  </div>
                  <div className="rounded category-box py-3 col-md-4">
                    <h2 className="fs-4 text-center text-uppercase">
                      {t("categories")}
                    </h2>
                    <ul className="mt-3 ms-0">
                      {categories.map((category, i) => (
                        <li key={i} className="mt-3">
                          <button className="fs-5 text-decoration-underline border-0 bg-transparent text-black">
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row mt-5 justify-content-evenly">
                  <div className="rounded category-box p-3 col-md-4">
                    <h2 className="fs-4 text-center text-uppercase fw-bold">
                      {t("recent_posts")}
                    </h2>
                    {sortedBlogs.map(
                      (blog, i) =>
                        i < 3 && (
                          <Link key={blog.id} className="text-decoration-none" to="#">
                            <RecentBlogSummary blog={blog} />
                          </Link>
                        )
                    )}
                  </div>
                  <div className="col-md-7">
                    <BlogSummary blog={blogs[1]} />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-8 mx-auto">
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
