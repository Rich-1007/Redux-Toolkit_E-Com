import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { Cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(Cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [Cart]);

  return (
    <div>
      {Cart.length > 0 ? (
        <div>
          {Cart.map((item, index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />;
          })}

          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items: {Cart.length}</span>
            </p>
          </div>

          <div>
            <p>Total Amount: ${totalAmount}</p>
            <button>CheckOut Now</button>
          </div>
        </div>
      ) : (
        <div>
          <h1> Cart Empty </h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
