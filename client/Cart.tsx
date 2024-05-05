import React, { useEffect, useState } from 'react';

interface CartItem {
  id: number;
  quantity: number;
}

const Cart = ({ user }: { user: string }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log('Fetching data for user:', user); // Log when fetch begins
    fetch(`/api/getData?user=${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received:', data); // Log the data received
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Log any errors
        console.log('Failed fetch for user:', user); // Additional log for debugging
      });
  }, [user]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div>Item ID: {item.id}</div>
          <div>Quantity: {item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
