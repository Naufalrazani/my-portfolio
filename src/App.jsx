import React, { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  // Inisialisasi AOS Global
  useEffect(() => {
    AOS.init({
      // Pengaturan default yang smooth
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animasi hanya sekali saat scroll pertama kali
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
