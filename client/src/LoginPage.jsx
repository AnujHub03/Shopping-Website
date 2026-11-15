import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-base-100">
      
      {/* Left Side: Visual/Branding (Hidden on mobile) */}
      <div className="relative hidden lg:block overflow-hidden bg-primary">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" 
          alt="Login Visual" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-20">
          <div className="text-white">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-4">
              Welcome <br /> Back.
            </h1>
            <p className="text-lg opacity-80 max-w-sm">
              Log in to access your personalized collection and exclusive member offers.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="w-full max-w-md">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">Sign <span className="text-primary">In</span></h2>
            <p className="text-gray-500 mt-2">Enter your details to continue shopping.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Social Login */}
            <button className="btn btn-outline w-full rounded-full border-base-300 normal-case font-bold flex items-center gap-2 hover:bg-base-200 hover:text-base-content">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/pjax-loader.gif" className="hidden" alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              Continue with Google
            </button>

            <div className="divider text-xs text-gray-400 uppercase font-bold tracking-widest">OR</div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                type="email" 
                placeholder="anuj@example.com" 
                className="input input-bordered bg-base-200 rounded-2xl focus:input-primary border-none text-sm p-2 m-2" 
              />
            </div>

            {/* Password Input */}
            <div className="form-control relative">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="input input-bordered bg-base-200 rounded-2xl focus:input-primary border-none text-sm pr-12 p-2 m-2" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-3 text-gray-400 hover:text-primary transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 1.257 0 2.441.229 3.535.646M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 3.5l-3-3m0 0l-3 3m3-3V19" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-tighter">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-xs checkbox-primary rounded" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full rounded-full btn-lg font-black uppercase italic shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all mt-4">
              Log In
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-500 mt-8">
              Don't have an account? <Link to="/Signup" className="text-primary font-bold hover:underline">Create Account</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;