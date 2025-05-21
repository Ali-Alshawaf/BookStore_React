import Book from '../Book/Book';
import '../Home/Home.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Home = ({ cart, setCart }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="hero bg-light py-5">
                <div className="container text-center">
                    <h1 className="display-4">{t("home.welcomeMessage")}</h1>
                    <p className="lead">{t("home.subMessage")}</p>
                    <Link to="/Book" className="btn btn-dark btn-lg">{t("home.exploreButton")}</Link>
                </div>
            </div>
            <div>
                <Book cart={cart} setCart={setCart} />
            </div>
        </>
    );
};

export default Home;

