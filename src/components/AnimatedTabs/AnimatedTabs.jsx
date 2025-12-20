import React, { useState } from "react";
import "./AnimatedTabs.css";
import { assets } from "../../assets/data/assets.js";
import ShoppingCartSection from "../ShoppingCartSection/ShoppingCartSection.jsx";

const icons = [
    { src: assets.cake_logo, alt: "animated tabs nav cake logo", id: "animated-tabs__nav-img-1" },
    { src: assets.pie_logo, alt: "animated tabs nav pie logo", id: "animated-tabs__nav-img-2" },
    { src: assets.buns_logo, alt: "animated tabs nav buns_logo", id: "animated-tabs__nav-img-3" },
    { src: assets.belgian_waffle_logo, alt: "animated tabs nav belgian waffle logo", id: "animated-tabs__nav-img-4" },
    { src: assets.pudding_logo, alt: "animated tabs nav pudding logo", id: "animated-tabs__nav-img-5" },
    { src: assets.macaroons_logo, alt: "animated tabs nav macaroons logo", id: "animated-tabs__nav-img-6" },
    { src: assets.cupcake_logo, alt: "animated tabs nav handmade candies logo", id: "animated-tabs__nav-img-7" },
    { src: assets.biscuit_logo, alt: "animated tabs nav macaroons logo", id: "animated-tabs__nav-img-8" },
    { src: assets.handmade_candies_logo, alt: "animated tabs nav macaroons logo", id: "animated-tabs__nav-img-9" },
    { src: assets.jelly_souffle_logo, alt: "animated tabs nav biscuit logo", id: "animated-tabs__nav-img-10" },
    { src: assets.ice_cream_logo, alt: "animated tabs nav jelly souffle logo", id: "animated-tabs__nav-img-11" },
    { src: assets.nuts_logo, alt: "animated tabs nav nuts logo", id: "animated-tabs__nav-img-12" },
];

const tabs = [
    { label: "Cakes", category: "Cakes", width: 92, leftOffset: -14, color: "#ff0080", index: 1 },
    { label: "Pies", category: "Pies", width: 80, leftOffset: 77, color: "#ff8c00", index: 2 },
    { label: "Buns", category: "Buns", width: 85, leftOffset: 155, color: "#00c8ff", index: 3 },
    { label: "Waffles", category: "Waffles", width: 103, leftOffset: 235, color: "#42c883", index: 4 },
    { label: "Puddings", category: "Puddings", width: 120, leftOffset: 334, color: "#ba2684", index: 5 },
    { label: "Macaroons", category: "Macaroons", width: 132, leftOffset: 450, color: "#c61717", index: 6 },
    { label: "Cupcakes", category: "Cupcakes", width: 114, leftOffset: 585, color: "#c88342", index: 7 },
    { label: "Biscuit Cookies", category: "Biscuit Cookies", width: 164, leftOffset: 701, color: "#008080", index: 8 },
    { label: "Handmade Candies", category: "Handmade Candies", width: 191, leftOffset: 864, color: "#ff1493", index: 9 },
    { label: "Jelly Souffles", category: "Jelly Souffles", width: 149, leftOffset: 1054, color: "#6a5acd",  index: 10 },
    { label: "Ice Creams", category: "Ice Creams", width: 124, leftOffset: 1204, color: "#c7e62e",  index: 11 },
    { label: "Nuts", category: "Nuts",  width: 80, leftOffset: 1327, color: "#65d354",  index: 12 },
];

const AnimatedTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="animated-tabs__nav-container">
                <nav className="animated-tabs__nav">
                    <div className="animated-tabs__nav__wrapper">
                        {
                            tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`animated-tabs__nav-link ${
                                        activeTab === index ? "active" : ""
                                    }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    &nbsp;&nbsp;&nbsp;&nbsp;{tab.label}
                                </button>
                            ))
                        }
                        {
                            icons.map((icon) => (
                                <img
                                    className="animated-tabs__nav-img"
                                    id={icon.id}
                                    src={icon.src}
                                    alt={icon.alt}
                                />
                            ))
                        }
                    </div>
                    <div
                        className="slider"
                        style={{
                            left: `${tabs[activeTab].leftOffset}px`,
                            width: `${tabs[activeTab].width}px`,
                            background: `linear-gradient(135deg, ${tabs[activeTab].color}, #000000)`,
                            transition: `left 0.4s ease-in-out, width 0.4s ease-in-out, background 0.4s ease-in-out`
                        }}
                    ></div>
                </nav>
                <ShoppingCartSection activeCategory={tabs[activeTab].label} />
            </div>
        </>
    );
};

export default AnimatedTabs;