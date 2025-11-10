'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import suee_banner from '../../public/images/suee-banner.png';
import '@/styles/animations/banner-home-page-animation.css';

const BannerHomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#E85A8C] to-[#B32B63]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="animate-float absolute top-20 -left-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="animate-float-delayed absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="animate-float-slow absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-white blur-2xl" />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="animate-rotate-slow absolute top-20 left-10 h-32 w-32 rotate-45 border-2 border-white/30" />
        <div className="animate-rotate-reverse absolute top-1/3 right-20 h-24 w-24 rotate-12 border-2 border-white/30" />
        <div className="animate-float-gentle absolute bottom-20 left-1/4 h-40 w-40 rotate-45 border-2 border-white/30" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative flex h-full items-center justify-center px-4">
        <div className="relative h-full w-full max-w-7xl">
          {/* Text behind image - "Sueeee" */}
          <div className="absolute top-1/3 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
            <h1
              className={`font-serif text-[8rem] leading-none font-bold tracking-tighter text-white/10 transition-all duration-1500 md:text-[14rem] lg:text-[18rem] ${
                isVisible
                  ? 'blur-0 translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0 blur-sm'
              }`}
              style={{
                textShadow: '0 0 100px rgba(255, 255, 255, 0.1)',
              }}
            >
              Sueeee
            </h1>
          </div>

          {/* Decorative lines behind image */}
          <div
            className={`absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transition-all delay-200 duration-1500 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <div className="relative h-[500px] w-[500px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]">
              {/* Rotating circle */}
              <div className="animate-rotate-slow absolute inset-0 rounded-full border border-white/10" />
              <div className="animate-rotate-reverse absolute inset-8 rounded-full border border-white/10" />
              <div className="animate-rotate-slow absolute inset-16 rounded-full border border-white/10" />

              {/* Diagonal lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[1px] w-full rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[1px] w-full -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Image container */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <div
              className={`relative transition-all delay-300 duration-1500 ${
                isVisible
                  ? 'blur-0 translate-y-0 scale-100 opacity-100'
                  : 'translate-y-10 scale-95 opacity-0 blur-sm'
              }`}
            >
              {/* Glow effect behind image */}
              <div className="animate-pulse-glow absolute inset-0 -z-10 scale-110 rounded-full bg-white/30 blur-3xl" />

              {/* Floating particles around image */}
              <div className="animate-float-particle-1 absolute top-20 -left-10 h-2 w-2 rounded-full bg-white/60 blur-sm" />
              <div className="animate-float-particle-2 absolute top-40 -right-10 h-3 w-3 rounded-full bg-white/40 blur-sm" />
              <div className="animate-float-particle-3 absolute bottom-20 left-0 h-2 w-2 rounded-full bg-white/50 blur-sm" />
              <div className="animate-float-particle-4 absolute -right-5 bottom-32 h-2 w-2 rounded-full bg-white/60 blur-sm" />

              <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[750px] lg:w-[750px]">
                <Image
                  src={suee_banner}
                  alt="Suee"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 750px"
                />
              </div>
            </div>
          </div>

          {/* Text in front of image - "Nguyen" */}
          <div className="absolute bottom-1/4 left-1/2 z-20 -translate-x-1/2">
            <div
              className={`relative transition-all delay-700 duration-1500 ${
                isVisible
                  ? 'translate-y-0 scale-100 opacity-100'
                  : 'translate-y-10 scale-90 opacity-0'
              }`}
            >
              {/* Glow behind text */}
              <div className="animate-pulse-slow absolute inset-0 -z-10 scale-110 rounded-full bg-white/40 blur-2xl" />

              {/* Decorative elements around text */}
              <div className="absolute top-1/2 -left-16 hidden -translate-y-1/2 md:block">
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-12 bg-white/50" />
                  <div className="h-1 w-1 rotate-45 bg-white/70" />
                </div>
              </div>
              <div className="absolute top-1/2 -right-16 hidden -translate-y-1/2 md:block">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rotate-45 bg-white/70" />
                  <div className="h-[1px] w-12 bg-white/50" />
                </div>
              </div>

              <h2
                className="font-serif text-[6rem] leading-none font-bold tracking-tighter text-white md:text-[9rem] lg:text-[11rem]"
                style={{
                  textShadow:
                    '4px 4px 0 rgba(0, 0, 0, 0.2), 8px 8px 20px rgba(0, 0, 0, 0.3)',
                }}
              >
                Nguyen
              </h2>
            </div>
          </div>

          {/* Enhanced corner decorations */}
          <div
            className={`absolute top-10 left-10 transition-all delay-1000 duration-1000 md:top-20 md:left-20 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-white via-white/50 to-transparent" />
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-white via-white/50 to-transparent" />
              <div className="absolute top-2 left-2 h-3 w-3 rotate-45 animate-pulse bg-white shadow-lg shadow-white/50" />
              <div className="absolute top-6 left-6 h-1 w-1 rotate-45 bg-white/60" />
            </div>
          </div>

          <div
            className={`absolute top-10 right-10 transition-all delay-1000 duration-1000 md:top-20 md:right-20 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-white via-white/50 to-transparent" />
              <div className="absolute top-0 right-0 h-[2px] w-full bg-gradient-to-l from-white via-white/50 to-transparent" />
              <div className="absolute top-2 right-2 h-3 w-3 rotate-45 animate-pulse bg-white shadow-lg shadow-white/50" />
              <div className="absolute top-6 right-6 h-1 w-1 rotate-45 bg-white/60" />
            </div>
          </div>

          {/* Bottom decorations */}
          <div
            className={`absolute bottom-10 left-10 transition-all delay-1100 duration-1000 md:bottom-20 md:left-20 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-white via-white/50 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-white via-white/50 to-transparent" />
              <div className="absolute bottom-2 left-2 h-3 w-3 rotate-45 animate-pulse bg-white shadow-lg shadow-white/50" />
            </div>
          </div>

          <div
            className={`absolute right-10 bottom-10 transition-all delay-1100 duration-1000 md:right-20 md:bottom-20 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <div className="absolute right-0 bottom-0 h-full w-[2px] bg-gradient-to-t from-white via-white/50 to-transparent" />
              <div className="absolute right-0 bottom-0 h-[2px] w-full bg-gradient-to-l from-white via-white/50 to-transparent" />
              <div className="absolute right-2 bottom-2 h-3 w-3 rotate-45 animate-pulse bg-white shadow-lg shadow-white/50" />
            </div>
          </div>

          {/* Subtitle text with enhanced design */}
          <div
            className={`absolute bottom-5 left-1/2 z-30 -translate-x-1/2 transition-all delay-1200 duration-1000 md:bottom-5 ${
              isVisible ? 'blur-0 opacity-100' : 'opacity-0 blur-sm'
            }`}
          >
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-white/50 md:w-12" />
                <div className="h-2 w-2 rotate-45 animate-pulse bg-white shadow-lg shadow-white/50" />
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-white/50 md:w-12" />
              </div>
              <p className="text-base font-light tracking-[0.3em] text-white/90 uppercase md:text-lg">
                Portfolio
              </p>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-white/60" />
                <div className="h-1 w-1 rounded-full bg-white/60" />
                <div className="h-1 w-1 rounded-full bg-white/60" />
              </div>
            </div>
          </div>

          {/* Side text labels */}
          <div
            className={`absolute top-1/2 left-0 z-30 hidden -translate-y-1/2 -rotate-90 transition-all delay-1300 duration-1000 lg:block ${
              isVisible
                ? '-translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <p className="text-sm font-light tracking-[0.5em] text-white/40 uppercase">
              Creative • Fashion • Design
            </p>
          </div>

          <div
            className={`absolute top-1/2 right-0 z-30 hidden -translate-y-1/2 rotate-90 transition-all delay-1300 duration-1000 lg:block ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <p className="text-sm font-light tracking-[0.5em] text-white/40 uppercase">
              Digital Portfolio 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHomePage;
