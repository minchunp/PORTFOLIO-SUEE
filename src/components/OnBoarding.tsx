'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface OnBoardingProps {
  onComplete: () => void;
}

const OnBoarding = ({ onComplete }: OnBoardingProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      onComplete();
    }
  }, [countdown, onComplete]);

  return (
    <div className="from-primary-500 to-secondary-500 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br p-8">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/next.svg"
            alt="Portfolio Logo"
            width={200}
            height={50}
            priority
            className="mx-auto dark:invert"
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Welcome to My Portfolio
        </h1>

        <p className="mb-8 text-xl text-white/80 md:text-2xl">
          Suee&apos;s Digital Space
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="h-2 w-64 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full bg-white transition-all duration-1000 ease-linear"
              style={{ width: `${((5 - countdown) / 5) * 100}%` }}
            />
          </div>

          <p className="text-lg text-white/60">
            Redirecting in {countdown} seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
