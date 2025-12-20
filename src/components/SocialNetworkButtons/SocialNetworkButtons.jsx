import "./SocialNetworkButtons.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/data/assets.js";

const SocialNetworkButtons = () => {
    return (
        <>
            <button className="social-networks__button">
                <Link to="/instagram" className="social-networks__button-link">
                    <img className="social-networks__button-image" id="instagram-button-image"
                         src={assets.instagram_icon} alt="instagram icon"/>
                </Link>
            </button>
            <button className="social-networks__button">
                <Link to="/tiktok" className="social-networks__button-link">
                    <img className="social-networks__button-image" id="tiktok-button-image" src={assets.tiktok_icon}
                         alt="tiktok icon"/>
                </Link>
            </button>
            <button className="social-networks__button">
                <Link to="/telegram" className="social-networks__button-link">
                    <img className="social-networks__button-image" id="telegram-button-image" src={assets.telegram_icon}
                         alt="telegram icon"/>
                </Link>
            </button>
            <button className="social-networks__button">
                <Link to="/facebook" className="social-networks__button-link">
                    <img className="social-networks__button-image" id="facebook-button-image" src={assets.facebook_icon}
                         alt="facebook icon"/>
                </Link>
            </button>
            <button className="social-networks__button">
                <Link to="/instagram" className="social-networks__button-link">
                    <img className="social-networks__button-image" id="instagram-button-image" src={assets.x_logo} alt="x icon"/>
                </Link>
            </button>
        </>
    );
}

export default SocialNetworkButtons;