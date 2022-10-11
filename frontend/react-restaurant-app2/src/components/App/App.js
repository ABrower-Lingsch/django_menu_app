import MenuList from "../MenuList/MenuList";
import "./App.css";
import { useState, useEffect } from "react";
import logo from "./../../images/clipart11730.png";

function App() {
  const [menuitems, setMenuitems] = useState(null);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getMenuitems = async () => {
      const response = await fetch("/api_v1/menuitems/");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        setMenuitems(data);
      }
    };

    getMenuitems();
  }, []);

  if (!menuitems) {
    return <div>Fetching data...</div>;
  }

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
