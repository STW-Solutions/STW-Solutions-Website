import { FormEvent, useRef, useState } from "react";
import "./ReplyForm.css";
import { useTranslation } from "react-i18next";
import { BlogReply } from "../../models";
import apiClient, { CanceledError } from "../../services/api-client";

interface Props {
  postId: number;
}

const ReplyForm = ({ postId }: Props) => {
  const { t } = useTranslation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      const reply: BlogReply = {
        author_email: emailRef.current?.value.trim(),
        author_name: nameRef.current?.value.trim(),
        post: postId,
        content: messageRef.current?.value.trim()
      };
      addComment(reply);
    }
  };

  const addComment = (reply: BlogReply) => {
    const appPassword = "O7BR BkZQ j8PQ HMdx T6QM Rk0l";
    const username = "StwsDevAdmin";
    const authHeader = "Basic " + btoa(`${username}:${appPassword}`);
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .post<BlogReply>(`/comments`, JSON.stringify(reply), {
        signal: controller.signal,
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setIsLoading(false);
        setIsSubmitted(true);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setIsSubmitted(false);
        setError(err);
      });
  };

  const validateForm = () => {
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const message = messageRef.current?.value.trim();
    if (name && message) {
      if (email) {
        const isValid = /\S+@\S+\.\S+/.test(email);
        setIsFormValid(isValid);
        return;
      }
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form name="replyForm" onSubmit={handleSubmit}>
      {isSubmitted && (
        <small>
          <div className="alert alert-info text-center w-100">
            <i>{t("your_reply_form_submission_worked")}</i>
          </div>
        </small>
      )}
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
          required
          onChange={validateForm}
        ></textarea>
      </div>
      <div className="d-flex align-items-end">
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
            required
            onChange={validateForm}
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
            onChange={validateForm}
          />
        </div>
      </div>
      <div>
        <button
          className="btn submit-btn text-white w-25 text-uppercase fw-bold btn-sm"
          type="submit"
          disabled={!isFormValid}
        >
          {isLoading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border"></div>
            </div>
          )}
          {!isLoading && t("post_reply")}
        </button>
      </div>
      {error && (
        <small>
          <div className="alert alert-danger text-center w-100 my-5">
            {t("your_submission_failed")}
          </div>
        </small>
      )}
    </form>
  );
};

export default ReplyForm;
