import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ items }) => {
    return (
        <div className="services-submenu__wrapper">
            <ul className="services-submenu">
                {
                    items.map((item) => (
                        <li key={item.id} className={item.listItemClassName}>
                            <div className={item.linkContentClassName}>
                                <img className={item.imgClassName} src={item.imgIcon} alt={item.imgAlt} />
                                <Link to={item.path} className={item.className}>
                                    {item.title}
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Dropdown;
