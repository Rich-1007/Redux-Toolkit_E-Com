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
      className=" outline flex flex-col items-center justify-center 
    transition-shadow hover:shadow-2xl hover:shadow-black/100 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>

      <div className="line-clamp-3">
        <p className=" w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description}
        </p>
      </div>

      <div>
        <img src={post.image} />
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      {cart.some((p) => p.id == post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add To Cart</button>
      )}
    </div>
  );
};

export default Product;
