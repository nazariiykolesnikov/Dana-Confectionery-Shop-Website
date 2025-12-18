import "./Main.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import ShoppingCartSection from "../../components/ShoppingCartSection/ShoppingCartSection.jsx";
import AnimatedTabs from "../../components/AnimatedTabs/AnimatedTabs.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Main = () => {
    return (
        <>
            <Navbar />
            <ImageSlider />
            <AnimatedTabs />
            <ShoppingCartSection />
            <Footer />
        </>
    );
}

export default Main;