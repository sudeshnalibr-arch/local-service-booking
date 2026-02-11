"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { RootState, AppDispatch } from "@/redux/store/store";
import { addToCart, increaseQty, decreaseQty } from "@/redux/slice/CartSlice";

import "@/style/servicedetails/electrician/electriciancontent.css";

interface Equipment {
  id: number;
  service_type: string;
  name: string;
  price: string;
  image: string;
  rating: string;
  is_active: boolean;
}

export default function ElectricianContent() {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [selectedCards, setSelectedCards] = useState<Equipment[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);

  // Fetch electrician equipments list
  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/serviceEquipment-api/by-service-type/?service_type=plumber"
        );

        const data = res.data.equipments || [];

        setEquipments(data);

        // ✅ Default first item show in center
        if (data.length > 0) {
          setSelectedCards([data[0]]);
        }
      } catch (err) {
        console.log("Error fetching equipments:", err);
      }
    };

    fetchEquipments();
  }, []);


  // Add card one by one
  const handleEquipmentClick = (equipment: Equipment) => {
    const alreadyAdded = selectedCards.find((item) => item.id === equipment.id);

    if (!alreadyAdded) {
      setSelectedCards((prev) => [...prev, equipment]);
    }
  };

  // Add to cart
  const handleAddToCart = (equipment: Equipment) => {
    dispatch(
      addToCart({
        id: equipment.id,
        name: equipment.name,
        price: Number(equipment.price),
      })
    );
  };

  return (
    <section className="service-page">
      <div className="service-main">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h3 className="panel-title">Select a service</h3>

          <div className="service-grid">
            {equipments.map((eq) => (
              <div
                key={eq.id}
                className="service-item"
                onClick={() => handleEquipmentClick(eq)}
              >
                <img src={`http://localhost:8000${eq.image}`} alt={eq.name} />
                <span>{eq.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER PANEL */}
        <div className="center-panel">
          {selectedCards.length === 0 ? (
            <p style={{ padding: "20px" }}>
              Click any equipment to add card below
            </p>
          ) : (
            selectedCards.map((service) => (
              <div key={service.id} className="service-card">
                {/* LEFT INFO */}
                <div className="card-info">
                  <h3>{service.name}</h3>

                  <p className="service-subtitle">{service.service_type}</p>

                  <div className="rating">
                    ⭐ {service.rating}{" "}
                    <span className="review-text">(15k reviews)</span>
                  </div>

                  <div className="price">
                    ₹ {service.price} · 30 mins
                  </div>

                  <a href="#" className="view-details">
                    View Details
                  </a>
                </div>

                {/* RIGHT IMAGE */}
                <div className="card-image">
                  <img
                    src={`http://localhost:8000${service.image}`}
                    alt={service.name}
                  />

                  <button
                    className="add-btn"
                    onClick={() => handleAddToCart(service)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* CART BOX */}
          <div className="cart-box">
            <h3 className="cart-title">Cart</h3>

            {cart.items.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cart.items.map((item) => (
                <div key={item.id} className="cart-row">
                  <p className="cart-item-name">{item.name}</p>

                  <div className="qty-controls">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>
                      +
                    </button>
                  </div>

                  <p className="cart-item-price">
                    ₹ {item.price * item.quantity}
                  </p>
                </div>
              ))
            )}

            <div className="cart-total">
              <button className="view-cart-btn">
                ₹ {cart.totalPrice} <span>View Cart</span>
              </button>
            </div>
          </div>

          {/* OFFER BOX */}
           <div className="offer-box">
              <img src="/images/electrician/offer-image.png" />
              <div>
                <h4>Get Visitation fee off</h4>
                <p>On Orders above ₹100</p>
                <a href="#">View More Offers</a>
              </div>
            </div>

          {/* PROMISE BOX */}
           <div className="promise-box">
              <div className="promise-content">
                <h4>UC Promise</h4>
                <ul>
                  <li>✔ Verified Professionals</li>
                  <li>✔ Hassle Free Booking</li>
                  <li>✔ Transparent Pricing</li>
                </ul>
              </div>
              <div className="promise-img">
                <img src="/images/electrician/quality.png" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
