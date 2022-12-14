import MenuItem from "./MenuItem";
import Order from "../Order/Order";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import menuitems from "../App/App";

const MENU_ITEMS = [
  { name: "Cheese Pizza", price: 10, type: "pizza", id: 1 },
  { name: "Pepperoni Pizza", price: 15, type: "pizza", id: 2 },
  { name: "Margherita Pizza", price: 18, type: "pizza", id: 3 },
  { name: "Meat Lover's Pizza", price: 18, type: "pizza", id: 4 },
  { name: "Hawaiian Pizza", price: 18, type: "pizza", id: 5 },
  { name: "Cheese Calzone", price: 10, type: "calzone", id: 6 },
  { name: "Pepperoni Calzone", price: 15, type: "calzone", id: 7 },
  { name: "Meat Lover's Calzone", price: 18, type: "calzone", id: 8 },
  { name: "Grilled BBQ Calzone", price: 18, type: "calzone", id: 9 },
  { name: "Philly Cheese Steak Calzone", price: 18, type: "calzone", id: 10 },
  { name: "Bread Sticks (small)", price: 5, type: "side", id: 11 },
  { name: "Bread Sticks (large)", price: 8, type: "side", id: 12 },
  { name: "Garlic Bread", price: 5, type: "side", id: 13 },
  { name: "Ceaser Salad", price: 5, type: "side", id: 14 },
  { name: "House Salad", price: 5, type: "side", id: 15 },
];

function MenuList({ menuitems }) {
  const [menuItems, setMenuItems] = useState(null);
  const [filter, setFilter] = useState("pizza");
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getMenuitems = async () => {
      const response = await fetch("/api_v1/menuitems/");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        setMenuItems(data);
      }
    };

    getMenuitems();
  }, []);

  if (!menuItems) {
    return <div>Fetching data...</div>;
  }

  const handleError = (err) => {
    console.warn(err);
  };

  const submitOrder = async ({ name, telephone }) => {
    const newOrder = {
      name,
      phone: telephone,
      order,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    };

    const response = await fetch("/api_v1/orders/", options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
    }

    setOrder([]);
  };

  const addToOrder = ({ name, price }) => {
    const index = order.findIndex((item) => item.name === name); // -1 if index (item) is not found
    const updatedOrder = [...order];

    if (index === -1) {
      updatedOrder.push({ name, price, qty: 1 });
    } else {
      updatedOrder[index].qty += 1;
    }

    setOrder([...updatedOrder]);
  };

  const removeFromOrder = (name) => {
    const index = order.findIndex((item) => item.name === name);
    const updatedOrder = [...order];
    updatedOrder.splice(index, 1);
    setOrder([...updatedOrder]);
  };

  const menu = menuItems
    .filter((menuItem) => menuItem.type === filter)
    .map((menuItem) => (
      <MenuItem
        key={menuItem.id}
        {...menuItem}
        addToOrder={addToOrder}
        menuitems={menuitems}
      />
    ));

  return (
    <div className="mainMenu">
      <section className="fullMenu">
        <div className="categories">
          <button className="foodTypes" type="button" onClick={() => setFilter("pizza")}>
            Pizzas
          </button>
          <button className="foodTypes" type="button" onClick={() => setFilter("calzone")}>
            Calzones
          </button>
          <button className="foodTypes" type="button" onClick={() => setFilter("side")}>
            Sides
          </button>
        </div>
        <ul className="menu">{menu}</ul>
      </section>
      <section className="yourOrder">
        <Order
          order={order}
          removeFromOrder={removeFromOrder}
          submitOrder={submitOrder}
        />
      </section>
    </div>
  );
}

export default MenuList;
