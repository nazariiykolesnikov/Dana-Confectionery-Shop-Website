import React from "react";
import "./Contact.css";
import { images } from "./../../assets/data/images.js";

const Contact = () => {
    return (
        <section className="contact">
            <span>Contact Us 💌</span>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send ✨</button>
            </form>
            <img className="contact-bg" src={images.contact_bg} alt="contact bg"/>
        </section>
    );
}

export default Contact;