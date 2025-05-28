import { useState } from "react";
import {useTranslation} from "react-i18next";
import "./ContactUs.css"
import {faqData} from "../../constants";
import Accordion from "../../components/Accordion/Accordion";

const ContactUs = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? 0 : index);
    };
    const businessAddress = "Carrefour Moussa, Odza 2 BP 31191 Yaounde, Cameroon";
    const email = "info@stw-solution.com"
    const phone1 = "+237 677 742 214";
    const phone2 = "+237 675 529 171";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        address: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: any = {};

        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!formData.address) newErrors.address = "Address is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="container-fluid px-5">
            <h3 className="text-capitalize text-center p-3">{t("contact_us")}</h3>
            <div className="rounded-4 shadow border-0 mt-5 card bg-white card-container">
                <div className="d-flex flex-lg-row flex-column p-lg-4 p-3">
                    {/* Left Section (Contact Info) */}
                    <div className="border-5 rounded-4 m-lg-3 m-0 mb-lg-0 mb-4 container p-lg-5 p-3 text-div">
                        <h5 className="fw-bolder text-capitalize mb-4">{t('get_in_touch')}</h5>
                        <p className="lead mb-4">
                            {t('contact_us_text')}
                        </p>
                        <h5 className="fw-bold text-capitalize mb-3">{t('contact_us')}</h5>
                        <div className="py-2">
                            <span className="fs-5 fw-bold text-capitalize">{t("business_address")}</span>: {businessAddress}
                        </div>
                        <div className="py-2">
                            <span className="fs-5 fw-bold text-capitalize">{t("phone")}</span>: {phone1}, {phone2}
                        </div>
                        <div className="py-2">
                            <span className="fs-5 fw-bold text-capitalize">{t("email")}</span>: {email}
                        </div>
                    </div>

                    {/* Vertical Line (Hidden on Mobile) */}
                    <span className="vertical-line d-lg-block d-none"></span>

                    {/* Right Section (Form) */}
                    <div className="form-div shadow card border-5 rounded-4 m-lg-3 m-0 container p-lg-5 p-3">
                        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    placeholder={t("name")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!formData.name) setErrors({ ...errors, name: "Name is required." });
                                    }}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder={t("example@email.com")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!formData.email) {
                                            setErrors({ ...errors, email: "Email is required." });
                                        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                                            setErrors({ ...errors, email: "Invalid email format." });
                                        }
                                    }}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.address ? "is-invalid" : ""}`}
                                    id="aaddress"
                                    name="address"
                                    placeholder={t("address")}
                                    value={formData.address}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!formData.address) setErrors({ ...errors, address: "Address is required." });
                                    }}
                                />
                                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                            </div>

                            <div className="text-center p-lg-5 p-3 pt-4">
                                <button
                                    type="submit"
                                    className="text-capitalize btn btn-success w-100 w-lg-auto px-lg-5"
                                    disabled={true}
                                >
                                    {t("send_message")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <section  className="p-2">
                <div className="containers row">
                    <div className="col-md-6">
                        <span className="text-center fw-bolder fs-2">FAQ</span>
                        <h1 className="text-success stw-solutions-h1 ">{t("freq_asked_ques")}</h1>
                    </div>
                    <div className="col-md-6">
                       <Accordion items={faqData}
                                  activeIndex={activeIndex}
                                  toggleAccordion={toggleAccordion}/>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ContactUs;