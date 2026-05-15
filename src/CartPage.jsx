import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // Mock data for the cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium Shoes", price: 89, size: "42", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", qty: 1 },
    { id: 2, name: "Modern Pant", price: 75, size: "M", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500", qty: 2 },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 15;

  return (
    <section className="bg-base-100 py-12 md:py-20 px-6 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-12">
          Your <span className="text-primary">Bag</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* --- Left Side: Product List --- */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-base-200 rounded-[2.5rem] border border-base-300 group transition-all">
                  {/* Product Img */}
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-3xl border-2 border-base-300">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl font-bold uppercase italic">{item.name}</h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Size: {item.size}</p>
                    <p className="text-primary font-black text-lg mt-2">${item.price}</p>
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-4 bg-base-100 px-4 py-2 rounded-full border border-base-300">
                    <button className="font-bold hover:text-primary transition-colors">—</button>
                    <span className="font-black text-sm w-4 text-center">{item.qty}</span>
                    <button className="font-bold hover:text-primary transition-colors">+</button>
                  </div>

                  {/* Remove Button */}
                  <button className="btn btn-circle btn-ghost btn-sm text-gray-400 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500 italic">Your bag is empty.</p>
                <Link to="/" className="btn btn-primary rounded-full mt-6">Continue Shopping</Link>
              </div>
            )}
          </div>

          {/* --- Right Side: Order Summary --- */}
          <div className="bg-base-200 p-8 rounded-[3rem] border-2 border-base-300 shadow-xl lg:sticky lg:top-24">
            <h2 className="text-2xl font-black uppercase italic mb-8">Summary</h2>
            
            <div className="space-y-4 border-b border-base-300 pb-6">
              <div className="flex justify-between font-bold uppercase text-xs tracking-widest text-gray-500">
                <span>Subtotal</span>
                <span className="text-base-content">${subtotal}</span>
              </div>
              <div className="flex justify-between font-bold uppercase text-xs tracking-widest text-gray-500">
                <span>Shipping</span>
                <span className="text-base-content">${shipping}</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-6">
              <span className="text-lg font-black uppercase italic">Total</span>
              <span className="text-2xl font-black text-primary">${subtotal + shipping}</span>
            </div>

            {/* Promo Code */}
            <div className="join w-full mb-8">
              <input className="input input-bordered join-item w-full bg-base-100 rounded-l-full focus:outline-none border-base-300 text-sm" placeholder="PROMO CODE" />
              <button className="btn btn-dark join-item rounded-r-full px-6 uppercase font-bold text-xs">Apply</button>
            </div>

            <button className="btn btn-primary w-full rounded-full btn-lg font-black uppercase italic shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
              Checkout Now
            </button>

            <p className="text-[10px] text-center text-gray-400 mt-6 uppercase font-bold tracking-widest">
              Secure payment processed by Stripe
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CartPage;