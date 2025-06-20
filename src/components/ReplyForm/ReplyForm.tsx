import React, { FormEvent, useRef, useState } from "react";
import "./ReplyForm.css";
import { useTranslation } from "react-i18next";
import { BlogReply } from "../../models";
import apiClient, { CanceledError } from "../../services/api-client";

interface Props {
  postId: number;
}

const ReplyForm = ({postId}: Props) => {
  const { t } = useTranslation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [reply, setReply] = useState<BlogReply>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setReply({
      author_email: emailRef.current?.value,
      author_name: nameRef.current?.value,
      post: postId
    });
    messageRef.current?.value &&
      setReply({ ...reply, content: { rendered: messageRef.current?.value } });
    console.log(
      emailRef.current?.value,
      nameRef.current?.value,
      messageRef.current?.value
    );
  };

  const addComment = () => {
     setIsLoading(true);
        const controller = new AbortController();
        apiClient
          .post<BlogReply>(`/comments`, {
            signal: controller.signal,

          })
          .then((res) => {
            setIsLoading(false);
            // setBlog(res.data);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setIsLoading(false);
            setError(err);
          });
  }

  return (
    <form name="replyForm" onSubmit={handleSubmit}>
      <span>
        {t("reply_form_heading")}
        <span className="text-danger ms-1">*</span>
      </span>
      <div className="mb-3 mt-3">
        <label htmlFor="reply" className="form-label text-capitalize">
          {t("reply")}
          <span className="text-danger ms-1">*</span>
        </label>
        <textarea
          ref={messageRef}
          className="form-control form-control-sm"
          id="reply"
          maxLength={100}
        ></textarea>
      </div>
      <div className="d-flex">
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label text-capitalize">
            {t("name")}
            <span className="text-danger ms-1">*</span>
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control form-control-sm"
            id="name"
            placeholder="John Doe"
            maxLength={15}
          />
        </div>
        <div className="mb-3 ms-5 w-50">
          <label htmlFor="email" className="form-label">
            {t("email_address")}
          </label>
          <input
            ref={emailRef}
            type="email"
            className="form-control form-control-sm"
            id="email"
            placeholder="name@example.com"
            maxLength={15}
          />
        </div>
      </div>
      <div>
        <button
          className="btn submit-btn text-white w-25 text-uppercase fw-bold btn-sm"
          type="submit"
        >
          {t("post_reply")}
        </button>
      </div>
    </form>
  );
};

export default ReplyForm;
