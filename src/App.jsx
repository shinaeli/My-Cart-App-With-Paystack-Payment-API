import { useState } from 'react'
import Products from './components/Products';
import CardPayment from './components/CardPayment';
import EmptyCart from './components/EmptyCart';

function App() {
  const shoppingLists = [
    {
        id: 1,
        imgLocation: "images/samsung-phone.jpg",
        itemName: "Samsung Galaxy A54",
        description: "Samsung Galaxy A54 Phone",
        color: "White",
        price: 165000,
        noOfItems: 0
    },
    {
        id: 2,
        imgLocation: "images/headphone.jpg",
        itemName: "Headphones Base 35 II",
        description: "A Headphone",
        color: "Red",
        price: 42700,
        noOfItems: 0
    },
    {
        id: 3,
        imgLocation: "images/pink ipad.jpg",
        itemName: "iPad 9.7 6-gen WiFi 32GB",
        description: "iPad",
        color: "Rose Pink",
        price: 110280,
        noOfItems: 0
    },
];

  const [cartItems, setCartItems] = useState(shoppingLists);

  const handleDelete = x => setCartItems(cartItems.filter(item => item.id !== x));

  return (
    <div className="container">
      {cartItems.length >= 1 ? <Products cartItems={cartItems} handleDelete={handleDelete} /> : <EmptyCart />}
      <CardPayment />
    </div>
  )

}

export default App
