import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">

        <NavLink to="/">
          <div>
            <img
              src="src/components/Logo-png-bg.png" className="h-12"            />
          </div>
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart" >
            <div>
              <FaCartShopping />
            </div>
          </NavLink>

        </div>
      </div>
    </div>
  )
};

export default Navbar;
