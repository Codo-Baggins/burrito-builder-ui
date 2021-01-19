export const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) =>
    response.json()
  );
};

export const submitNewOrder = (newOrder) => {
  fetch("http://localhost:3001/api/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrder), // remember how HTTP can only send and receive strings, just like localStorage?
  })
    .then((response) => response.json())
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
};
