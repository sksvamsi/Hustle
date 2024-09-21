// import React from "react";
// import Logo from "../../src/images/1.png";

// const Navbar = () => {
//   const NavLinks = [
//     {
//       id: 1,
//       title: "Home",
//       path: "/",
//     },
//     {
//       id: 2,
//       title: "About",
//       path: "/about",
//     },
//     {
//       id: 3,
//       title: "Contact",
//       path: "/contact",
//     },
//     {
//       id: 4,
//       title: "Services",
//       path: "/services",
//     },
//   ];
//   return (
//     <>
//       <div className="py-4 container flex justify-between items-center">
//         <div className="logo flex items-center">
//           <img src={Logo} alt="Logo" className="w-[50px] ml-5"/>
//           <p className="font-bold text-xl">HUSTLE</p>
//         </div>
//         <div className="links hidden md:block">
//           <ul className="flex gap-3">
//             {NavLinks.map((link) => {
//               return (
//                 <li key={link.id}>
//                   <a href={link.link} className="hover:text-yellow-300 text-sm">{link.title}</a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div className="button">
//           <button className="bg-yellow-300 py-2 px-4 rounded shadow-sm hover:text-white hover:shadow-xl">Request For Quotes</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../src/images/1.png";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  const NavLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Contact", path: "/contact" },
    { id: 4, title: "Services", path: "/services" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Start off-screen
      animate={{ y: 0, opacity: 1 }}     // Animate into view
      transition={{ duration: 1, ease: "easeOut" }} // Slower transition
      className="py-4 container flex justify-between items-center"
    >
      <motion.div
        className="logo flex items-center"
        initial={{ scale: 0 }} // Start small
        animate={isLoaded ? { scale: 1 } : {}} // Animate to normal size when loaded
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img src={Logo} alt="Logo" className="w-[50px] ml-5" />
        <p className="font-bold text-xl ml-2">HUSTLE</p>
      </motion.div>
      <div className="links hidden md:block">
        <ul className="flex gap-3">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <motion.a
                href={link.path} // Fixed to use 'path' instead of 'link'
                className="text-sm hover:text-yellow-300 transition-colors duration-300"
                initial={{ opacity: 0 }} // Start invisible
                animate={isLoaded ? { opacity: 1 } : {}}  // Fade in when loaded
                transition={{ duration: 0.5, delay: isLoaded ? link.id * 0.1 : 0 }} // Delay based on index
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgba(255, 255, 0, 0.7)", // Added text shadow
                }}
              >
                {link.title}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
      <motion.div>
        <motion.button
          className="bg-yellow-300 py-2 px-4 rounded transition-all duration-300 md:mx-2 sm:mx-10 sm:p-1"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#f59e0b",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Added subtle shadow on hover
          }}
          initial={{ opacity: 0 }} // Start invisible
          animate={isLoaded ? { opacity: 1 } : {}}  // Fade in when loaded
          transition={{ duration: 0.5 }} // Fade-in transition
        >
          Request For Quotations
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
