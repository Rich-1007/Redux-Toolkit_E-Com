import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/slices/CartSlice";

const { cart } = useSelector((state) => state);
const dispatch = useDispatch();

const addToCart = () => {
  dispatch(add(post));
  toast.success("Item added to Cart");
};

const removeFromCart = () => {
  dispatch(remove(post.id));
  toast.success("Item removed from Cart");
};

function Products({ post }) {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
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
}

export default Products;
