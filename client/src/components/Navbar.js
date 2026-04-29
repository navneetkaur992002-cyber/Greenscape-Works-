import { Link } from "react-router-dom";
import logo from "../assets/Greenscape.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "15px",
        background: "#22671b",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "80px",
            height: "80px",
            marginRight: "10px",
          }}
        />

        <h2
          style={{
            color: "white",
            fontSize: "24px",
            margin: 0,
          }}
        >
          Greenscape Works
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Link to="/" style={{ margin: "8px", color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/services" style={{ margin: "8px", color: "white", textDecoration: "none" }}>
          Services
        </Link>

        <Link to="/gallery" style={{ margin: "8px", color: "white", textDecoration: "none" }}>
          Gallery
        </Link>

        <Link to="/about" style={{ margin: "8px", color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link to="/contact" style={{ margin: "8px", color: "white", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;