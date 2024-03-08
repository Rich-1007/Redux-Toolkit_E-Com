import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";



const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

            <hr />
          <div className="flex  justify-center ">
            <div>
              <div>
                <div>Your Cart</div>
                <div className="text-4xl text-gray-500">Summary</div>
                <p>
                  <span className="font-medium">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Total Amount: ${Math.floor(totalAmount)}
                </p>
                <div className=" pt-5 pb-8">
                  <button className="bg-orange-700  rounded-xl w-56 text-white">
                    CheckOut Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-16 min-h-40 justify-center items-center">
          <h1 className="text-3xl font-semibold">Cart Empty</h1>
          <Link to={"/"}>
            <div>
              <button className="mt-16 rounded-full bg-gray-400 min-h-9 text-white w-40 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">Shop Now</button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
