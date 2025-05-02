import { Blog } from "../../models";
import { getImageUrl } from "../../services/general-services";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import "./RecentBlogSummary.css"

interface Props {
  blog: Blog;
}

const RecentBlogSummary = ({ blog }: Props) => {
  const imageUrl = getImageUrl(blog.content.rendered)[0];
  const blogDate = new Date(blog.date);
  const { t } = useTranslation();

  return (
    <div className="d-flex shadow bg-white p-2 mt-3">
      <img src={imageUrl} className="recent-blog-image" />
      <div className="ms-3">
        <div className="fs-4 text-black text-truncate fw-bold blog-title">{blog.title.rendered}</div>
        <div className="text-muted">
          {format(blogDate, "MMMM dd, yyyy")}
          {blog.comment_status === "open" && (
            <div className="text-capitalize">
              {blog._embedded.replies
                ? blog._embedded.replies[0].length === 1
                  ? t("1_comment")
                  : `${blog._embedded.replies[0].length} ${t("comments")}`
                : ` ${t("no_comments")}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogSummary;
