import "./Navbar.css";
import { assets } from "../../assets/data/assets.js";
import { navItems } from "../../assets/data/navigation.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialNetworkButtons from "../SocialNetworkButtons/SocialNetworkButtons.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { serviceDropdown } from "../../assets/data/navigation.js";

const Navbar = () => {
    const [productsOpen, setProductsOpen] = useState(false);

    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <nav className="navbar">
                    <Link to="/" className="navbar__logo">
                        <img
                            className="navbar__logo-image"
                            src={assets.dana_confectionery_logo}
                            alt="dana confectionery logo"
                        />
                    </Link>
                    <ul className="navbar__items-list">
                        {
                            navItems.map((item) => {
                                if (item.title === "Products") {
                                    return (
                                        <li
                                            className={item.className}
                                            key={item.id}
                                            onMouseEnter={() => setProductsOpen(true)}
                                            onMouseLeave={() => setProductsOpen(false)}
                                        >
                                            <Link to={item.path} className={item.linkClassName}>
                                                {item.title}
                                            </Link>
                                            {
                                                productsOpen && <Dropdown items={serviceDropdown} />
                                            }
                                        </li>
                                    );
                                }

                                return (
                                    <li className={item.className} key={item.id}>
                                        <Link className={item.linkClassName} to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                    <SocialNetworkButtons />
                </nav>
            </div>
        </div>
    );
};

export default Navbar;