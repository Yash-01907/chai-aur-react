import { Link } from "react-router-dom";

function Header() {
  const navItems = [
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/signup",
      name: "Sign Up",
    },
    {
      path: "/favorites",
      name: "Favorites",
    },
  ];
  return (
    <div className="bg-amber-300 w-full h-20 flex justify-between items-center px-6">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 19.5A2.5 2.5 0 006.5 22H20v-2H6.5a.5.5 0 010-1H20V4H6.5A2.5 2.5 0 004 6.5v13zM6 6h13v12H6V6z" />
        </svg>
        <span className="text-2xl font-semibold text-white">BookFinder</span>
      </div>

      <div>
        <input
          className="placeholder:text-base rounded-full bg-white border-none focus:outline-none focus:bg-[#f5f5f5] duration-200 px-5 py-2 w-lg text-lg"
          type="text"
          placeholder="Enter book name"
        />
      </div>

      <div className="flex gap-3">
        {navItems.map((nav, idx) => {
          return (
            <Link
              key={idx}
              to={nav.path}
              className="transition duration-150 ease-in-out text-lg font-medium hover:scale-105 hover:underline "
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
