'use client';

import { useEffect, useState } from 'react';
import '@/styles/animations/onboarding-animation.css';

interface OnBoardingProps {
  onComplete: () => void;
}

const OnBoarding = ({ onComplete }: OnBoardingProps) => {
  const [countdown, setCountdown] = useState(5);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  }, [countdown, onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="animate-gradient-shift absolute inset-0 bg-gradient-to-br from-black via-[#1a0510] to-[#2d0a1a]" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="animate-float absolute top-20 left-20 h-64 w-64 rounded-full bg-[#E85A8C] blur-3xl" />
        <div className="animate-float-delayed absolute right-32 bottom-32 h-96 w-96 rounded-full bg-[#E85A8C] blur-3xl" />
        <div className="animate-pulse-slow absolute top-1/2 left-1/3 h-48 w-48 rotate-45 bg-[#E85A8C] blur-2xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(#E85A8C 1px, transparent 1px), linear-gradient(90deg, #E85A8C 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main content */}
      <div
        className={`relative flex h-full items-center justify-center transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="space-y-16 px-8 text-center">
          {/* Brand Name with dramatic entrance */}
          <div
            className={`transition-all delay-300 duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-10 opacity-0'
            }`}
          >
            <div className="relative inline-block">
              {/* Glow effect behind text */}
              <div className="animate-ping-slow absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-full rounded-full bg-[#E85A8C] opacity-30 blur-3xl" />
              </div>

              {/* Main brand text */}
              <h1 className="relative font-serif text-8xl font-bold tracking-wider md:text-9xl">
                <span className="animate-shimmer inline-block bg-gradient-to-r from-white via-[#E85A8C] to-white bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-2xl">
                  SUEE
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle with staggered animation */}
          <div className="space-y-6">
            <div
              className={`flex items-center justify-center gap-4 transition-all delay-500 duration-1000 ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}
            >
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#E85A8C] to-[#E85A8C]" />
              <div className="h-3 w-3 rotate-45 bg-[#E85A8C] shadow-lg shadow-[#E85A8C]/50" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent via-[#E85A8C] to-[#E85A8C]" />
            </div>

            <h2
              className={`text-3xl font-light tracking-[0.3em] transition-all delay-700 duration-1000 md:text-4xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              {/* <span className="text-white/90">MY</span>
              <span className="mx-4 text-[#E85A8C]">•</span> */}
              <span className="text-[#E85A8C]">PORTFOLIO</span>
            </h2>

            <p
              className={`font-serif text-xl text-white/60 italic transition-all delay-900 duration-1000 md:text-2xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              Digital Marketing
            </p>
          </div>

          {/* Decorative quote */}
          <div
            className={`flex justify-center transition-all delay-1000 duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <div className="relative max-w-md">
              <div className="absolute -top-4 -left-4 font-serif text-6xl text-[#E85A8C] opacity-30">
                &quot;
              </div>
              <p className="px-8 text-lg leading-relaxed font-light tracking-wide text-white/70">
                Hãy luôn là chính bạn, vì bạn chỉ có một phiên bản duy nhất trên
                thế giới.
              </p>
              <div className="absolute -right-4 -bottom-4 rotate-180 font-serif text-6xl text-[#E85A8C] opacity-30">
                &quot;
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div
            className={`flex flex-col items-center gap-6 transition-all delay-1100 duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative w-80 md:w-96">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-[#E85A8C] opacity-20 blur-lg" />

              {/* Progress container */}
              <div className="relative h-1.5 overflow-hidden rounded-full border border-[#E85A8C]/40 bg-white/5 shadow-lg backdrop-blur-sm">
                <div
                  className="animate-shimmer relative h-full bg-gradient-to-r from-[#E85A8C] via-[#ff6ba0] to-[#E85A8C] bg-[length:200%_100%] shadow-[0_0_20px_rgba(232,90,140,0.5)] transition-all duration-1000 ease-out"
                  style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                >
                  <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-r from-transparent to-white opacity-60" />
                </div>
              </div>

              {/* Progress dots */}
              <div className="absolute -top-2 flex w-full justify-between px-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                      i < 5 - countdown
                        ? 'scale-110 border-[#E85A8C] bg-[#E85A8C] shadow-lg shadow-[#E85A8C]/60'
                        : 'scale-90 border-[#E85A8C]/40 bg-black'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Countdown text */}
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E85A8C]/50" />
              <div className="relative">
                <p className="text-sm font-light tracking-[0.3em] text-white/50 uppercase">
                  Khởi tạo
                </p>
                <div className="absolute top-1/2 -right-16 -translate-y-1/2">
                  <div className="relative">
                    <div className="animate-ping-slow absolute inset-0 rounded-full bg-[#E85A8C] opacity-40 blur-md" />
                    <span className="animate-pulse-subtle relative inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E85A8C] bg-gradient-to-br from-[#E85A8C]/20 to-transparent text-2xl font-bold text-[#E85A8C] shadow-lg backdrop-blur-sm">
                      {countdown}
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E85A8C]/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorations - more elegant */}
      <div className="animate-fade-in absolute top-8 left-8">
        <div className="relative h-20 w-20">
          <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-[#E85A8C] to-transparent" />
          <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#E85A8C] to-transparent" />
          <div className="absolute top-2 left-2 h-2 w-2 rotate-45 bg-[#E85A8C] shadow-lg shadow-[#E85A8C]/50" />
        </div>
      </div>

      <div className="animate-fade-in absolute top-8 right-8">
        <div className="relative h-20 w-20">
          <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[#E85A8C] to-transparent" />
          <div className="absolute top-0 right-0 h-[2px] w-full bg-gradient-to-l from-[#E85A8C] to-transparent" />
          <div className="absolute top-2 right-2 h-2 w-2 rotate-45 bg-[#E85A8C] shadow-lg shadow-[#E85A8C]/50" />
        </div>
      </div>

      <div className="animate-fade-in absolute bottom-8 left-8">
        <div className="relative h-20 w-20">
          <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[#E85A8C] to-transparent" />
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#E85A8C] to-transparent" />
          <div className="absolute bottom-2 left-2 h-2 w-2 rotate-45 bg-[#E85A8C] shadow-lg shadow-[#E85A8C]/50" />
        </div>
      </div>

      <div className="animate-fade-in absolute right-8 bottom-8">
        <div className="relative h-20 w-20">
          <div className="absolute right-0 bottom-0 h-full w-[2px] bg-gradient-to-t from-[#E85A8C] to-transparent" />
          <div className="absolute right-0 bottom-0 h-[2px] w-full bg-gradient-to-l from-[#E85A8C] to-transparent" />
          <div className="absolute right-2 bottom-2 h-2 w-2 rotate-45 bg-[#E85A8C] shadow-lg shadow-[#E85A8C]/50" />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
