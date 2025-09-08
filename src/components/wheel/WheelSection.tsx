'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
const Wheel = dynamic(
  () => import('react-custom-roulette').then((m) => m.Wheel),
  { ssr: false }
);
import bg from '../../../public/outer-rounded.svg';
import startButton from '../../../public/button.png';

interface WheelSectionProps {
  mustSpin: boolean;
  prizeNumber: number;
  data: any[];
  scale?: number;
  onSpin: () => void;
  onStopSpinning: () => void;
}

export default function WheelSection({
  mustSpin,
  prizeNumber,
  data,
  scale = 1,
  onSpin,
  onStopSpinning,
}: WheelSectionProps) {
  return (
    <div className="w-full px-2 sm:px-4 md:px-0 mt-10 flex justify-center">
      <div
        className="relative flex items-center justify-center"
        style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
      >
        <Image
          src={bg}
          alt="bg"
          className="w-full max-w-[600px] min-w-[280px] sm:min-w-[360px] md:min-w-[600px] h-auto"
          priority
        />
        <div className="absolute top-1/2 -rotate-45  left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Wheel
            pointerProps={{
              src: '/pointer.png',
              style: {
                top: '-1px',
                right: '14px',
                scale: 1.2,
                transform: 'rotate(45deg)',
              },
            }}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            textColors={['#000000']}
            onStopSpinning={onStopSpinning}
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
          onClick={onSpin}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 sm:w-16 md:w-24 object-cover cursor-pointer hover:scale-105 transition duration-200"
        />
      </div>
    </div>
  );
}
