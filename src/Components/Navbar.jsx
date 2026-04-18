import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className="font-['Poppins']"> 
      {/* Changed: Fixed top, transparent bg, and backdrop blur */}
      <div className="navbar fixed top-0 left-0 right-0 z-[100] bg-black/10 backdrop-blur-md border-b border-white/10 px-4 lg:px-24 text-white">
        
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow-2xl bg-gray-900/50 rounded-box w-52 font-medium text-white">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <Link to="/" className="text-2xl font-bold tracking-wider font-['Rajdhani'] uppercase text-white">
            Variety <span className="text-primary">Zone</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-xl tracking-wide gap-2">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {/* Transparent Search Bar */}
          <div className="form-control hidden md:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="input bg-white/10 border-white/20 focus:border-primary p-2 w-24 md:w-48 h-10 rounded-full text-white placeholder:text-white/50 transition-all" 
            />
          </div>

          <div className="flex items-center gap-1">
            <Link to="/Favourites" className="btn btn-ghost btn-circle text-white hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            
            <div className="indicator">
              <Link to="/CartPage" className="btn btn-ghost btn-circle text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm badge-primary indicator-item border-none text-white">0</span>
              </Link>
            </div>

            {/* Login Button: Changed to match Hero glow style */}
            <Link to="/LoginPage" className="btn btn-primary btn-sm rounded-full ml-2 px-6 font-bold hover:shadow-[0_0_15px_rgba(var(--p),0.5)] transition-all">
              Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Add a margin-top to the Outlet or the Hero so they don't hide behind the fixed navbar */}
      <div className="pt-0"> 
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Navbar;