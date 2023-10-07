import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Share/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="p-4 lg:px-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
