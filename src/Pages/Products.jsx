import React, { useState } from 'react';

const Products = () => {
  const allProducts = [
    { id: 1, name: "Compressed T-Shirt", price: "Rs 500", category: "Topwear", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500" },
    { id: 2, name: "Premium Slim Fit", price: "Rs 750", category: "Topwear", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500" },
    { id: 3, name: "Oversized Cotton", price: "Rs 600", category: "Topwear", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=500" },
    { id: 4, name: "Athletic Performance", price: "Rs 850", category: "Sportswear", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500" },
    { id: 5, name: "Graphic Tee", price: "Rs 450", category: "Topwear", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=500" },
    { id: 6, name: "Urban Cargo", price: "Rs 1200", category: "Bottomwear", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500" },
    { id: 7, name: "Classic Sneakers", price: "Rs 2500", category: "Footwear", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 8, name: "Denim Jacket", price: "Rs 1800", category: "Outerwear", img: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500" },
  ];

  const categories = ["All", "Topwear", "Bottomwear", "Footwear", "Sportswear"];

  return (
    <section className="bg-base-100 py-12 md:py-20 px-6 lg:px-24">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-center lg:text-left">
          Shop <span className="text-primary">All</span>
        </h1>
        <p className="text-gray-500 mt-4 text-center lg:text-left font-medium uppercase tracking-widest text-xs">
          Explore our complete collection of modern essentials
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* --- Sidebar Filters --- */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-black uppercase italic tracking-widest mb-6 border-b-2 border-primary w-fit">Categories</h3>
              <div className="flex flex-wrap lg:flex-col gap-3">
                {categories.map((cat) => (
                  <button key={cat} className="btn btn-ghost btn-sm justify-start font-bold uppercase italic text-xs hover:text-primary rounded-full px-4 border border-base-300 lg:border-none">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div className="hidden lg:block">
              <h3 className="text-sm font-black uppercase italic tracking-widest mb-6 border-b-2 border-primary w-fit">Sort By</h3>
              <select className="select select-bordered w-full bg-base-200 rounded-2xl border-none font-bold text-xs">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </aside>

        {/* --- Product Grid --- */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {allProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-base-200 border border-base-300">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="btn btn-primary rounded-full px-8 uppercase font-black italic shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick Add
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold uppercase italic tracking-tight leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <span className="text-lg font-black italic">{product.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center">
            <div className="join">
              <button className="join-item btn btn-outline btn-sm rounded-l-full uppercase font-bold italic">Prev</button>
              <button className="join-item btn btn-primary btn-sm uppercase font-bold italic">1</button>
              <button className="join-item btn btn-outline btn-sm uppercase font-bold italic">2</button>
              <button className="join-item btn btn-outline btn-sm rounded-r-full uppercase font-bold italic">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;