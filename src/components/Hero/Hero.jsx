import React from "react";
import "./Hero.css";
import { images } from "./../../assets/data/images.js";

const Hero = () => {
    return (
        <section className="hero">
            <h1>Welcome to Dana Confectionery 🍰✨</h1>
            <p>Discover Arabic & Ukrainian desserts crafted with love 🌸💖</p>
            <button className="cta">Explore Now 🍬</button>
            <img className="hero-bg" src={images.hero_bg} alt="hero bg" />
        </section>
    );
}

export default Hero;
