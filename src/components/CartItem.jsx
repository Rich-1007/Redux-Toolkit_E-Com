

import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";

import { remove } from "../Redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="  flex flex-col items-center justify-center 
    transition-shadow hover:shadow-2xl hover:shadow-black/100 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl"
    >
      <div>
        <div>
          <img src={item.image} />
        </div>

        <div >
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div 
            onClick={removeFromCart}>
              <MdOutlineDeleteForever />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
