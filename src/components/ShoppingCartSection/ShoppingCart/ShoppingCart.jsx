import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/data/assets.js";

const ShoppingCart = ({
                          productName,
                          category  = [],
                          src,
                          alt,
                          cuisine = [],
                          timeToPrepare,
                          ingredients = []
}) => {
    return (
        <div className="shopping-cart__box">
            <div className="shopping-cart">
                <img className="shopping-cart__img" src={src} alt={alt} />
                <div className="shopping-cart__description">
                    <h2 className="shopping-cart__header">{productName}</h2>
                    <p className="shopping-cart__category">
                        Category <img className="shopping-cart__category-icon" src={assets.pie_black_logo} alt="pie logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                        {
                            category.map((currentCategory) => (
                                <Link
                                    to={currentCategory.link}
                                    className="shopping-cart__category-link"
                                >
                                    {currentCategory.name}
                                </Link>
                            ))
                        }
                    </p>
                    <p className="shopping-cart__ingredients">
                        <span>Ingredients<img className="shopping-cart__ingredients-icon" src={assets.recipe_book_logo} alt="recipe book logo" />&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span>
                        {
                            ingredients.map((ingredient, index) => (
                                <span className="shopping-cart__ingredients-links" key={index}>
                                    <Link to={ingredient.link} className={ingredient.ingredientClassName}>
                                        {ingredient.name}
                                    </Link>
                                    {
                                        index < ingredients.length - 1 && ", "
                                    }
                                </span>
                            ))
                        }
                    </p>
                    <p className="shopping-cart__cuisine">
                        Cuisine <img className="shopping-cart__cuisine-icon" src={assets.cuisine_logo} alt="recipe book logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                        {
                            cuisine.map((cuisine) => (
                                <Link to={cuisine.link} className="shopping-cart__category-link">{cuisine.name}</Link>
                            ))
                        }
                    </p>
                    <p className="shopping-cart__time-to-prepare">
                        Time to prepare <img className="shopping-cart__time-to-prepare-icon" src={assets.timer_logo} alt="recipe book logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                        <Link to="#" className="shopping-cart__category-link">{timeToPrepare}</Link>
                    </p>
                    <button className="shopping-cart__read-recipe-btn">
                        <img className="shopping-cart__read-recipe-btn-icon" src={assets.reading_logo_white} alt="recipe book logo"/>
                        <Link to="#" className="shopping-cart__read-recipe-link">
                            Read more
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;