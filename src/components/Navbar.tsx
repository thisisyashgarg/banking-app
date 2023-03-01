import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-center items-center navbar">
      <img className="w-[124px] h-[32px]" src={logo} alt="logo" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((item, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={item.id}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
