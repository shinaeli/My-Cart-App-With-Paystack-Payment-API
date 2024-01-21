import React from 'react'

const EmptyCart = () => {
  return (
    <div className="empty-cart">
        <h1>Your Cart Is Empty</h1>
        <div className="empty-cart-image">
            <img src="images/empty-cart.jpg" alt="man pushing an empty cart" />
        </div>
    </div>
  )
}

export default EmptyCart