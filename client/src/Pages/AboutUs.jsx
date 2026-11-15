import React from 'react';

const AboutUs = () => {
  const values = [
    { title: "Sustainability", desc: "100% organic cotton and recycled packaging.", icon: "🌱" },
    { title: "Ethical Craft", desc: "Fair wages and safe environments for all tailors.", icon: "🪡" },
    { title: "Innovation", desc: "Cutting-edge fabric tech for maximum comfort.", icon: "🚀" }
  ];

  return (
    <section className="bg-base-100 py-12 md:py-20 px-6 lg:px-24 overflow-hidden">
      {/* --- Hero Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Clean Image (No button/badge behind) */}
        <div className="relative">
          <div className="relative z-10 overflow-hidden rounded-[2rem] md:rounded-[4rem] border-4 border-base-200 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000" 
              alt="Brand aesthetic" 
              className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Subtle accent glow instead of a badge */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Narrative */}
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
           Variety Zone Since 2014
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-8">
            Better <span className="text-primary">Basics</span> <br /> For Everyone.
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            We believe that fashion shouldn't be a choice between looking good and doing good. Our mission is to bridge the gap between luxury quality and everyday affordability.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
            <div>
              <h3 className="text-3xl font-black text-base-content italic">98%</h3>
              <p className="text-xs font-bold uppercase text-gray-400">Customer Satisfaction</p>
            </div>
            <div className="divider divider-horizontal hidden sm:flex"></div>
            <div>
              <h3 className="text-3xl font-black text-base-content italic">24H</h3>
              <p className="text-xs font-bold uppercase text-gray-400">Average Dispatch</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Core Values Section (New Data) --- */}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-black uppercase italic mb-12">Our Core <span className="text-primary">Principles</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-8 bg-base-200 rounded-[2.5rem] border border-base-300 hover:border-primary transition-all group">
              <span className="text-4xl mb-4 block">{v.icon}</span>
              <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Mission Statement / Founders (More Detail) --- */}
      <div className="mt-32 bg-primary text-primary-content rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-6">"Fashion is a language that creates itself in clothes."</h2>
          <p className="text-lg opacity-90 mb-8 italic">— Anuj Hooda, Founder & Lead Designer</p>
          <button className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary rounded-full px-10">
            Read Our Manifesto
          </button>
        </div>
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
      </div>

      {/* --- Final CTA Grid --- */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300" className="rounded-2xl" alt="process" />
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300" className="rounded-2xl" alt="store" />
        <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=300" className="rounded-2xl" alt="fashion" />
        
      </div>
    </section>
  );
};

export default AboutUs;