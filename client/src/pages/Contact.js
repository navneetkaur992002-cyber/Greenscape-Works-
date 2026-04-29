import React, { useState } from "react";
import axios from "axios";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    suburb: "",
    city: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
  "https://greenscape-works.onrender.com",
  form,
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
);

      alert("✅ Message Sent Successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        suburb: "",
        city: "",
        message: ""
      });

    } catch (error) {
      console.error("Error:", error.response || error.message);
      alert("Failed to send message. Check backend.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "60px" }}>
      <h1>Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "19px" }}
      >

        <input type="text" name="name" placeholder="Full Name"
          value={form.name} onChange={handleChange} required />

        <input type="tel" name="phone" placeholder="Mobile Number"
          value={form.phone} onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email Address"
          value={form.email} onChange={handleChange} required />

        <input type="text" name="address" placeholder="Street Address"
          value={form.address} onChange={handleChange} />

        <input type="text" name="suburb" placeholder="Suburb"
          value={form.suburb} onChange={handleChange} />

        <input type="text" name="city" placeholder="City"
          value={form.city} onChange={handleChange} />

        <textarea name="message" placeholder="Describe Your Project"
          rows="5" value={form.message} onChange={handleChange} required />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            background: "#2e7d32",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          {loading ? "Sending..." : "Request Free Quote"}
        </button>

      </form>
    </div>
  );
}

export default Contact;
