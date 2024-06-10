import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { remove, removeAll } from "../Redux/slices/CartItemsSlice";
import { useDispatch } from "react-redux";

import { store } from "../Redux/store";
import Navbar from "../Components/Navbar";

const Cart = () => {
  const dispatch = useDispatch();

  const removeAllHandler = () => {
    dispatch(removeAll());
  };

  const removeHandler = (item) => {
    // console.log(item);
    dispatch(remove(item.id));
  };

  const cart = useSelector((store) => store.cart);
  // console.log(cart);
  return (
    <>
      <div className="bg-gray-100 h-screen w-full">
        <Navbar />
        <div className=" ">
          <div className="my-4 mx-28 py-4 px-4 bg-white">
            <p>Deliver to Hyderabad 500016</p>
          </div>

          <div className="mx-28 py-2 bg-gray-100 w-7/12 flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="shadow-xl flex flex-row justify-between items-start py-3 px-4 bg-white "
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-36 w-20 object-contain overflow-hidden"
                />

                <div className="flex flex-col justify-between  h-36 ">
                  <p className="text-gray-800 font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400"> Seller:RetailNet</p>
                  <p className="text-gray-600">Price : {item.price} $</p>
                </div>

                <div className="flex flex-col justify-between h-36">
                  <p>Delivery in 2 days, Wed | ₹40</p>
                  <button
                    onClick={() => removeHandler(item)}
                    className="bg-red-400 py-2 rounded-lg hover:bg-red-600 text-gray-600 hover:text-gray-900 transition-all duration-500"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-start">
              <button onClick={removeAllHandler} className="font-bold">
                {" "}
                Remove All Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";

// const Cart = () => {
//   const { cart } = useSelector((state) => state);

//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
//   }, [cart]);

//   return (
//     <div>
//       {cart.length > 0 ? (
//         <div>
//           <div>
//             {cart.map((item, index) => {
//               return <CartItem key={item.id} item={item} itemIndex={index} />;
//             })}
//           </div>

//           <hr />
//           <div className="flex  justify-center ">
//             <div>
//               <div>
//                 <div>Your Cart</div>
//                 <div className="text-4xl text-gray-500">Summary</div>

//                 <p>
//                   <span className="font-medium">
//                     Total Items: {cart.length}
//                   </span>
//                 </p>
//               </div>

//               <div>
//                 <p className="font-semibold">
//                   Total Amount: ${Math.floor(totalAmount)}
//                 </p>
//                 <div className=" pt-5 pb-8">
//                   <button className="bg-orange-700  rounded-xl w-56 text-white">
//                     CheckOut Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col mt-16 min-h-40 justify-center items-center">
//           <h1 className="text-3xl font-semibold">Cart Empty</h1>
//           <Link to={"/"}>
//             <div>
//               <button className="mt-16 rounded-full bg-gray-400 min-h-9 text-white w-40 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
//                 Shop Now
//               </button>
//             </div>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
