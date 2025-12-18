import "./ImageSlider.css";
import { useCallback, useEffect, useState } from "react";
import { assets } from "../../assets/data/assets.js";

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { url: "https://i.ibb.co/dzFWSbC/Savor-the-Essence-of-the-UAE-A-Journey-Through-Arabic-Sweets.jpg", title: "Baklava", id: 1, imgSource: "https://alhalabyasweets.com/wp-content/uploads/2024/03/Savor-the-Essence-of-the-UAE-A-Journey-Through-Arabic-Sweets.jpg" },
        { url: "https://aleppo-grills.com/wp-content/uploads/2024/11/Discover-Our-Must-Try-Arabic-Desserts-in-the-UAE.jpg", title: "Baklava", id: 2, imgSource: "https://i.ibb.co/B24dtZH6/Discover-Our-Must-Try-Arabic-Desserts-in-the-UAE.jpg"},
        { url: "https://i.ibb.co/XrdF4C3H/Buy-Delicious-Sweets-Today-The-Best-Premium-Arabic-Sweets-in-Dubai-Al-Barsha.jpg", title: "Baklava", id: 3, imgSource: "https://aleppo-grills.com/wp-content/uploads/2024/11/Buy-Delicious-Sweets-Today-The-Best-Premium-Arabic-Sweets-in-Dubai-Al-Barsha.jpg"},
        { url: "https://i.ibb.co/8482D5hW/Buy-Authentic-Arabic-Sweets-Today-Best-Traditional-Arabic-Sweets-in-Dubai.jpg", title: "Baklava", id: 4, imgSource: "https://i.ibb.co/8482D5hW/Buy-Authentic-Arabic-Sweets-Today-Best-Traditional-Arabic-Sweets-in-Dubai.jpg"},
        { url: "https://i.ibb.co/4ggR0kZ2/Mohalabia-Magic-Savor-the-Sweetness-of-Tradition.jpg", title: "Baklava", id: 5, imgSource: "https://aleppo-grills.com/wp-content/uploads/2024/11/Mohalabia-Magic-Savor-the-Sweetness-of-Tradition.jpg"},
        { url: "https://i.ibb.co/ym2Ysm62/feature-image-ukraine-desserts-updated.webp", title: "Baklava", id: 6, imgSource: "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/feature-image-ukraine-desserts-updated.webp"},
        { url: "https://i.ibb.co/Ddqzvh8/istockphoto-933579988-1024x1024.jpg", title: "Baklava", id: 7, imgSource: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fslice-traditional-ukrainian-kyiv-cake-gm933579988-255726042&psig=AOvVaw31ybPKmJ83-7os5oV4we30&ust=1764729265209000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqGAoTCICT1fnunZEDFQAAAAAdAAAAABDyAg"},
        { url: "https://i.ibb.co/7mRfnS4/hq720234243423.jpg", title: "Baklava", id: 8, imgSource: "https://i.ytimg.com/vi/jCZByZai9w4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPmHx8v-dJZZX6phtHTHPo0KHRnw"},
        { url: "https://i.ibb.co/N6tVBzM1/7cc33f82-989d-4f96-b7f5-41abf8b3c34b-3000x2143.jpg", title: "Baklava", id: 9, imgSource: "https://substackcdn.com/image/fetch/$s_!EI8g!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7cc33f82-989d-4f96-b7f5-41abf8b3c34b_3000x2143.jpeg"},
        { url: "https://i.ibb.co/fVZYpBNz/Monastic-Hut.webp", title: "Baklava", id: 10, imgSource: "https://www.chefspencil.com/wp-content/uploads/Monastic-Hut.jpg"},
    ];

    const goToPreviousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const slideChangeInterval = setInterval(() => {
            goToNextSlide();
        }, 4000);

        return () => clearInterval(slideChangeInterval);
    }, [goToNextSlide]);

    return (
        <div className="image-slider__container">
            <div className="image-slider__wrapper">
                <div className="image-slider">
                    <div className="image-slide__arrow-left" onClick={goToPreviousSlide}>
                        <img className="arrow-left" src={assets.arrow_left_logo} alt="arrow-left"/>
                    </div>
                    <div className="image-slide__arrow-right" onClick={goToNextSlide}>
                        <img className="arrow-right" src={assets.arrow_right_logo} alt="arrow-right"/>
                    </div>
                    <h1 className="image-slide__description-heading">
                        We are glad to welcome you to our confectionery!<br/> Here you will find many delicious desserts for
                        every taste!
                    </h1>
                    <div className="image-slide">
                        <img
                            src={slides[currentIndex].url}
                            alt={slides[currentIndex].title}
                            className="slide-image"
                        />
                    </div>
                    <div className="dots__container">
                        {slides.map((slide, slideIndex) => (
                            <div
                                className="dots"
                                key={slide.id}
                                onClick={() => goToSlide(slideIndex)}
                            >
                                <img
                                    className="dot-image"
                                    src={
                                        slideIndex === currentIndex
                                            ? assets.dot_circle_logo
                                            : assets.dot_not_filled_logo
                                    }
                                    alt="dot"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;