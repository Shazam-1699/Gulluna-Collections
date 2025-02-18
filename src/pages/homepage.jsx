import React, { useState, useEffect } from "react";
import Footer from "../components/partials/footer";
import ProductCard from "../components/partials/productcard";
import Salepic from "../assets/images/Salepic.png";
import Model from "../assets/images/Mahira Khan.png";
import Navbar from "../components/partials/navbar";
import PC from "../assets/images/PC.png";

function Homepage() {
  // ✅ Products Data
  const products = {
    "products": [
      {
        "id": 1,
        "image": PC, 
        "name": "Pasmina Shawl",
        "description": "Luxurious, soft wool shawl, often handwoven.",
        "price": 10000
      }
    ]
  };

  // ✅ Sale Timer Logic
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2025"; 

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex flex-row justify-between items-center py-20 mt-[240vh]">
        <section className="max-w-3xl text-center flex flex-col items-center">
          <h1 className="text-4xl italic font-bold font-dancing-script">
            Elevate Your Shopping Experience Today!
          </h1>
          <p className="text-lg text-center px-4 font-light font-open-sans mt-4">
            Guluna Clothing offers elegant traditional wear, featuring
            intricately embroidered shawls and culturally authentic dresses for
            women. Blending heritage with modern elegance, our collection
            ensures timeless style for every occasion.
          </p>
          <button className="bg-black text-white text-2xl rounded-full mt-6 px-10 py-4 cursor-pointer">
            Explore Now
          </button>
        </section>
        <div className="w-[534px] h-[808px] mt-36 relative rounded-tl-[100px] rounded-br-[100px] bg-gradient-to-t from-black to-gray-300">
          <img
            src={Model}
            alt="Styled Woman"
            className="absolute pt-5 w-[597px] h-full object-cover"
          />
        </div>
      </div>

      {/* Card Section */}
      <section className="bg-gradient-to-l from-black to-gray-300 h-40 w-full text-white text-center py-5">
        <h1 className="text-5xl font-fjalla">New Collections</h1>
        <p className="text-lg font-light font-open-sans mt-2">
          Discover Guluna Clothing's latest collection, where timeless tradition
          meets contemporary elegance in beautifully crafted shawls and dresses.
        </p>
      </section>

      {/* Products Mapping */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
        {products.products.map((p) => (
          <ProductCard key={p.id} image={p.image} title={p.name} description={p.description} price={p.price} />
        ))}
      </div>

      {/* Big Sale Section */}
      <div className="flex flex-row">
        <div>
          <img src={Salepic} alt="Sale" className="w-full h-[535px]" />
        </div>
        <div className="left-10 w-1/2 bg-gradient-to-b from-black to-white h-[626px] rounded-tl-[280px] rounded-br-[180px] flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white text-center">Big Sale Alert</h1>
          <h1 className="text-5xl text-white text-center mt-2">
            Grab your favourites at 50% OFF!
          </h1>
          <div className="flex flex-row gap-10 mt-6">
            <div className="bg-white w-[153px] h-[148px] rounded-lg">
              <h1 className="text-4xl text-center">{days}</h1>
              <p className="text-center">Days</p>
            </div>
            <div className="bg-white w-[153px] h-[148px] rounded-lg">
              <h1 className="text-4xl text-center">{hours}</h1>
              <p className="text-center">Hours</p>
            </div>
            <div className="bg-white w-[153px] h-[148px] rounded-lg">
              <h1 className="text-4xl text-center">{minutes}</h1>
              <p className="text-center">Minutes</p>
            </div>
          </div>
          <button className="bg-black text-white text-2xl rounded-full mt-6 px-10 py-4 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
      {/* products below sale */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
        {products.products.map((p) => (
          <ProductCard key={p.id} image={p.image} title={p.name} description={p.description} price={p.price} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
