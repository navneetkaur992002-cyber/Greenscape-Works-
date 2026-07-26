import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import { useNavigate } from "react-router-dom";

function Home() {

const navigate = useNavigate();
return(
<div>

<div
  style={{
    backgroundImage: `url(${hero1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    position: "relative",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
    }}
  />

  <div style={{ position: "relative", zIndex: 1 }}>
    <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
      Transform Your Outdoor Space
    </h1>

    <p
      style={{
        fontSize: "24px",
        marginTop: "15px",
      }}
    >
      Professional Lawn Care & Landscaping Services
    </p>

    <button
      onClick={() => navigate("/contact")}
      style={{
        marginTop: "30px",
        padding: "15px 35px",
        background: "#2e7d32",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Get a Free Quote
    </button>
  </div>
</div>

{/* Services Preview Section */}

<section
  style={{
    padding: "60px 20px",
    textAlign: "center",
    background: "#f9fafb",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      marginBottom: "40px",
    }}
  >
    Our Services
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "auto",
    }}
  >
    {[
  {
    title: "Ride-On Lawn Mowing",
    image: "/images/rideon.jpg",
    description: "Fast mowing for large lawns and commercial spaces.",
  },
  {
    title: "Lawn Mowing",
    image: "/images/lawn.jpg",
    description: "Keep your lawn neat and healthy.",
  },
  {
    title: "Spraying Services",
    image: "/images/spray.jpg",
    description: "Effective weed control with eco-friendly options.",
  },
  {
    title: "Tree & Hedge Trimming",
    image: "/images/tree.jpg",
    description: "Clean, healthy, and well-shaped greenery.",
  },
].map((service, index) => (
  <div
    key={index}
    style={{
      background: "white",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <img
      src={service.image}
      alt={service.title}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
      }}
    />

    <div style={{ padding: "15px" }}>
      <h3>{service.title}</h3>

      <p
        style={{
          fontSize: "14px",
          color: "#555",
        }}
      >
        {service.description}
      </p>

      {/* 🔥 BUTTON ADDED HERE */}
      <button
        onClick={() => navigate("/contact")}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Get Free Quote
      </button>
    </div>
  </div>
))}
  </div>

  <button
    onClick={() => {
  navigate("/services");
}}
    style={{
      marginTop: "30px",
      padding: "12px 25px",
      background: "#2e7d32",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
    }}
  >
    View More Services
  </button>
</section>
{/* Why Choose Us */}

<section style={{padding:"60px 20px", background:"#22671b", textAlign:"center"}}>

<h2 style={{fontSize:"32px", marginBottom:"40px", color:"#ebefec"}}>
Why Choose Us?
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",
gap:"30px",
maxWidth:"1000px",
margin:"auto",

}}>

<div style={{background:"white", padding:"25px", borderRadius:"10px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
<h3>Reliable</h3>
<p>We provide dependable landscaping services and always complete projects on time with high quality work.</p>
</div>

<div style={{background:"white", padding:"25px", borderRadius:"10px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
<h3>Affordable</h3>
<p>Our Professional Lawn Mowing services just start from $25 per mow.</p>
</div>

<div style={{background:"white", padding:"25px", borderRadius:"10px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
<h3>100% Customer Satisfaction</h3>
<p>We focus on customer happiness and make sure every client is satisfied with our landscaping services.</p>
</div>

<div style={{background:"white", padding:"25px", borderRadius:"10px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
<h3>Get Free Quote</h3>
<p>Contact us today for a free quote and let us transform your outdoor space into something beautiful.</p>
</div>

</div>

</section>

</div>
);
}

export default Home;