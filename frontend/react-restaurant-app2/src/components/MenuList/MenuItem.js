import { useState, useEffect } from "react";

function MenuItem({ name, price, addToOrder }) {
  return (
    <li>
      <section className="menuItem">
        <div className="itemName">{name}</div>
        <div>${price}.00</div>
      </section>
      <section className="orderButton">
        <button className="addToOrder" type="button" onClick={() => addToOrder({ name, price })}>
          Add To Order
        </button>
      </section>
    </li>
  );
}

export default MenuItem;
