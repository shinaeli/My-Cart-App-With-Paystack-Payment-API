import React, { useContext, useState } from 'react'
import { TotalCostContext } from '../TotalCostContext/TotalCostContext';
import { PaystackButton } from 'react-paystack';



const CardPayment = () => {
  const { totalCost } = useContext(TotalCostContext);
  const [details, setDetails] = useState({});

  const config = {
    reference: (new Date()).getTime().toString(),
    email: details.email,
    amount: Math.ceil(totalCost - (0.08 * totalCost)) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_62308aac2d50585ba1338d45e6631b8068b18bab",
  };

  const componentProps = {
    ...config,
    text: "Pay Now".toUpperCase(),
    onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const handlePayment = e => {
    e.preventDefault();

    setDetails({...details, fullName: "", phone: "", email: "", amount: ""});
  }
  

  return (
    <div className="payment">
        <h1>PAYMENT</h1>
        <form>
            <div className="full-name">
                <label>Full Name:</label>
                <input type="text" value={details["fullName"]} onChange={e => setDetails({...details, fullName: e.target.value})} name="full-name" id="full-name" placeholder="e.g. Jane Appleseed" required />
                {/* {showErrors["fullName"] && <p className="show-error">Wrong format. Alphabets only.</p>} */}
            </div>
            <div className="phone">
                <label>Phone:</label>
                <input type="text" value={details["phone"]} onChange={e => setDetails({...details, phone: e.target.value})} name="phone" id="phone" placeholder="e.g. 08064192280" required />
                {/* {showErrors["phone"] && <p className="show-error">Wrong format. Numbers only.</p>} */}
            </div>
            <div className="email">
                <label>Email:</label>
                <input type="email" value={details["email"]} onChange={e => setDetails({...details, email: e.target.value})} name="email" id="email" placeholder="e.g. jane_appleseed@gmail.com" required />
                {/* {showErrors["email"] && <p className="show-error">Wrong format. Alphabets and symbols only.</p>} */}
            </div>
            <div className="amount">
                <label>Amount(Discounted Amount):</label>
                <input type="text" value={Math.ceil(totalCost - (0.08 * totalCost))} onChange={() => setDetails({...details, amount: totalCost})} name="amount" id="amount" />
            </div>
        </form>
        <button className="form-button" type="submit" onClick={handlePayment}>
          <PaystackButton className="paystack-button" {...componentProps} />
        </button>
    </div>
  )
}

export default CardPayment