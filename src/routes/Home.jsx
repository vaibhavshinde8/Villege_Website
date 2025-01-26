"use client"

import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules"
import { motion, AnimatePresence, useSpring } from "framer-motion"
import { Link } from 'react-router-dom';
import img1 from '../assets/image1.webp';
import img2 from '../assets/image11.jpg';
import img3 from '../assets/image17.jpg';
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import WhySchool from "../components/WhySchool";

const useParallax = (baseVelocity = 1) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const x = useSpring(0, { stiffness: 400, damping: 90 })
    const y = useSpring(0, { stiffness: 400, damping: 90 })

    useEffect(() => {
        x.set(mousePosition.x * baseVelocity)
        y.set(mousePosition.y * baseVelocity)
    }, [mousePosition, baseVelocity, x, y])

    return { x, y }
}

const slides = [
    {
        id: 1,
        image: img1,
        title: "Welcome to Rajder",
        titleSpan: "wadi",
        subtitle: "Where Nature and Tradition Thrive Together",
        description:
            "Step into the heart of our community, where every sunrise paints a beautiful story, and every corner holds a cherished memory. Rajderwadi is a place of harmony, resilience, and warmth—a home for all who seek peace and connection.",
    },
    {
        id: 2,
        image: img2,
        title: "Discover Our",
        titleSpan: "Heritage",
        subtitle: "A Journey Through Time and Culture",
        description:
            "Immerse yourself in the rich tapestry of Rajderwadi's history. From ancient traditions to modern innovations, our village is a living museum that celebrates the past while embracing the future.",
    },
    {
        id: 3,
        image: img3,
        title: "Experience",
        titleSpan: "Nature",
        subtitle: "Breathtaking Landscapes Await You",
        description:
            "Surround yourself with the untouched beauty of Rajderwadi's natural wonders. From lush forests to serene lakes, every step is an adventure in harmony with the environment.",
    },
]

export default function EnhancedSlider() {
    const [activeIndex, setActiveIndex] = useState(0)
    const { x, y } = useParallax(0.02)

    return (
        <div style={{marginLeft:"10px",marginRight:"10px"}}>
            <div className="relative w-full md:h-screen h-112 overflow-hidden" >
                <style jsx global>{`
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0px); }
                    }

                    .text-shadow-lg {
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    }

                    .swiper-pagination-bullet {
                        opacity: 0.7;
                        transition: all 0.3s ease;
                    }

                    .swiper-pagination-bullet-active {
                        opacity: 1;
                        transform: scale(1.5);
                    }

                    .swiper-button-next,
                    .swiper-button-prev {
                        color: white;
                        background-color: rgba(0, 0, 0, 0.5);
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        transition: all 0.3s ease;
                    }

                    .swiper-button-next:hover,
                    .swiper-button-prev:hover {
                        background-color: rgba(0, 0, 0, 0.8);
                    }

                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                        font-size: 24px;
                    }

                    .animate-float {
                        animation: float 3s ease-in-out infinite;
                    }
                `}</style>
                <Swiper
                    modules={[Navigation, Pagination, EffectFade, Autoplay]} // Include Autoplay module
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    autoplay={{
                        delay: 2500, // Set delay to 2500 milliseconds
                        disableOnInteraction: false, // Allow autoplay to continue after user interactions
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} w-3 h-3 bg-white bg-opacity-50 rounded-full transition-all duration-300 hover:bg-opacity-100"></span>`
                        },
                    }}
                    effect="fade"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-full">
                                <motion.div style={{ x, y }} className="absolute inset-0 w-full h-full">
                                    <img
                                        src={slide.image}
                                        alt={`Scenic view of Rajderwadi - Slide ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 hover:scale-110"
                                        loading="lazy"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-40 backdrop-blur-sm">
                                    <AnimatePresence mode="wait">
                                        {activeIndex === index && (
                                            <motion.div
                                                key={slide.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="max-w-4xl px-4"
                                            >
                                                <motion.h2
                                                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-300"
                                                    initial={{ scale: 0.9 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                >
                                                    {slide.title} <span className="text-green-500">{slide.titleSpan}</span>
                                                </motion.h2>
                                                <motion.p
                                                    className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-shadow-lg"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2, duration: 0.5 }}
                                                >
                                                    {slide.subtitle}
                                                </motion.p>
                                                <motion.p
                                                    className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.4, duration: 0.5 }}
                                                >
                                                    {slide.description}
                                                </motion.p>
                                                <motion.div
                                                    initial={{ scale: 0.9, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 10 }}
                                                >
                                                    <Link href="/about" passHref>
                                                        <motion.a
                                                            className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg mt-20 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 block"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <div style={{ padding: "10px 20px" }}>Explore</div>
                                                        </motion.a>
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <MissionVision />
            <WhySchool />
            <Testimonials />
            <Footer />
        </div>
    )
}