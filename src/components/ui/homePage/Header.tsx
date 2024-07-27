import { NavLink } from "react-router-dom";
import logo from '../../../assets/keyboard.png'
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
const Header = () => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const totalPrice = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };
  return (
    <div className="navbar bg-black px-5 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost g-violet-500 text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink className='font-bold text-black hover:text-violet-500' to='/'>Home</NavLink></li>
            <li><NavLink className='font-bold text-black hover:text-violet-500' to='/product'>Product</NavLink></li>
            <li><NavLink className='font-bold text-black hover:text-violet-500' to='/product/management'>Dashboard</NavLink></li>
            <li><NavLink className='font-bold text-black hover:text-violet-500' to='/about-us'>About Us</NavLink></li>
            <li><NavLink className='font-bold text-black hover:text-violet-500' to='/contact-us'>Contact Us</NavLink></li>
          </ul>
        </div>
        <NavLink to='/'><img src={logo} className="lg:w-[110px] w-20" alt="" /></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink className='font-bold text-white hover:text-violet-500' to='/'>Home</NavLink></li>
          <li><NavLink className='font-bold text-white hover:text-violet-500' to='/product'>Product</NavLink></li>
          <li><NavLink className='font-bold text-white hover:text-violet-500' to='/product/management'>Dashboard</NavLink></li>
          <li><NavLink className='font-bold text-white hover:text-violet-500' to='/about-us'>About Us</NavLink></li>
          <li><NavLink className='font-bold text-white hover:text-violet-500' to='/contact-us'>Contact Us</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator bg-violet-500 p-2 rounded ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">{cart.items.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-40 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{cart.items.length} Items Added</span>
              <span className="">Total: <span className="text-violet-400 font-bold">${totalPrice().toFixed(2)}</span></span>
              <div className="card-actions">
                <NavLink to='/product/cart' className='w-full'>
                  <button className="btn bg-violet-500 hover:bg-violet-600 text-white  ">View cart</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
