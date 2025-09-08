'use client';

import Image from 'next/image';
import Link from 'next/link';
import rewardButton from '../../../public/reward-button.png';
import ruleButton from '../../../public/rule-button.png';

interface ActionButtonsProps {
  onSpin: () => void;
  onRewardClick: () => void;
}

export default function ActionButtons({
  onSpin,
  onRewardClick,
}: ActionButtonsProps) {
  return (
    <>
      <div className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8">
        Bạn còn <span className="font-bold">1 lượt quay</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 sm:mt-8">
        <Image
          src={rewardButton}
          alt="reward button"
          height={600}
          width={600}
          onClick={onRewardClick}
          className="w-48 sm:w-56 md:w-72 object-contain hover:cursor-pointer hover:scale-105 duration-300"
        />
        <Link href="/">
          <Image
            src={ruleButton}
            alt="rule button"
            height={600}
            width={600}
            className="w-48 sm:w-56 md:w-72 object-contain hover:cursor-pointer hover:scale-105 duration-300"
          />
        </Link>
      </div>
    </>
  );
}
