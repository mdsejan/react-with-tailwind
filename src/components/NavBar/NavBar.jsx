import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/products", name: "Products", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/404", name: "NotFound", id: 5 },
  ];
  return (
    <nav className="text-black p-6 bg-yellow-200 ">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="md:hidden ml-1" onClick={() => setOpen(!open)}>
          {open === true ? (
            <AiOutlineClose className="text-2xl"></AiOutlineClose>
          ) : (
            <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
          )}
        </div>
        <ul
          className={`w-full bg-yellow-200 md:flex p-2 ${open ? "" : "hidden"}`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
