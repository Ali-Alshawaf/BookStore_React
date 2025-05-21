import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <div className="container d-flex justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-6">
                <h1 className="my-4 text-center">{t("contact.title")}</h1>

                <form>
                    <div className="form-group">
                        <label
                            htmlFor="name"
                            className={isRTL ? "text-end d-block" : "text-start d-block"}>
                            {t("contact.name")}
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder={t("contact.placeholderName")}

                            dir={isRTL ? "rtl" : "ltr"} readOnly />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="email"
                            className={isRTL ? "text-end d-block" : "text-start d-block"}>
                            {t("contact.email")}
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Example@gmail.com"
                            readOnly />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="phone"
                            className={isRTL ? "text-end d-block" : "text-start d-block"}>
                            {t("contact.phone")}
                        </label>
                        <input
                            className="form-control"
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+966 5xxx xxxxx"
                            readOnly />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="message"
                            className={isRTL ? "text-end d-block" : "text-start d-block"}>
                            {t("contact.message")}
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            placeholder={t("contact.placeholderMessage")}

                            dir={isRTL ? "rtl" : "ltr"} readOnly></textarea>
                    </div>

                    <button className="btn btn-dark mt-3" type="submit">
                        {t("contact.send")}
                    </button>
                </form>

            </div>
        </div>
    );
};
export default Contact;
