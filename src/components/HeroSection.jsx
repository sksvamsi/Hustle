// import React from "react";
// import heroImg from "../images/1.png";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] sm:flex flex-col sm:items-center md:flex md:flex-row md:items-center">
//           <div className="space-y-4 py-20  px-20 sm:flex sm:flex-col sm:justify-center sm:text-center sm:items-center md:flex md:flex-col md:justify-center md:items-start md:text-start">
//             <h1 className="sm:text-2xl md:text-4xl font-bold">
//               Unlock a Passion Side Hustle,or New Passion
//             </h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Recusandae harum incidunt similique dolor quaerat, autem facilis.
//             </p>
//             <button className="bg-gray-900 rounded text-white hover:text-yellow-400 duration-300 p-2">
//               Get Quotes
//             </button>
//           </div>

//           <motion.div
//             whileHover={{ scale: 1.2 }} // Apply scaling on hover
//             className="flex flex-col justify-center w-[90%] md:w-[600px]"
//           >
//             <img src={heroImg} alt="Hero" />
//           </motion.div>
//           {/* <div className="flex flex-col justify-center w-[90%] md:w-[600px]">
//             <img src={heroImg} />
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;








import React, { useEffect, useState } from "react";
import heroImg from "../images/1.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] sm:flex flex-col sm:items-center md:flex md:flex-row md:items-center">
        {/* Animated Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start position (off-screen left)
          animate={isLoaded ? { x: 0, opacity: 1 } : {}} // End position (on-screen)
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
          className="space-y-4 py-20 px-20 sm:flex sm:flex-col sm:justify-center sm:text-center sm:items-center md:flex md:flex-col md:justify-center md:items-start md:text-start"
        >
          <motion.h2
            initial={{ y: -50, opacity: 0 }} // Start position (off-screen up)
            animate={isLoaded ? { y: 0, opacity: 1 } : {}} // Animate into view
            transition={{ duration: 0.5, delay: 0.1 }} // Staggered entrance
            className="sm:text-2xl md:text-4xl font-bold"
          >
            Unlock a Passion Side Hustle, or New Passion
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }} // Start position (off-screen down)
            animate={isLoaded ? { y: 0, opacity: 1 } : {}} // Animate into view
            transition={{ duration: 0.5, delay: 0.2 }} // Staggered entrance
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae harum incidunt similique dolor quaerat, autem facilis.
          </motion.p>
          <motion.button
            initial={{ scale: 0 }} // Start small
            animate={isLoaded ? { scale: 1 } : {}} // Animate to normal size when loaded
            transition={{ duration: 0.5, delay: 0.3 }} // Staggered entrance
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4a5568", // Darker on hover
            }}
            className="bg-gray-900 rounded text-white hover:text-yellow-400 duration-300 p-2"
          >
            Get Quotes
          </motion.button>
        </motion.div>

        {/* Animated Image Section with Rotation on Hover */}
        <motion.div
          initial={{ opacity: 0 }} // Start position
          animate={isLoaded ? { opacity: 1 } : {}}  // End position
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delayed fade-in
          whileHover={{ scale: 1.1, rotate: 5 }} // Rotate slightly on hover
          className="flex flex-col justify-center w-[90%] md:w-[600px]"
        >
          <img src={heroImg} alt="Hero" className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
