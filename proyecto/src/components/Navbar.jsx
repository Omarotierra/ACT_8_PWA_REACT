import { useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/Navbar.css';
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onClickInicio = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const onClickAbout = (e) => {
        e.preventDefault();
        navigate("/about");
    };

    const onClickContact = (e) => {
        e.preventDefault();
        navigate("/contact");
    };

    const onClickBlogs = (e) => {
        e.preventDefault();
        navigate("/blogs");
    };

    const onClickCryptoRates = (e) => {
        e.preventDefault();
        navigate("/cryptorates");
    };

    const onClickFinanceNews = (e) => {
        e.preventDefault();
        navigate("/financeNews");
    };

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <a className="navbar-brand" href="/" onClick={onClickInicio}>
                <img src="https://www.criptonoticias.com/wp-content/uploads/2015/11/criptonoticias-Recuperado-e1447682155297.jpg" alt="Logo" width="120" height="65" />
            </a>
            <nav ref={navRef}>
                <a href="/#" onClick={onClickInicio}>
                    <i className={`fas fa-home ${location.pathname === '/' ? 'active' : ''}`}></i> Inicio
                </a>
                <a href="/#" onClick={onClickBlogs}>
                    <i className={`fas fa-blog ${location.pathname === '/blogs' ? 'active' : ''}`}></i> Blogs
                </a>
                <a href="/#" onClick={onClickCryptoRates}>
                    <i className={`fas fa-coins ${location.pathname === '/cryptorates' ? 'active' : ''}`}></i> Crypto Rates
                </a>
                <a href="/#" onClick={onClickFinanceNews}>
                    <i className={`fas fa-newspaper ${location.pathname === '/financeNews' ? 'active' : ''}`}></i> Finance News
                </a>
                <a href="/#" onClick={onClickContact}>
                    <i className={`fas fa-phone ${location.pathname === '/contact' ? 'active' : ''}`}></i> Contacto
                </a>
                <a href="/#" onClick={onClickAbout}>
                    <i className={`fas fa-info-circle ${location.pathname === '/about' ? 'active' : ''}`}></i> Acerca de
                </a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <i className="fas fa-times"></i>
                </button>
            </nav>

            <button className="nav-btn" onClick={showNavbar}>
                <i className="fas fa-bars"></i>
            </button>
        </header>
    );
}

export default Navbar;
