import MenuList from "../MenuList/MenuList";
import "./App.css";
import { useState, useEffect } from "react";
import logo from "./../../images/clipart11730.png";

function App() {
  const [order, setOrder] = useState([]);

  return (
    <div className="App">
      <div className="restaurantLogo">
        <h1>Vic's Pizza</h1>
        <img src={logo} />
      </div>
      <MenuList />
    </div>
  );
}

export default App;
