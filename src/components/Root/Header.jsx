import { NavLink } from "react-router-dom";
import Logo from "../../assets/resources/logo.png";

const Header = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-5 items-center justify-between px-3 py-2">
      <div>
        <img className="w-fit" src={Logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-7 md:gap-8 xl:gap-10 text-lg font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
