import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";

import { addToCart } from "./helpers/Context";
import { useState } from "react";






function App() {
  const [cartValue, setCartValue] = useState(0)
  return (
    <addToCart.Provider value={{cartValue: cartValue, setCartValue: setCartValue}}>
      <Header />
      <MainBody />
      <Footer />
    </addToCart.Provider>
  );
}

export default App;
