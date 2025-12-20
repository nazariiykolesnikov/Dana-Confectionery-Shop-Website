import "./Main.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import ShoppingCartSection from "../../components/ShoppingCartSection/ShoppingCartSection.jsx";
import AnimatedTabs from "../../components/AnimatedTabs/AnimatedTabs.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Products from "../../components/Products/Products.jsx";
import Contact from "../../components/Contact/Contact.jsx";

const Main = () => {
    return (
        <>
            <Navbar />
            <ImageSlider />
            <Hero />
            <AnimatedTabs />
            <ShoppingCartSection />
            <Products />
            <Contact />
            <Footer />
        </>
    );
}

export default Main;