'use client';

import { useState } from 'react';

import OnBoarding from '@/components/OnBoarding';
import BannerHomePage from '@/components/banner-home-page';

export default function Home() {
  const [showOnBoarding, setShowOnBoarding] = useState(true);

  const handleOnBoardingComplete = () => {
    setShowOnBoarding(false);
  };

  if (showOnBoarding) {
    return <OnBoarding onComplete={handleOnBoardingComplete} />;
  }

  return (
    <main>
      <BannerHomePage />
    </main>
  );
}
