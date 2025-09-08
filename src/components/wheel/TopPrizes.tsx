'use client';

import Image, { StaticImageData } from 'next/image';

interface TopPrize {
  id: number;
  name: string;
  image: string | StaticImageData;
  alt: string;
  description: string;
}

export default function TopPrizes({ topPrizes }: { topPrizes: TopPrize[] }) {
  return (
    <div className="max-w-6xl w-full mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-gray-200 overflow-hidden rounded-2xl">
      {topPrizes.map((prize) => (
        <div key={prize.id} className="flex flex-col items-center">
          <div className="w-full flex flex-col items-center justify-center py-4 sm:py-6 bg-gradient-to-r from-[#AA000A] to-[#DA202B]">
            <Image
              src={prize.image}
              alt={prize.alt}
              width={100}
              height={100}
              className="w-16 sm:w-20 md:w-24 h-auto"
            />
          </div>
          <div className="w-full bg-[#E5E5E5] text-center px-3 sm:px-4 py-4 sm:py-6">
            <h3 className="text-lg sm:text-xl md:text-2xl text-[#8E0000] font-bold mb-2">
              {prize.name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              {prize.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
