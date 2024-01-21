import React from 'react'
import Product from './Product'
import TotalCost from './TotalCost';

const Products = ({ cartItems, handleDelete }) => {
  return (
    <div className="products">
        <h1>YOUR PRODUCTS</h1>
        {cartItems.map(item => {
            const { id, imgLocation, description, itemName, color, price, noOfItems } = item;
            return (
              <div key={id}>
                <Product 
                  id={id} 
                  imgLocation={imgLocation}
                  description={description} 
                  itemName={itemName} 
                  color={color} 
                  price={price} 
                  noOfItems={noOfItems}
                  handleDelete={handleDelete} 
                />
              </div>
            )
        })}
        <TotalCost />
    </div>
  )
}

export default Products