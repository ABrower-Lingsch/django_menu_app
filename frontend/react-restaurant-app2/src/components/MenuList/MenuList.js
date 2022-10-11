import MenuItem from "./MenuItem";
import Order from "../Order/Order";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

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

function MenuList() {
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [filter, setFilter] = useState("pizza");
  const [order, setOrder] = useState([]);

  const submitOrder = ({ name, telephone }) => {
    const newOrder = {
      name,
      telephone,
      items: order,
    };

    const submittedOrders =
      JSON.parse(localStorage.getItem("submittedOrders")) || [];

    submittedOrders.push(newOrder);
    localStorage.setItem("submittedOrders", JSON.stringify(submittedOrders));
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
      <MenuItem key={menuItem.id} {...menuItem} addToOrder={addToOrder} />
    ));

  return (
    <>
      <button type="button" onClick={() => setFilter("pizza")}>
        Pizzas
      </button>
      <button type="button" onClick={() => setFilter("calzone")}>
        Calzones
      </button>
      <button type="button" onClick={() => setFilter("side")}>
        Sides
      </button>
      <ul>{menu}</ul>
      <Order
        order={order}
        removeFromOrder={removeFromOrder}
        submitOrder={submitOrder}
      />
    </>
  );
}

export default MenuList;
