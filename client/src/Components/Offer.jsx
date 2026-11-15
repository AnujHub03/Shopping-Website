import React from 'react';

const Offer = () => {
  const products = [
    { id: 1, name: "Compressed T-Shirt", price: "Rs 500", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500" },
    { id: 2, name: "Premium Slim Fit", price: "Rs 750", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500" },
    { id: 3, name: "Oversized Cotton", price: "Rs 600", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=500" },
    { id: 4, name: "Athletic Performance", price: "Rs 850", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500" },
    { id: 5, name: "Graphic Tee", price: "Rs 450", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=500" },
    { id: 6, name: "Vintage Wash", price: "Rs 500", img: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=500" },
    { id: 7, name: "Classic Fit", price: "Rs 900", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=500" },
  ];

  return (
    <section className="bg-base-100 py-10 px-6 lg:px-24">
      {/* --- Best Seller Header --- */}
      <div className="mb-12 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
         Special <span className="text-primary">Offer</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed mx-auto lg:mx-0">
          Our most-loved pieces, curated for your daily style. Experience premium quality that lasts.
        </p>
      </div>

      {/* --- Product Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative flex flex-col">
            
            {/* Image Container with Hover Actions */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-200 border border-base-300">
              <img 
                src={product.img} 
                alt={product.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay Buttons (Animated) */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                <button className="btn btn-circle btn-sm md:btn-md bg-white border-none text-slate-800 hover:bg-red-500 hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                <button className="btn btn-circle btn-sm md:btn-md bg-white border-none text-slate-800 hover:bg-primary hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </button>
                {/* View Details Button */}
                <button className="btn btn-circle btn-sm md:btn-md bg-white border-none text-slate-800 hover:bg-black hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center lg:text-left">
              <h1 className="text-lg font-bold text-base-content tracking-tight uppercase">
                {product.name}
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-1">
                <span className="text-primary font-black text-xl">{product.price}</span>
                <span className="text-sm text-gray-400 line-through">Rs 1200</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Latest Fashion Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
        {/* Left Side: Large Promo Image */}
        <div className="relative group overflow-hidden rounded-[2.5rem] h-[350px] lg:h-[550px] border-2 border-base-300">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000" 
            alt="Fashion model" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-black uppercase italic">Summer '26</h2>
              <p className="opacity-80 mt-2">Exclusive outdoor collection available now.</p>
            </div>
          </div>
        </div>

        {/* Right Side Column */}
        <div className="flex flex-col gap-8">
          {/* Main Info Card */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-[2.5rem] p-8 md:p-12 flex-1 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none mb-6">
              Latest <br className="hidden md:block" /> <span className="text-primary">Fashion</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Explore the cutting edge of streetwear. Bold patterns meet sustainable fabrics in our newest drop.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="btn btn-primary btn-md md:btn-lg px-8">
              Explore Trends
            </button>
            </div>
          </div>

          {/* Secondary Card (Gift Cards) */}
          <div className="bg-base-200 border border-base-300 rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-md flex-shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl uppercase italic">Gift Cards</h3>
              <p className="text-sm text-gray-500">The perfect choice when you can't decide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;