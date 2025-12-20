import React from "react";
import "./Products.css";

const Products = () => {
    const items = ["Baklava 🌿", "Honey Cake 🍯", "Macaroons 🌈", "Cupcakes 🧁"];

    return (
        <section className="products">
            <h2>Our Specialties 🥮🍪</h2>
            <div className="grid">
                {
                    items.map((item, index) => (
                        <div key={index} className="card">{item}</div>
                    ))
                }
            </div>
        </section>
    );
}

export default Products;