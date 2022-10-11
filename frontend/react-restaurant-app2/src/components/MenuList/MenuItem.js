import { useState } from "react";

function MenuItem({ name, price, addToOrder }) {
  return (
    <li>
      <div>{name}</div>
      <div>${price}.00</div>
      <button type="button" onClick={() => addToOrder({ name, price })}>
        Add To Order
      </button>
    </li>
  );
}

export default MenuItem;
