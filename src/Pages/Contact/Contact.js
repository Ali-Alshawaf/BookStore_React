import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1 className="text-center">{t("contact.title")}</h1>

            <div className="form-group">
                <label>
                    {t("contact.name")}:
                    <input
                        className="form-control"
                        type="text"
                        name="Name"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    {t("contact.email")}:
                    <input
                        className="form-control"
                        type="text"
                        name="Email"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    {t("contact.phone")}:
                    <input
                        className="form-control"
                        type="number"
                        name="Number"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label>
                    {t("contact.message")}:
                    <textarea
                        className="form-control"
                        name="Message"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <button className="btn btn-dark" type="button">
                    {t("contact.send")}
                </button>
            </div>
        </div>
    );
};

export default Contact;
