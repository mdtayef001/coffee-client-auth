import { Link } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <Link className="btn" to={"/add-coffee"}>
        Add coffee
      </Link>
      <Link className="btn" to={"/login"}>
        Login
      </Link>
      <Link className="btn" to={"/users"}>
        Users
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-white border mt-5 container mx-auto rounded-lg">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
