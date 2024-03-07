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
    <div className="flex justify-center">
      <div
        className="flex flex-col items-center justify-center 
      transition-shadow hover:shadow-2xl hover:shadow-black/100 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl"
      >
        <div className="flex gap-4">
          <div className="h-[180px] ">
            <img className="h-full w-full" src={item.image} />
          </div>

          <div className="flex flex-col justify-between py-3">
            <div className="space-y-1">
              <h1 className="text-gray-700 font-semibold text-sm text-left truncate w-40 mt-1">
                {item.title}
              </h1>
              <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left line-clamp-3">
                {item.description}
              </h1>
            </div>
      <hr />
            <div className="flex justify-between gap-12 items-center w-full mt-5 ">
              <p className="text-green-500 font-semibold">{item.price}</p>
              <div onClick={removeFromCart} className="">
                <MdOutlineDeleteForever className="cursor-pointer w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
