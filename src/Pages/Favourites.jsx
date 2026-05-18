import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Favourites = () => {
  // Mock data for Favourites
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Compressed T-Shirt", price: "Rs 500", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500" },
    { id: 2, name: "Premium Slim Fit", price: "Rs 750", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500" },
    { id: 3, name: "Vintage Wash", price: "Rs 500", img: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=500" },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <section className="bg-base-100 py-12 md:py-20 px-6 lg:px-24 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              Your <span className="text-primary">Wishlist</span>
            </h1>
            <p className="mt-4 text-gray-500 font-medium">
              {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'} saved for later
            </p>
          </div>
          
          {wishlist.length > 0 && (
            <button className="btn btn-outline btn-primary rounded-full px-8 uppercase font-bold italic tracking-widest text-xs">
              Add All To Bag
            </button>
          )}
        </div>

        {wishlist.length > 0 ? (
          /* Wishlist Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((item) => (
              <div key={item.id} className="group relative bg-base-200 rounded-[2rem] border border-base-300 overflow-hidden transition-all hover:shadow-2xl">
                
                {/* Remove Button (Top Right) */}
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 z-20 btn btn-circle btn-sm bg-white/80 border-none text-slate-800 hover:bg-red-500 hover:text-white transition-all shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Overlay / Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold uppercase italic tracking-tight">{item.name}</h3>
                  <p className="text-primary font-black text-xl mt-1">{item.price}</p>
                  
                  <button className="btn btn-primary btn-sm w-full rounded-full mt-4 uppercase font-black italic tracking-tighter shadow-lg shadow-primary/20">
                    Move to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
            </div>
            <h2 className="text-2xl font-black uppercase italic mb-2">No Favourites Yet</h2>
            <p className="text-gray-500 mb-8">Start adding items you love to your wishlist!</p>
            <Link to="/" className="btn btn-primary px-10 rounded-full font-bold uppercase italic">
              Go Shopping
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favourites;