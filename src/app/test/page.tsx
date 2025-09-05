'use client';
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import startButton from '../../../public/start.png';
import preImage from '../../../public/pre.png';
import goldImage from '../../../public/gold.png';
import silverImage from '../../../public/silver.png';
import Image from 'next/image';

// Data cho vòng quay
const data = [
  {
    option: '1 Giải PREMIUM',
    image: {
      uri: '/pre.png',
      sizeMultiplier: 0.7,
      offsetY: 10, // đẩy ảnh xuống một chút
      offsetX: 0, // đẩy ngang (âm = trái, dương = phải)
    },
    style: { backgroundColor: '#FFD700', textColor: 'black' },
  },
  {
    option: '1 Giải GOLD',
    image: {
      uri: '/gold.png',
      sizeMultiplier: 0.7,
      offsetY: 18, // ảnh này đẩy xuống thấp hơn một chút
    },
    style: { backgroundColor: '#FFA500', textColor: 'white' },
  },
  {
    option: '1 Giải SILVER',
    image: {
      uri: '/silver.png',
      sizeMultiplier: 0.7,
      offsetY: 8, // ảnh này cao hơn một chút
    },
    style: { backgroundColor: '#C0C0C0', textColor: 'black' },
  },
  {
    option: 'Voucher 500k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/2331/2331941.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    style: { backgroundColor: 'white', textColor: 'white' },
  },
  // ... các item còn lại
];

// Data cho 3 giải thưởng hiển thị
const topPrizes = [
  {
    id: 1,
    name: '1 Giải PREMIUM',
    image: preImage,
    alt: 'Premium Prize',

    value: '10,000,000 VNĐ',
    description: 'Giải thưởng cao nhất',
  },
  {
    id: 2,
    name: '1 Giải GOLD',
    image: goldImage,
    alt: 'Gold Prize',

    value: '5,000,000 VNĐ',
    description: 'Giải thưởng cao cấp',
  },
  {
    id: 3,
    name: '1 Giải SILVER',
    image: silverImage,
    alt: 'Silver Prize',
    value: '2,000,000 VNĐ',
    description: 'Giải thưởng chất lượng',
  },
];

const Page = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center py-12 min-h-screen bg-white">
      {/* Vòng quay section */}
      <div className="flex justify-center items-center py-12">
        <div className="relative">
          <div className="bg-[#5997C8] h-[450px] w-[450px] rounded-full"></div>
          {/* Wheel container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              textColors={['#ffffff']}
              onStopSpinning={() => {
                setMustSpin(false);
                alert(`Bạn đã quay trúng: ${data[prizeNumber].option}`);
              }}
              fontSize={20}
              outerBorderWidth={10}
              radiusLineWidth={5}
              textDistance={60}
              innerBorderColor="none"
              radiusLineColor="none"
              outerBorderColor="none"
              perpendicularText
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-12 py-12 bg-black/30 rounded-full text-white font-bold text-xl shadow-2xl disabled:opacity-50 transition-all duration-300 hover:scale-101"></div>
          <Image
            src={startButton}
            alt=""
            height={600}
            width={600}
            onClick={handleSpinClick}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 object-cover cursor-pointer hover:scale-110 transition duration-200"
          />
        </div>
      </div>

      {/* Prize Information Section */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="grid grid-cols-3 h-48">
            {topPrizes.map((prize) => (
              <div
                key={prize.id}
                className="relative border-r border-gray-200 last:border-r-0"
              >
                {/* Image section */}
                <div className="h-3/4 flex items-center justify-center bg-gray-50">
                  <Image
                    src={prize.image}
                    alt={prize.alt}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                {/* Text section */}
                <div className="h-1/4 bg-[#4483B8] flex items-center justify-center">
                  <span className="text-white text-sm font-semibold text-center px-2">
                    {prize.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
