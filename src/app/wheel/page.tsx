'use client';

import React, { useEffect, useState } from 'react';
import WheelSection from '@/components/wheel/WheelSection';
import ActionButtons from '@/components/wheel/ActionButtons';
import TopPrizes from '@/components/wheel/TopPrizes';
import PrizeProbability from '@/components/wheel/PrizeProbability';
import ResultDialog from '@/components/wheel/ResultDialog';

import preImage from '../../../public/pre.png';
import goldImage from '../../../public/gold.png';
import silverImage from '../../../public/silver.png';

import { selectPrizeByProbability } from '../../config/prize-config';

// ===================== PRIZE CONFIG =====================
const prizeConfig = [
  {
    id: 123,
    option: 'GenZ Việt Nam Package',
    image: { uri: '/1.png', sizeMultiplier: 1.2, offsetY: 140 },
    probability: 0,
    backgroundColor: '#DA202B',
    textColor: '#000000',
  },
  {
    option: 'Voucher 500.000 vnđ',
    image: { uri: '/2.png', sizeMultiplier: 1.5, offsetY: 140 },
    probability: 0,
    backgroundColor: '#FFFFFF',
    textColor: '#FFFFFF',
  },
  {
    option: '1 Giải GOLD (Sony WH-CH520)',
    image: { uri: '/3.png', sizeMultiplier: 1.5, offsetY: 140 },
    probability: 10,
    backgroundColor: '#DA202B',
    textColor: '#FFFFFF',
  },
  {
    option: '1 Giải SILVER (Logitech M650)',
    image: { uri: '/4.png', sizeMultiplier: 1.2, offsetY: 140 },
    probability: 0,
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
  {
    option: 'Back2School Package',
    image: { uri: '/5.png', sizeMultiplier: 1.2, offsetY: 140 },
    probability: 0,
    backgroundColor: '#DA202B',
    textColor: '#000000',
  },
  {
    option: 'Voucher 300.000 vnđ',
    image: { uri: '/6.png', sizeMultiplier: 1.3, offsetY: 140 },
    probability: 0,
    backgroundColor: '#FFFFFF',
    textColor: '#FFFFFF',
  },
  {
    option: 'Voucher 200.000 vnđ',
    image: { uri: '/7.png', sizeMultiplier: 1.2, offsetY: 140 },
    probability: 0,
    backgroundColor: '#DA202B',
    textColor: '#FFFFFF',
  },
  {
    option: '1 Giải PREMIUM (Xiaomi Redmi Pad 2)',
    image: { uri: '/8.png', sizeMultiplier: 1.2, offsetY: 140 },
    probability: 90,
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
];

const data = prizeConfig.map(
  ({ id, backgroundColor, textColor, ...prize }) => ({
    ...prize,
    style: { backgroundColor, textColor },
  })
);

const topPrizes = [
  {
    id: 1,
    name: '1 Giải PREMIUM',
    image: preImage,
    alt: 'Premium Prize',
    description: 'Tablet Xiaomi Redmi Pad 2',
  },
  {
    id: 2,
    name: '1 Giải GOLD',
    image: goldImage,
    alt: 'Gold Prize',
    description: 'Tai nghe chụp tai Sony',
  },
  {
    id: 3,
    name: '1 Giải SILVER',
    image: silverImage,
    alt: 'Silver Prize',
    description: 'Chuột không dây Logitech',
  },
];

// ===================== PAGE =====================
export default function Page() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState<string>('');

  const [scale, setScale] = useState(1);

  // Responsive scale for entire wheel block
  useEffect(() => {
    const computeScale = (width: number) => {
      if (width < 360) return 0.9;
      if (width < 640) return 0.95;
      if (width < 1024) return 1.0;
      return 1.1;
    };
    const apply = () => setScale(computeScale(window.innerWidth));
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  // Spin handlers
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = selectPrizeByProbability(prizeConfig);

      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setWonPrize(data[prizeNumber].option);
    setShowResult(true);
  };

  const handleGoHome = () => setShowResult(false);

  const handleRewardClick = () => {
    setWonPrize(data[prizeNumber].option);
    setShowResult(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 min-h-screen mt-16 sm:mt-20 overflow-x-hidden">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold pt-10 text-center uppercase mb-2 bg-gradient-to-r from-[#AA000A] to-[#DA202B] bg-clip-text text-transparent">
        VÒNG QUAY MAY MẮN
      </h1>
      <p className="text-center text-gray-700 mb-6 text-sm sm:text-base">
        Cơ hội sở hữu các phần quà có giá trị lên đến <br />
        <span className="font-bold text-lg sm:text-xl md:text-2xl text-[#9C0000]">
          10.000.000 VNĐ
        </span>
      </p>

      {/* Wheel Section */}
      <WheelSection
        mustSpin={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        scale={scale}
        onSpin={handleSpinClick}
        onStopSpinning={handleStopSpinning}
      />

      {/* Action Buttons */}
      <ActionButtons
        onSpin={handleSpinClick}
        onRewardClick={handleRewardClick}
      />

      {/* Top Prizes */}
      <TopPrizes topPrizes={topPrizes} />

      {/* Prize Probability */}
      <PrizeProbability prizeConfig={prizeConfig} />

      {/* Result Dialog */}
      <ResultDialog
        open={showResult}
        onOpenChange={setShowResult}
        prizeName={wonPrize}
        prizeImage={prizeConfig[prizeNumber].image.uri}
        onGoHome={handleGoHome}
      />
    </div>
  );
}
