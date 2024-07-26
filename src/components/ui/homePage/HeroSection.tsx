// src/Slider.tsx
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import bg1 from '../../../assets/bg1.webp';
import bg2 from '../../../assets/bg2.webp';
import bg3 from '../../../assets/bg3.webp';
import { NavLink } from 'react-router-dom';
interface Slide {
    image: string;
    heading: string;
    subheading: string;
}

const slides: Slide[] = [
    {
        image: bg1, heading: 'Experience Precision and Performance',
        subheading: 'Discover the ultimate typing experience with our high-quality mechanical keyboards'
    },
    {
        image: bg2, heading: 'Elevate Your Gaming Setup',
        subheading: 'EUnleash your full potential with keyboards designed for gamers by gamers'
    },
    {
        image: bg3, heading: 'Customize Your Typing Journey',
        subheading: 'Choose from a variety of switches, keycaps, and layouts to fit your unique style'
    },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full lg:h-[600px] h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-transform transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="flex flex-col items-center space-y-4 justify-center w-full h-full bg-black bg-opacity-50">
                        <h1 className="text-3xl lg:text-5xl text-center font-bold text-white">{slide.heading}</h1>
                        <p className="text-md lg:text-xl text-center text-white">{slide.subheading}</p>
                        <NavLink to='/product' >
                            <button className='btn bg-violet-500 lg:px-8 lg:text-lg hover:bg-violet-600 border-none text-white '>Shop Now</button></NavLink>
                    </div>
                </div>
            ))}

            <button
                className="absolute left-0 z-10 flex items-center justify-center h-full px-4 text-white"
                onClick={prevSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>
            <button
                className="absolute right-0 z-10 flex items-center justify-center h-full px-4 text-white "
                onClick={nextSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
            <div className="absolute bottom-0 flex justify-center w-full p-2 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2  rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;