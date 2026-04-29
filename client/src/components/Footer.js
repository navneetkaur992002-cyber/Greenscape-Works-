import React from "react";

function Footer() {
  return (
    <footer style={{background:"#1f2937", color:"white", padding:"30px", textAlign:"center"}}>
      
      <h2>Greenscape Works</h2>
      <p>Professional Landscaping & Lawn Care Services</p>

      <div style={{marginTop:"20px"}}>

        <a 
          href="tel:+642041281084"
          style={{
            display:"inline-block",
            margin:"10px",
            padding:"10px 20px",
            background:"#22c55e",
            color:"white",
            textDecoration:"none",
            borderRadius:"5px"
          }}
        >
          📞 Call Us
        </a>

        <a 
          href="https://www.facebook.com/share/194oFfiajv/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:"inline-block",
            margin:"10px",
            padding:"10px 20px",
            background:"#1877F2",
            color:"white",
            textDecoration:"none",
            borderRadius:"5px"
          }}
        >
          Visit our Facebook
        </a>

        <a 
          href="https://www.instagram.com/greenscape__works?igsh=MXN5azJzbjl6bTZzMg=="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:"inline-block",
            margin:"10px",
            padding:"10px 20px",
            background:"#E1306C",
            color:"white",
            textDecoration:"none",
            borderRadius:"5px"
          }}
        >
          Visit our Instagram
        </a>

        <a 
          href="mailto:greenscapeworks@gmail.com"
          style={{
            display:"inline-block",
            margin:"10px",
            padding:"10px 20px",
            background:"#16a34a",
            color:"white",
            textDecoration:"none",
            borderRadius:"5px"
          }}
        >
          Email Us
        </a>

      </div>

      <p style={{marginTop:"20px", fontSize:"14px"}}>
        © 2026 Greenscape Works. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;