import React from 'react';

const Contact = () => {
  return (
    <section className="bg-base-100 py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="mt-6 text-gray-500 max-w-2xl text-lg leading-relaxed">
            Have a question about our latest drop or need help with an order? 
            Our team is here to help you stay ahead of the trends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Information Cards */}
          <div className="space-y-6">
            <div className="bg-base-200 p-8 rounded-[2.5rem] border border-base-300 group hover:border-primary transition-all duration-300">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-2">Visit Our Studio</h3>
              <p className="text-xl font-bold italic uppercase">123 Fashion Ave, <br /> New Delhi, India</p>
            </div>

            <div className="bg-base-200 p-8 rounded-[2.5rem] border border-base-300 group hover:border-primary transition-all duration-300">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-2">Direct Contact</h3>
              <p className="text-xl font-bold italic uppercase">support@modernstyle.com</p>
              <p className="text-xl font-bold italic uppercase">+91 98765 43210</p>
            </div>

            {/* Social Connection Card */}
            <div className="bg-primary text-primary-content p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-2xl font-black uppercase italic mb-4">Follow the vibe</h3>
                  <div className="flex gap-4">
                    {['INSTAGRAM', 'TWITTER', 'FACEBOOK'].map((social) => (
                      <span key={social} className="text-xs font-bold border-b-2 border-primary-content cursor-pointer hover:opacity-70 transition-opacity">
                        {social}
                      </span>
                    ))}
                  </div>
               </div>
               {/* Decorative circle */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-base-100 border-2 border-base-300 rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Name</label>
                  <input type="text" placeholder="John Doe" className="input input-bordered bg-base-200 rounded-2xl focus:input-primary border-none p-4" />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Email</label>
                  <input type="email" placeholder="john@example.com" className="input input-bordered bg-base-200 rounded-2xl focus:input-primary border-none p-4" />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Subject</label>
                <select className="select select-bordered bg-base-200 rounded-2xl focus:select-primary border-none p-1  ml-2">
                  <option>Order Inquiry</option>
                  <option>Returns & Exchanges</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows="4" className="textarea textarea-bordered bg-base-200 rounded-3xl focus:textarea-primary border-none p-4 ml-2" placeholder="How can we help?"></textarea>
              </div>

              <button className="btn btn-primary w-full rounded-full btn-lg font-black uppercase italic shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all bg-primary">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;