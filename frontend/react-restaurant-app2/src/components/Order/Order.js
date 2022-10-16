import { useState } from "react";

function Order({ order, removeFromOrder, submitOrder }) {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  const orderList = order.map(({ name, price, qty }) => (
    <li key={name}>
      <div>{name}</div>
      <div>{qty}</div>
      <div>${(price * qty).toFixed(2)}</div>
      <button className="removeFromOrder" type="button" onClick={() => removeFromOrder(name)}>
        Remove from order
      </button>
    </li>
  ));

  const subTotal = order
    .map((item) => item.price * item.qty)
    .reduce((acc, i) => acc + i, 0);

  return (
    <div className="orderArea">
      <div className="yourOrderArea">
        <ul>{orderList}</ul>
        <p className="subtotal">${subTotal.toFixed(2)}</p>
        <input
          type="text"
          placeholder="Enter last name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter telephone number"
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
      <button className="submitOrderButton" type="button" onClick={() => submitOrder({ name, telephone })}>
        Submit order
      </button>
    </div>
  );
}

export default Order;
