import React from 'react';

const products = [
  { id: 1, name: 'Gold Gold Earrings', price: '£3,900' },
  { id: 2, name: 'Gold Gold Earrings', price: '£3,900' },
  { id: 3, name: 'Gold Gold Earrings', price: '£3,900' },
  { id: 4, name: 'Gold Gold Earrings', price: '£3,900' },
];

export default function ShopGrid() {
  return (
    <section className="py-24 px-6 flex flex-col items-center w-full bg-[#FEFEFE]" id="shop">
      <div className="max-w-[1152px] flex flex-col items-center w-full">
        {/* Title matching 3.png */}
        <h2 className="section-title text-[#40312A] text-center mb-14">
          <span className="swash">S</span>HOP THE COLLECTION
        </h2>

        {/* 4 Product Cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((p) => (
            <div key={p.id} className="flex flex-col items-start rounded-[11px] bg-white overflow-hidden group cursor-pointer">
              <div className="rounded-[11px] bg-[#F8F2EC] w-full h-[297px] flex items-center justify-center relative p-6">
                <button className="absolute top-4 right-4 z-10 p-1.5 rounded-full hover:bg-white transition-colors" aria-label="Add to wishlist">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                    <path d="M10 16.5s-7.5-5.3-7.5-10.1A4.4 4.4 0 016.9 2c1.4 0 2.6.7 3.1 1.9C10.5 2.7 11.7 2 13.1 2A4.4 4.4 0 0117.5 6.4c0 4.8-7.5 10.1-7.5 10.1z" stroke="#676062" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <img
                  src="/earRings.png"
                  alt={p.name}
                  className="w-[157px] h-[131px] object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={e => {
                    e.target.src = '/Image(4).png';
                  }}
                />
              </div>

              <div className="pt-3.5 px-1 flex flex-col items-start">
                <p className="text-[#676062] font-serif text-2xl leading-7">
                  {p.name}
                </p>
                <p className="text-[#676062] font-serif text-xl leading-7">
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button matching 3.png */}
        <div className="pt-14 flex justify-center w-full">
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#4A0612] text-white font-body text-xs font-semibold py-3.5 px-8 rounded hover:bg-[#3E1122] transition-colors tracking-[0.15em] uppercase">
            VIEW FULL GALLERY →
          </a>
        </div>
      </div>
    </section>
  );
}
