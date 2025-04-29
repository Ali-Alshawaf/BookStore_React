import Book from '../Book/Book';
import '../Home/Home.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const Home = () => {
    const { t } = useTranslation();

   

    return (
        <>
        <div class="hero bg-light py-5">
            <div class="container text-center">
            <h1 className="display-4">{t("home.welcomeMessage")}</h1> 
            <p className="lead">{t("home.subMessage")}</p>
                <Link to="/Book" class="btn btn-dark btn-lg">{t("home.exploreButton")}</Link>
            </div>
        </div>

        <div>
          <Book></Book>
        </div>
        </>
    );
};

export default Home;
