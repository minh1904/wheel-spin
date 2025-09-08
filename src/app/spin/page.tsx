'use client';
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import startButton from '../../../public/start.png';
import preImage from '../../../public/pre.png';
import goldImage from '../../../public/gold.png';
import silverImage from '../../../public/silver.png';
import Image from 'next/image';
import bg from '../../../public/bg.svg';
import { selectPrizeByProbability } from '../../config/prize-config';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const prizeConfig = [
  {
    option: '1 Giải PREMIUM (Xiaomi Redmi Pad 2)',
    image: { uri: '/pre.png', sizeMultiplier: 0.7, offsetY: 10 },
    probability: 90,
    backgroundColor: '#FFD700',
    textColor: '#000000',
  },
  {
    option: '1 Giải GOLD (Sony WH-CH520)',
    image: { uri: '/gold.png', sizeMultiplier: 0.7, offsetY: 18 },
    probability: 10,
    backgroundColor: '#FFA500',
    textColor: '#FFFFFF',
  },
  {
    option: '1 Giải SILVER (Logitech M650)',
    image: { uri: '/silver.png', sizeMultiplier: 0.7, offsetY: 8 },
    probability: 0,
    backgroundColor: '#C0C0C0',
    textColor: '#000000',
  },
  {
    option: 'Voucher 500k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/2331/2331941.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
    backgroundColor: '#FF6B6B',
    textColor: '#FFFFFF',
  },
  {
    option: 'Voucher 300k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
    backgroundColor: '#4ECDC4',
    textColor: '#FFFFFF',
  },
  {
    option: 'Voucher 200k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
    backgroundColor: '#45B7D1',
    textColor: '#FFFFFF',
  },
  {
    option: 'GenZ Việt Nam Package',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
    backgroundColor: '#96CEB4',
    textColor: '#000000',
  },
  {
    option: 'Back2School Package',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/3082/3082005.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
    backgroundColor: '#FECA57',
    textColor: '#000000',
  },
];

const data = prizeConfig.map(
  ({ probability, backgroundColor, textColor, ...prize }) => ({
    ...prize,
    style: {
      backgroundColor: backgroundColor,
      textColor: textColor,
    },
  })
);
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
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState<string>('');
  const router = useRouter();

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = selectPrizeByProbability(prizeConfig);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setWonPrize(data[prizeNumber].option);
    setShowResult(true);
  };

  const handleGoHome = () => {
    setShowResult(false);
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#174266] uppercase mb-8 text-center drop-shadow-lg">
        VÒNG QUAY MAY MẮN
      </h1>
      <div className="w-full px-2 sm:px-4 md:px-0">
        <div className=" flex justify-center items-center ">
          <div className="relative flex items-center justify-center">
            <Image
              src={bg}
              alt="bg"
              className="w-full max-w-[520px] min-w-[280px] sm:min-w-[360px] md:min-w-[480px] h-auto"
              priority
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                textColors={['#000000']}
                onStopSpinning={handleStopSpinning}
                fontSize={14}
                outerBorderWidth={0}
                radiusLineWidth={1}
                textDistance={55}
                innerBorderColor="none"
                radiusLineColor="none"
                perpendicularText
              />
            </div>

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

      <div className="max-w-6xl w-full mt-16 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-gray-200 rounded-lg overflow-hidden">
        {topPrizes.map((prize) => (
          <div key={prize.id} className="p-8 flex flex-col items-center">
            <Image src={prize.image} alt={prize.alt} width={80} height={80} />
            <h3 className="text-xl font-bold mt-4">{prize.name}</h3>
            <p className="text-gray-600 text-sm">{prize.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-[#174266] mb-4 text-center">
            Tỉ lệ giải thưởng
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {prizeConfig.map((prize, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-3 border border-gray-200"
              >
                <div className="text-sm font-medium text-gray-800 mb-1">
                  {prize.option}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Tỉ lệ:</span>
                  <span className="text-sm font-bold text-[#174266]">
                    {prize.probability}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-[#174266] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${prize.probability}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-green-600">
              🎉 Chúc mừng bạn!
            </DialogTitle>
            <DialogDescription className="text-center text-lg mt-4">
              Bạn đã nhận được phần quà:
              <br />
              <span className="font-bold text-[#174266] text-xl">
                {wonPrize}
              </span>
              <div>
                Bạn vui lòng chụp lại màn hình kết quả và gửi về Page IZONE -
                IELTS Chiến Lược kèm theo địa chỉ Email đã đăng ký để nhận phần
                quà này nhé! Liên hệ ngay:
                <a href="https://m.me/106253867468828">
                  {' '}
                  https://m.me/106253867468828
                </a>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button onClick={handleGoHome} className="w-full">
              Quay lại trang chủ
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
