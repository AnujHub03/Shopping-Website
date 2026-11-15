import React from "react";

const BestSeller = () => {
  const products = [
    { title: "Premium Shoes", price: "$89", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" },
    { title: "Casual Shirt", price: "$60", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" },
    { title: "Modern Pant", price: "$75", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500" },
    { title: "Jackets", price: "$105", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { title: "Formal Blazers", price: "$180", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500" },
  ];

  return (
    // Changed: Removed bottom padding (pb-0) and used pt-16
    <section className="bg-base-100 pt-16 pb-0 px-6 lg:px-24 overflow-hidden">
      {/* Header Section */}
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
          Best <span className="text-primary">Seller</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
          Quidem porro odit, nam tempora aliquam dignissimos maiores dolore
          dolores accusantium harum qui repellat est!
        </p>
      </div>

      {/* Main Bordered Container */}
      <div className="border-2 border-base-300 rounded-[2.5rem] p-4 md:p-8 mb-0">
        {/* Changed: Adjusted pb-2 to minimize space under cards */}
        <div className="flex overflow-x-auto gap-8 pb-2 snap-x snap-mandatory scrollbar-hide">
          {products.map((item, index) => (
            <div
              key={index}
              className="snap-center min-w-[280px] md:min-w-[320px] bg-base-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-base-300 mb-2"
            >
              <figure className="relative h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 badge badge-primary font-bold">SALE</div>
                {item.price && (
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-bold">
                    {item.price}
                  </div>
                )}
              </figure>
              <div className="p-6 text-center lg:text-left">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-sm text-gray-500 my-3">
                  Premium quality with a modern fit for any occasion.
                </p>
                <button className="btn btn-sm btn-outline border-2 border-gray-700 hover:shadow-[0_0_15px_rgba(255,0,0,0.6)] hover:border-red-500 hover:text-red-500 btn-primary rounded-full px-6 transition-all duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;