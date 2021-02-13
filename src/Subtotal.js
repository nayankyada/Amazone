import React from "react";
import "./Subtotal.css";
import { useContext } from "react";
import { Basket } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const { basket } = useContext(Basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basket.reduce((amount, b) => amount + b.price, 0)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
