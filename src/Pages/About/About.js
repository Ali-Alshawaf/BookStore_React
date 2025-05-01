import { useTranslation } from "react-i18next";

const About = ()=>{
  const { t } = useTranslation();

    return(
        <>
        <h1 className="my-4 text-center">{t("About.title")}</h1>
         </>
    );

}; export default About;
