import { BlogReply } from "../../models";
import { format } from "date-fns";

interface Props {
  reply: BlogReply;
}

const ReplySummary = ({ reply }: Props) => {
  return (
    <div>
      <div className="d-flex">
        <div className="profile-svg-box d-flex justify-content-center ms-1 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="profile-svg"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>
        </div>
        <span className="ms-2">
          <span className="fw-semibold">{reply.author_name}</span>
          {reply.date && (
            <div>
              <small className="text-muted">
                {format(new Date(reply.date), "MMMM dd, yyyy")}
              </small>
            </div>
          )}
        </span>
      </div>
      {reply.content && (
        <p
          dangerouslySetInnerHTML={{ __html: reply.content.rendered }}
          className="text-muted mt-2"
        ></p>
      )}
      <hr className="reply-hr" style={{ border: "1px solid" }} />
    </div>
  );
};

export default ReplySummary;
