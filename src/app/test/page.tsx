'use client';
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import startButton from '../../../public/start.png';
import preImage from '../../../public/pre.png';
import goldImage from '../../../public/gold.png';
import silverImage from '../../../public/silver.png';
import Image from 'next/image';
import bg from '../../../public/bg.svg';

// Data cho vòng quay
const prizes = [
  {
    option: '1 Giải PREMIUM (Xiaomi Redmi Pad 2)',
    image: { uri: '/pre.png', sizeMultiplier: 0.7, offsetY: 10 },
  },
  {
    option: '1 Giải GOLD (Sony WH-CH520)',
    image: { uri: '/gold.png', sizeMultiplier: 0.7, offsetY: 18 },
  },
  {
    option: '1 Giải SILVER (Logitech M650)',
    image: { uri: '/silver.png', sizeMultiplier: 0.7, offsetY: 8 },
  },
  {
    option: 'Voucher 500k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/2331/2331941.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
  },
  {
    option: 'Voucher 300k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
  },
  {
    option: 'Voucher 200k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
  },
  {
    option: 'GenZ Việt Nam Package',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
  },
  {
    option: 'Back2School Package',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/3082/3082005.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
  },
];

// Tự động thêm style xen kẽ trắng / xám
const data = prizes.map((item, index) => ({
  ...item,
  style: {
    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f0f0f0',
    textColor: 'black',
  },
}));

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
    <div className="flex flex-col items-center justify-center py-12 min-h-screen bg-[#FFC9C9]">
      {/* === Tiêu đề chính === */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#174266] uppercase mb-8 text-center drop-shadow-lg">
        VÒNG QUAY MAY MẮN
      </h1>

      {/* Vòng quay section */}
      <div className="w-full px-2 sm:px-4 md:px-0">
        <div className=" flex justify-center items-center ">
          <div className="relative flex items-center justify-center">
            {/* Background responsive */}
            <Image
              src={bg}
              alt="bg"
              className="w-full max-w-[520px] min-w-[280px] sm:min-w-[360px] md:min-w-[480px] h-auto"
              priority
            />

            {/* Wheel container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                textColors={['#000000']}
                onStopSpinning={() => {
                  setMustSpin(false);
                  alert(`Bạn đã quay trúng: ${data[prizeNumber].option}`);
                }}
                fontSize={14}
                outerBorderWidth={0}
                radiusLineWidth={1}
                textDistance={55}
                innerBorderColor="none"
                radiusLineColor="none"
                perpendicularText
              />
            </div>

            {/* Nút Start */}
            <Image
              src={startButton}
              alt="Start Button"
              height={600}
              width={600}
              onClick={handleSpinClick}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 sm:w-16 md:w-20 object-cover cursor-pointer hover:scale-110 transition duration-200"
            />
          </div>
        </div>
      </div>

      {/* Prize Information Section */}
      <div className="w-full max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 h-auto sm:h-48">
            {topPrizes.map((prize) => (
              <div
                key={prize.id}
                className="relative border-b sm:border-b-0 sm:border-r border-gray-200 last:border-r-0"
              >
                {/* Image section */}
                <div className="h-40 sm:h-3/4 flex items-center justify-center bg-gray-50">
                  <Image
                    src={prize.image}
                    alt={prize.alt}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Text section */}
                <div className="h-12 sm:h-1/4 bg-[#4483B8] flex items-center justify-center">
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
