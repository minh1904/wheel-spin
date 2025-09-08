'use client';

import { PrizeConfig } from '@/config/prize-config';

export default function PrizeProbability({
  prizeConfig,
}: {
  prizeConfig: PrizeConfig[];
}) {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 mt-6 sm:mt-10">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#174266] mb-3 sm:mb-4 text-center">
          Tỉ lệ giải thưởng
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {prizeConfig.map((prize, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200"
            >
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800 mb-1">
                {prize.option}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-xs text-gray-600">
                  Tỉ lệ:
                </span>
                <span className="text-[10px] sm:text-sm font-bold text-[#174266]">
                  {prize.probability}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-1 sm:mt-2">
                <div
                  className="bg-[#174266] h-1.5 sm:h-2 rounded-full transition-all duration-300"
                  style={{ width: `${prize.probability}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
