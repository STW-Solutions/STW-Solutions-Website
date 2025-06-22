import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContactUs.css";
import { faqData } from "../../constants";
import Accordion from "../../components/Accordion/Accordion";
import { CanceledError } from "../../services/api-client";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactUs = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };
  const [isLoading, setIsLoading] = useState<boolean>();
  const [httpError, setHttpError] = useState();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    solution: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    solution: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};

    if (!formData.name) newErrors.name = "name_is_required";
    if (!formData.email) {
      newErrors.email = "email_is_required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "invalid_email_format";
    }
    if (!formData.message) newErrors.message = "message_is_required";
    if (!formData.solution) newErrors.solution = "solution_is_required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      sendMessage();
    }
  };

  const sendMessage = () => {
    const form = document.getElementById(
      "contactForm"
    ) as HTMLFormElement | null;
    if (form) {
      let messageForm = new FormData(form);
      const subject = `${formData.solution}`;
      messageForm.append("subject", subject);
      messageForm.append("access_key", "cc37a4d1-7617-45f4-a43e-98181eb436b8");
      setIsLoading(true);
      const controller = new AbortController();
      axios
        .post(`https://api.web3forms.com/submit`, messageForm, {
          signal: controller.signal,
          headers: { "content-type": "multipart/form-data" },
        })
        .then((res) => {
          setIsLoading(false);
          setIsSubmitted(true);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setIsLoading(false);
          setIsSubmitted(false);
          setHttpError(err);
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{t("contact_us")} - STW Solutions Ltd</title>
          <meta name="contact us" content={t("meta_contact_us")} />
        </Helmet>
      </HelmetProvider>
      <div className="container-fluid px-5">
        <h1 className="text-capitalize text-center p-3 stw-solutions-h1 fs-2 text-black">
          {t("contact_us")}
        </h1>
        <div className="rounded-4 shadow border-0 mt-5 card bg-white card-container">
          <div className="d-flex flex-lg-row flex-column p-lg-4 p-3">
            <div className="border-5 rounded-4 m-lg-3 m-0 mb-lg-0 mb-4 container p-lg-5 p-3 text-div">
              <h5 className="fw-bolder text-capitalize mb-4">
                {t("get_in_touch")}
              </h5>
              <p className="lead mb-4">{t("contact_us_text")}</p>
              <div className="py-2">
                <span className="fs-5 fw-bold text-capitalize">
                  {t("business_address")}
                </span>
                : {"Carrefour Moussa, Odza 2BP 31191 Yaounde, Cameroon"}
              </div>
              <div className="py-2 d-flex align-items-start">
                <span className="fs-5 fw-bold text-capitalize">
                  {t("phone")}:{" "}
                </span>
                <span className="ms-1">
                  {"+237 677 742 214"}
                  <br />
                  {"+237 675 529 171"}
                </span>
              </div>
              <div className="py-2">
                <span className="fs-5 fw-bold text-capitalize">
                  {t("email")}
                </span>
                : {"info@stw-solution.com"}
              </div>
            </div>
            <span className="vertical-line d-lg-block d-none"></span>
            <div className="form-div shadow card border-5 rounded-4 m-lg-3 m-0 container p-lg-5 p-3">
              <form
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
                name="contact-us"
                id="contactForm"
              >
                {isSubmitted && (
                  <small>
                    <div className="alert alert-info text-center w-100">
                      <i>{t("your_contact_form_submission_worked")}</i>
                    </div>
                  </small>
                )}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-capitalize">
                    {t("name")}
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder={t("name")}
                    onChange={handleChange}
                    onBlur={() => {
                      if (!formData.name)
                        setErrors({ ...errors, name: "name_is_required" });
                    }}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{t(errors.name)}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-capitalize">
                    {t("email")}
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control form-control-sm ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder={t("example@email.com")}
                    onChange={handleChange}
                    onBlur={() => {
                      if (!formData.email) {
                        setErrors({ ...errors, email: "email_is_required" });
                      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                        setErrors({ ...errors, email: "invalid_email_format" });
                      }
                    }}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{t(errors.email)}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="address"
                    className="form-label text-capitalize"
                  >
                    {t("address")}
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="address"
                    name="address"
                    placeholder={t("address")}
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="solution" className="form-label">
                    {t("subject_which_can_be_a_solution")}
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <select
                    className={`form-select form-select-sm ${
                      errors.solution ? "is-invalid" : ""
                    }`}
                    aria-label="Default select example"
                    id="solution"
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    onBlur={() => {
                      if (!formData.solution)
                        setErrors({
                          ...errors,
                          solution: "solution_is_required",
                        });
                    }}
                  >
                    <option
                      defaultValue={t("select_a_subject_for_your_message")}
                    >
                      {t("select_a_subject_for_your_message")}
                    </option>
                    <option value={"Forestry"}>{t("forestry")}</option>
                    <option value={"Waste management"}>
                      {t("waste_management")}
                    </option>
                    <option value={"Renewable energy"}>
                      {t("renewable_energy")}
                    </option>
                    <option value={"Other"}>{t("other")}</option>
                  </select>
                  {errors.solution && (
                    <div className="invalid-feedback">{t(errors.solution)}</div>
                  )}
                </div>

                <div className="mb-3 mt-3">
                  <label
                    htmlFor="message"
                    className="form-label text-capitalize"
                  >
                    {t("message")}
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <textarea
                    className={`form-control form-control-sm ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    required
                    onChange={handleChange}
                    onBlur={() => {
                      if (!formData.message)
                        setErrors({
                          ...errors,
                          message: "message_is_required",
                        });
                    }}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{t(errors.message)}</div>
                  )}
                </div>

                <div className="text-center p-lg-5 p-3 pt-4">
                  <button
                    type="submit"
                    className="text-capitalize btn-sm text-white fw-bold send-message-btn btn w-100 w-lg-auto px-lg-5"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border"></div>
                      </div>
                    )}
                    {!isLoading && t("send_message")}
                  </button>
                </div>
                {httpError && (
                  <small>
                    <div className="alert alert-danger text-center w-100">
                      {t("your_submission_failed")}
                    </div>
                  </small>
                )}
              </form>
            </div>
          </div>
        </div>
        <section className="p-2 faq-section">
          <div className="containers row">
            <div className="col-md-6">
              <span className="text-center fw-bolder fs-2">FAQ</span>
              <h6 className="text-success stw-solutions-h1 fs-3">
                {t("freq_asked_ques")}
              </h6>
            </div>
            <div className="col-md-6">
              <Accordion
                items={faqData}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ContactUs;
