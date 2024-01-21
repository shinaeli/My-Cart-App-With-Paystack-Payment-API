import React, { useContext } from 'react'
import { TotalCostContext } from '../TotalCostContext/TotalCostContext';

const TotalCost = () => {
    const { totalCost } = useContext(TotalCostContext);
    const discount = 8;
  return (
    <div className="total-cost">
        <div className="discount">
            <h4 className="discount-title">Discount:</h4>
            <h4 className="discount-price">{discount}%</h4>
        </div>
        <div className="actual-price">
            <h4 className="actual-price-title">Total:</h4>
            <h4 className="actual-price-price">₦{totalCost}</h4>
        </div>
    </div>
  )
}

export default TotalCost