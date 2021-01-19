import React from "react";
import "./Orders.css";

const Orders = (props) => {
  // const [orderElements, setOrderElements] = useState([])
  const orderEls = props.orders.map((order) => {
    return (
      <div className='order' data-testid={order.id} key={order.name}>
        <h3>{order.name}</h3>
        <ul className='ingredient-list'>
          {order.ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
        </ul>
      </div>
    );
  });
  // setOrderElements(orderEls);

  return (
    <section>{orderEls.length ? orderEls : <p>No orders yet!</p>}</section>
  );
};

export default Orders;
