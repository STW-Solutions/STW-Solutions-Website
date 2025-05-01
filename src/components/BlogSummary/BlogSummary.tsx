import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { Blog } from "../../models";
import "./BlogSummary.css";
import { Link } from "react-router";

interface Props {
  blog: Blog;
}
const BlogSummary = ({ blog }: Props) => {
  const { t } = useTranslation();
  const blogDate = new Date(blog.date);
  const dateNow = new Date();
  const milliseconds = dateNow.getTime() - blogDate.getTime();
  const dateInHours = Math.floor(milliseconds / (1000 * 60 * 60));

  return (
    <Link className="bg-white shadow p-3 d-block text-decoration-none" to="#" >
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
      <h3 className="text-decoration-underline fw-normal fs-4 text-black">{blog.title.rendered}</h3>
      <div dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} className="text-muted"></div>
    </Link>
  );
};

export default BlogSummary;
