import { useContext, useState } from 'react'
import { TotalCostContext } from '../TotalCostContext/TotalCostContext';

const Product = ({ id, imgLocation, itemName, description, color, price, noOfItems, handleDelete }) => {
  const [counts, setCounts] = useState(noOfItems);
  const { handleTotalCostReduction, handleTotalCostIncrement } = useContext(TotalCostContext);
  
  const handlePriceReduction = x => {
    setCounts(prev => ((prev-1 < 0) ? 0 : prev-1));
    if(counts <= 0) {
        handleTotalCostReduction(0);
    } else {
        handleTotalCostReduction(x);
    }
  };

  const handlePriceIncrement = x => {
    setCounts(prev => prev+1);
    handleTotalCostIncrement(x);
  };


  return (
    <div className="product">
        <div className='item-img'>
            <img src={imgLocation} alt={description} />
        </div>
        <div className="item-description">
            <h2>{itemName}</h2>
            <p>Color: {color}</p>
            <div className="flexed-price">
                <h4>₦{price}</h4>
                <div className="counter">
                    <button onClick={() => handlePriceReduction(price)} className="decrement">-</button>
                    <p>{counts}</p>
                    <button onClick={() => handlePriceIncrement(price)} className="increment">+</button>
                </div>
            </div>
            <p>Total Cost: ₦{price * counts}</p>
        </div>
        <div className="close-btn">
            <img onClick={() => handleDelete(id)} src="images/trash-can-svgrepo-com.svg" alt="delete icon" />
        </div>
    </div>
  )
}

export default Product