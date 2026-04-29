import { Link } from "react-router-dom";
import logo from "../assets/Greenscape.png";


function Navbar() {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"15px", background:"#22671b"}}>

      <div style={{display:"flex", alignItems:"center"}}>
        <img src={logo} alt="logo" style={{width:"100px",height:"100px", marginRight:"10px"}} />
        <h2 style={{color:"white"}}>Greenscape Works</h2>
      </div>

      <div>
        <Link to="/" style={{margin:"10px", color:"white"}}>Home</Link>
        <Link to="/services" style={{margin:"10px", color:"white"}}>Services</Link>
        <Link to="/gallery" style={{margin:"10px", color:"white"}}>Gallery</Link>
        <Link to="/about" style={{margin:"10px", color:"white"}}>About</Link>
        <Link to="/contact" style={{margin:"10px", color:"white"}}>Contact</Link>
      
      </div>

    </nav>
  );
}

export default Navbar;