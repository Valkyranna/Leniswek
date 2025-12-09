import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1415356838286-df6fd593e8b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Prague Czech Republic" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite] grayscale"
        />
        {/* Darker gradient at bottom to blend with next section, lighter at top to show image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#050505]"></div>
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')] pointer-events-none"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 select-none cursor-default">
          LENISWEK
        </h1>
        <p className="text-sm md:text-lg text-neutral-300 font-light">
          Currently learning to create tunes<br />
Exploring Wave, Witch House, Trance music and more!
        </p>
        <p className="text-sm md:text-lg text-neutral-300 font-light mt-4">
          Prague // Czechia
        </p>
      </div>
    </section>
  );
};

export default Hero;