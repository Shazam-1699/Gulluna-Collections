import React, { useState, useEffect } from "react";
import "../assets/styles/homepage.css";
import Footer from "../components/partials/footer";
import ProductCard from "../components/partials/productcard";
import Salepic from "../assets/images/Salepic.png";
import Model from "../assets/images/Homepage Models/Mahira Khan.png";
import Model2 from "../assets/images/Homepage Models/Model2.png";
import Navbar from "../components/partials/navbar";

function Homepage() {
  const Models = {
    slides: [
      {
        src: Model,
        alt: "Model1",
      },
      {
        src: Model2,
        alt: "Model2",
      },
    ],
  };
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === Models.slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? Models.slides.length - 1 : slide - 1);
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April, 1, 2025";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    const slideInterval = setInterval(() => nextSlide(), 2000);

    return () => {
      clearInterval(interval);
      clearInterval(slideInterval);
    };
  }, [slide]); // Add `slide` as a dependency

  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <section className="section-text">
          <h1>Elevate Your Shopping Experience Today!</h1>
          <p>
            Guluna Clothing offers elegant traditional wear, featuring
            intricately embroidered shawls and culturally authentic dresses for
            women. Blending heritage with modern elegance, our collection
            ensures timeless style for every occasion.
          </p>
          <button>Explore Now</button>
        </section>
        <div className="image-container">
          {Models.slides.map((item, idx) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide slide-active" : "slide"}
              />
            );
          })}
          <span className="indicators">
            {Models.slides.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSlide(idx);
                  }}
                  className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                ></button>
              );
            })}
          </span>
        </div>
      </div>

      <section className="collections">
        <h1>New Collections</h1>
        <p>
          Discover Guluna Clothing's latest collection, where timeless tradition
          meets contemporary elegance in beautifully crafted shawls and dresses.
        </p>
      </section>

      <div className="products-container">
        <ProductCard />
      </div>

      <div className="sale-section">
        <div className="sale-img">
          <img src={Salepic} alt="Sale" />
        </div>
        <div className="sale-content">
          <h1>Big Sale Alert</h1>
          <h1>Grab your favourites at 50% OFF!</h1>
          <div className="timer">
            <div className="timer-days">
              <h1 className="timer-h1">{days}</h1>
              <p>Days</p>
            </div>
            <h2>:</h2>
            <div className="timer-hours">
              <h1 className="timer-h1">{hours}</h1>
              <p>Hours</p>
            </div>
            <h2>:</h2>
            <div className="timer-minutes">
              <h1 className="timer-h1">{minutes}</h1>
              <p>Minutes</p>
            </div>
            <h2>:</h2>
            <div className="timer-seconds">
              <h1 className="timer-h1">{seconds}</h1>
              <p>Seconds</p>
            </div>
          </div>
          <button>Shop Now</button>
        </div>
      </div>
      <ProductCard />

      <Footer />
    </div>
  );
}

export default Homepage;
