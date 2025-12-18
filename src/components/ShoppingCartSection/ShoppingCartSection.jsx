import "./ShoppingCartSection.css";
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx";
import { productImages } from "../../assets/data/product-images.js";

const ShoppingCartSection = ({ activeCategory }) => {
    const filteredProducts = productImages.filter((product) =>
        product.category.some((currentCategory) => currentCategory.name === activeCategory)
    );

    return (
        <div className="shopping-cart-section__container">
            <div className="shopping-cart-section__wrapper">
                <div className="shopping-cart__section">
                    {filteredProducts.map((product) => (
                        <ShoppingCart
                            key={product.id}
                            productName={product.productName}
                            src={product.src}
                            alt={product.alt}
                            cuisine={product.cuisine}
                            ingredients={product.ingredients}
                            timeToPrepare={product.timeToPrepare}
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartSection;
