import React from 'react'
import { Outlet } from "react-router-dom";
import aboutHero from "../assets/images/traslacion-2.jpg";
import { motion } from "framer-motion";

const Experience = () => {
 return (
   <>
     {/* Hero Banner with Framer Motion */}
     <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1.2 }}
       className="shadow"
       style={{
         backgroundImage: `url(${aboutHero})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         borderRadius: "1rem",
         height: "300px",
         position: "relative",
         color: "#fff",
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         textAlign: "center",
         margin: "1rem",
       }}
     >
       {/* Dark overlay with fade-in */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 0.5 }}
         transition={{ duration: 1.5, delay: 0.3 }}
         style={{
           position: "absolute",
           top: 0,
           right: 0,
           bottom: 0,
           left: 0,
           backgroundColor: "rgba(0, 0, 0, 0.5)",
           borderRadius: "1rem",
         }}
       />

       {/* Text Content with fade-up */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.6 }}
         style={{ position: "relative", zIndex: 2 }}
       >
         <h1 style={{ fontWeight: "bold" }} className="hero-title-section">
           Pag - Danas
         </h1>
       </motion.div>
     </motion.div>
     <Outlet />
   </>
 );
}

export default Experience