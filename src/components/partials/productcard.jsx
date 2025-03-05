import React, { useState, useEffect } from "react";
import "../../assets/styles/productcard.css";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import PC from "../../assets/images/Products/MKW.png";

export default function ProductCard() {
  const [productsList, setProductsList] = useState([]);
  const productsCollectionRef = collection(db, "Products");

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductsList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getProductsList();
  }, []);

  return (
    <div className="grid-container">
      {productsList.map((p) => (
        <a href="/product" className="product-link">
        <div key={p.id} className="product-card">
          <div className="card-image">
            <img src={PC} alt={p.Name} className="product-image" />
          </div>
          <div className="product-details">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <h2 className="product-title">{p.Name}</h2>
            <p className="product-description">{p.Description}</p>
            <p className="product-price">PKR {p.Price}</p>
          </div>
        </div>
        </a>
      ))}
    </div>
  );
}
