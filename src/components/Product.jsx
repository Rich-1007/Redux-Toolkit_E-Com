import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div
      className=" flex flex-col items-center justify-center 
    transition-shadow hover:shadow-2xl hover:shadow-black/100 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-sm text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>

      <div className="line-clamp-3">
        <p className=" w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description}
        </p>
      </div>

      <div className="h-[180px] ">
        <img src={post.image} className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-500 font-semibold">{post.price} $</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text[12px] p-1 px-2  uppercase 
        hover:bg-gray-600 hover:text-white transition duration-300 ease-in "
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text[12px] p-1 px-2 uppercase 
        hover:bg-gray-600 hover:text-white transition duration-300 ease-in "
            onClick={addToCart}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
