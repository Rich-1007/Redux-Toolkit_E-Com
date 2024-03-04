import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { SiAmazon } from "react-icons/si";

export default function Navbar() {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src={<SiAmazon />} />
          </div>
        </NavLink>

        <div>
          <NavLink to={"/"}>
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
