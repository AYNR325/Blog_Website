import React,{useState} from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavigation = (slug) => {
    navigate(slug); // Navigate to the selected page
    setNav(false);  // Close the sidebar
  };

  const handlelogout = () => {
    setNav(false); // Close the sidebar
  }

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-[#FAD4C0]  ">
      <Container>
        <nav className="flex  justify-between items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-[#FB3640] hover:text-white rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <button onClick={handlelogout}>
                <LogoutBtn />
                </button>
              </li>
            )}
          </ul>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* Mobile Navigation */}
          <ul
            className={
              nav
                ? "fixed  md:hidden left-0 top-0 w-[45%] h-full border-r border-r-gray-900 bg-[#fad4c0fc] ease-in-out duration-500 z-[9999]"
                : "ease-in-out w-[45%] duration-500 fixed top-0 bottom-0 left-[-100%] z-[9999]"
            }
          >
            {/* Mobile Logo */}
            <div className="mr-4 px-3 py-3">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item) =>
              item.active ? (
                <li
                  key={item.name}
                  className="p-2 my-5 border-b  hover:bg-[#FB3640] hover:text-white rounded-full duration-300  cursor-pointer border-gray-600"
                >
                  <button onClick={() => handleNavigation(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <button onClick={handlelogout}>
                <LogoutBtn />
                </button>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
