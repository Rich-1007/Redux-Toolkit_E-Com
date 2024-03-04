import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";


export default function Navbar() {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        
        <NavLink to="/">
          <div>
            <img src="" />
          </div>
        </NavLink>

        <div>
          <NavLink to={"/Home"}>
            <p>Home</p>
          </NavLink>

          <NavLink to={"/cart"}>
          <div>

            <FaCartShopping />
          </div>
          </NavLink>

        </div>
      </div>
    </div>
  );
}
