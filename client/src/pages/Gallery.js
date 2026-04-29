import React, { useState } from "react";

import g1 from "../assets/gallery/garden1.jpg";
import g2 from "../assets/gallery/garden2.jpg";
import g3 from "../assets/gallery/garden3.jpg";
import g4 from "../assets/gallery/garden4.jpg";
import g5 from "../assets/gallery/garden5.jpg";
import g6 from "../assets/gallery/garden6.jpg";
import g7 from "../assets/gallery/garden7.jpg";
import g8 from "../assets/gallery/garden8.jpg";
import g9 from "../assets/gallery/garden9.jpg";
import g10 from "../assets/gallery/garden.7.jpg";
import g11 from "../assets/gallery/garden.8.jpg";
function Gallery() {

const images = [g1, g2, g3, g4, g5, g6 , g7 , g8 , g9 , g10 , g11];

const [selectedImage, setSelectedImage] = useState(null);

return (
<div>

{/* Header */}

<div
style={{
background:"#2e7d32",
color:"white",
padding:"20px 20px",
textAlign:"center"
}}
>
<h1>Our Work Gallery</h1>
<p>Click any image to view it</p>
</div>


{/* Gallery Grid */}

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
gap:"20px",
padding:"50px",
maxWidth:"1100px",
margin:"auto"
}}
>

{images.map((img, index) => (
<img
key={index}
src={img}
alt="gallery"
onClick={() => setSelectedImage(img)}
style={{
width:"100%",
height:"250px",
objectFit:"cover",
cursor:"pointer",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
}}
/>
))}

</div>


{/* Popup Image */}

{selectedImage && (

<div
onClick={() => setSelectedImage(null)}
style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.8)",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>

<img
src={selectedImage}
alt="large"
style={{
maxWidth:"90%",
maxHeight:"90%",
borderRadius:"10px"
}}
/>

</div>

)}

</div>
);
}

export default Gallery;