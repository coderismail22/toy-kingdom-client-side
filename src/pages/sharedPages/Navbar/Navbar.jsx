import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
// import logo from '../../../assets/logo.svg'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full items-center justify-center">
      <div className="mb-2 sm:mb-0">
        {/* <img className="w-64" src={logo} alt="logo" /> */}
        <a
          href="/home"
          className="font-bold  text-2xl no-underline text-primary hover:text-blue-dark"
        >
          Toy Kingdom
        </a>
      </div>
      <div className="text-xl font-bold text-blue-600 uppercase sm:flex gap-2 ">
        <div>
          <Link
            to="/"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/alltoys"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            All Toys
          </Link>
        </div>
        <div>
          <Link
            to="/mytoys"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            My Toys
          </Link>
        </div>
        <div>
          <Link
            to="/addtoy"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Add Toy
          </Link>
        </div>
        <div>
          <Link
            to="/blog"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Blog
          </Link>
        </div>


        {user ? (
          <div>
            <button onClick={logOut}>Logout</button>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Login
            </Link>
          </div>
        )}
          <div className="flex flex-col justify-center items-center">
          <img title={user?.displayName} className="w-12" src={user?.photoURL}></img>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
