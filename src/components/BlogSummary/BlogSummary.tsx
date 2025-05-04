import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { Blog } from "../../models";
import "./BlogSummary.css";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../services/general-services";

interface Props {
  blog: Blog;
}
const BlogSummary = ({ blog }: Props) => {
  const { t } = useTranslation();
  const blogDate = new Date(blog.date);
  const dateNow = new Date();
  const milliseconds = dateNow.getTime() - blogDate.getTime();
  const dateInHours = Math.floor(milliseconds / (1000 * 60 * 60));
  const [blogImage, setBlogImage] = useState("");

  useEffect(() => {
    getImageUrl(blog.content.rendered);
    setBlogImage(getImageUrl(blog.content.rendered)[0]);
  }, []);

  return (
    <Link className="bg-white shadow p-5 d-block text-decoration-none" to="#">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center mb-2 text-muted blog-author">
          <span>
            {`${t("posted_by")} `}
            <b className="text-capitalize">{blog._embedded.author[0].name}</b>
          </span>
          <div className="profile-svg-box d-flex justify-content-center ms-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="profile-svg"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </div>
          <span className="ms-1">
            {dateInHours < 24
              ? dateInHours < 1
                ? t("less_than_an_hour_ago")
                : dateInHours === 1
                ? `${dateInHours} ${t("hour_ago")}`
                : `${dateInHours} ${t("hours_ago")}`
              : format(blogDate, "MMMM dd, yyyy")}
          </span>
        </div>
        <div className="position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="message-svg"
          >
            <path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z" />
          </svg>
          {blog.comment_status === "open" && (
            <b className="text-white comment-counter">
              {blog._embedded.replies ? blog._embedded.replies[0].length : "0"}
            </b>
          )}
        </div>
      </div>
      <h3 className="text-decoration-underline fw-normal fs-4 text-black">
        {blog.title.rendered}
      </h3>
      <div
        dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
        className="text-muted"
      ></div>
      <div className="mt-5 position-relative">
        <img src={blogImage} className="w-100 blog-image" />
        <div className="category-main">
          {blog._embedded["wp:term"].map((categories) => (
            categories.map((category) => (
              <small className="text-black shadow p-2 rounded text-uppercase category-item-box mt-1 d-block fw-bold">{category.name}</small>
            ))
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogSummary;