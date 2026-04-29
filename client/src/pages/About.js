import React from "react";

function About() {
  return (
    <div>

      {/* Hero Section */}

      <div
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "15px 20px",
          textAlign: "center"
        }}
      >
        <h1 style={{fontSize:"40px"}}>About Greenscape Works</h1>
        <p style={{fontSize:"18px", marginTop:"10px"}}>
          Professional Lawn Care & Landscaping Services
        </p>
      </div>


      {/* About Content */}

      <section style={{padding:"60px 20px", maxWidth:"1000px", margin:"auto", textAlign:"center"}}>

        <h2 style={{color:"#166534", marginBottom:"20px"}}>Who We Are</h2>

        <p style={{lineHeight:"1.8"}}>
          Greenscape Works is dedicated to transforming outdoor spaces into beautiful and functional environments.
          We provide professional landscaping, lawn care, and garden maintenance services designed to keep your property 
          looking its best all year round.

          With over 7 years of industry experience, our team brings skill, knowledge, and attention to detail to every 
          project we undertake.       
        </p>

        <p style={{lineHeight:"1.8", marginTop:"15px"}}>
          Our experienced team works closely with clients to understand their needs and deliver landscaping solutions that
          enhance the beauty and value of their homes and businesses.
        </p>

      </section>


      {/* Mission Section */}

      <section style={{background:"#f3f4f6", padding:"60px 20px"}}>

        <div style={{maxWidth:"1000px", margin:"auto", textAlign:"center"}}>

          <h2 style={{color:"#166534", marginBottom:"20px"}}>Our Mission</h2>

          <p style={{lineHeight:"1.8"}}>
            Our mission is to provide reliable, affordable, and high-quality
            landscaping services that exceed customer expectations while
            creating beautiful outdoor spaces that people love.
          </p>

        </div>

      </section>


      {/* Values Section */}

      <section style={{padding:"60px 20px"}}>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))",
          gap:"30px",
          maxWidth:"1000px",
          margin:"auto"
        }}>

          <div style={{textAlign:"center"}}>
            <h3>Professional Team</h3>
            <p>Experienced landscapers dedicated to delivering quality work.</p>
          </div>

          <div style={{textAlign:"center"}}>
            <h3>Quality Service</h3>
            <p>We focus on attention to detail and excellent workmanship.</p>
          </div>

          <div style={{textAlign:"center"}}>
            <h3>Customer Focus</h3>
            <p>Your satisfaction is our top priority.</p>
          </div>

          <div style={{textAlign:"center"}}>
            <h3>Eco-Friendly</h3>
            <p>We promote sustainable and environmentally friendly landscaping.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;