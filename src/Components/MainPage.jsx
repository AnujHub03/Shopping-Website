import React from "react";

const MainPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')", 
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 py-12 md:px-12">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-[4/3] md:aspect-square rounded-3xl shadow-2xl border border-white/10 overflow-hidden bg-cover bg-center bg-[url('src/assets/mainImage.jpg')]">
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
              Various <span className="text-primary">Brand</span>
            </h1>
            <p className="py-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              voluptates debitis, harum reiciendis praesentium sit, voluptatibus
              rem non similique ipsa explicabo, in quibusdam doloremque delectus
              numquam facere incidunt illum laudantium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-10">
              <button className="btn btn-primary btn-md md:btn-lg px-8">
              Shop Now
            </button>

              <button className="btn btn-ghost border-2 border-white/30  hover:shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-all duration-300 btn-md md:btn-lg px-10 rounded-full group text-white">
                <span className="relative pb-1">
                  View Collection
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainPage;