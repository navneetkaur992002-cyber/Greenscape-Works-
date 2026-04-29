import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {

  // ✅ ADD THIS LINE HERE
  const navigate = useNavigate();

  const services = [
    {
      title: "Ride-On Lawn Mowing",
      image: "/images/rideon.jpg",
      description: "Efficient and fast lawn mowing using ride-on machines, perfect for lifestyle blocks and commercial properties.",
    },
    {
      title: "Lawn Mowing",
      image: "/images/lawn.jpg",
      description: "Professional lawn mowing to keep your yard neat and healthy.",
    },
    {
      title: "Spraying Services",
      image: "/images/spray.jpg",
      description: "Our professional spraying services offer the perfect balance of high-performance weed control and eco-friendly, organic options for a healthy, pristine landscape..",
    },
    {
      title: "Tree Trimming and Hedge Trimming",
      image: "/images/Tree.jpg",
      description: "Professional tree and hedge trimming services to keep your outdoor space neat, healthy, and beautifully maintained all year round.",
    },
    {
    title: "Paving",
    image: "/images/paving.jpg",
    description: "We install strong and attractive paving for driveways, patios, and walkways.",
    },
    {
    title: "Fencing",
    image: "/images/fencing.jpg",
    description: "High-quality fencing solutions designed to enhance security and improve the overall look of your outdoor space.",
    }
  ];


  return (
    <div style={{ padding: "40px", textAlign: "center", background: "#f9fafb" }}>
      <h1>Our Services</h1>
      <p>Quality landscaping services </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: "280px",
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{service.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {service.description}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 15px",
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                // ✅ UPDATED HERE
                onClick={() => navigate("/contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;