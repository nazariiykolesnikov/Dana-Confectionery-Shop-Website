import React from 'react';
import "./Footer.css";
import { assets } from "../../assets/data/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__row">
                        <div className="footer__col">
                            <img className="footer__logo" src={assets.dana_confectionery_logo} alt="logo" />
                            <p className="footer__subsribe-description">
                                Subscribe Dana Confectionery channel to watch more useful and interesting recipes,
                                buy our desserts, cool sales, participate in competitions.
                            </p>
                        </div>
                        <div className="footer__col">
                            <h3 className="footer__col-heading">Our Location</h3>
                            <div className="underline location"></div>
                            <p className="footer__col-text street">37A Ave</p>
                            <p className="footer__col-text city">Edmonton, Canada</p>
                            <Link to="mailto:danaconfectionerycafecanada@gmail.com" className="email-id">danaconfectionerycafecanada@gmail.com</Link>
                            <h4 className="footer__col-text phone">+1 (416) 000-0000</h4>
                        </div>
                        <div className="footer__col">
                            <h3 className="footer__col-heading">Our Products</h3>
                            <div className="underline products"></div>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a className="footer__list-item-link" href="#">Cakes</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-item-link" href="#">Pies</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-item-link" href="#">Buns</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-item-link" href="#">Waffles</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-item-link" href="#">Eclairs</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-item-link" href="#">Cupcakes</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h3 className="footer__col-heading">Our Blog</h3>
                            <div className="underline blog"></div>
                            <form className="footer__blog-form">
                                <input type="email" placeholder="Enter your email address :" className="footer__blog-input" required/>
                                <button type="submit" className="footer__blog-btn">
                                    <img className="footer__blog-img" src={assets.arrow_right_white}  alt="arrow right logo"/>
                                </button>
                            </form>
                            <div className="footer__social-icons">
                                <img src={assets.instagram_icon_white} className="footer__social-icons-img instagram" alt="instagram logo"/>
                                <img src={assets.tiktok_icon_white} className="footer__social-icons-img tiktok" alt="tiktok logo"/>
                                <img src={assets.facebook_icon_white} className="footer__social-icons-img facebook" alt="facebook logo"/>
                                <img src={assets.telegram_icon_white} className="footer__social-icons-img telegram" alt="telegram logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="copyrights">@2025 Dana Confectionery. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Footer;