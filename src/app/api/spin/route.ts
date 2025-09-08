import { NextResponse } from 'next/server';
import {
  selectPrizeByProbability,
  PrizeConfig,
} from '../../../config/prize-config';

const prizeConfig: PrizeConfig[] = [
  {
    option: '1 Giải PREMIUM (Xiaomi Redmi Pad 2)',
    image: { uri: '/pre.png', sizeMultiplier: 0.7, offsetY: 10 },
    probability: 90,
  },
  {
    option: '1 Giải GOLD (Sony WH-CH520)',
    image: { uri: '/gold.png', sizeMultiplier: 0.7, offsetY: 18 },
    probability: 10,
  },
  {
    option: '1 Giải SILVER (Logitech M650)',
    image: { uri: '/silver.png', sizeMultiplier: 0.7, offsetY: 8 },
    probability: 0,
  },
  {
    option: 'Voucher 500k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/2331/2331941.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
  },
  {
    option: 'Voucher 300k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
  },
  {
    option: 'Voucher 200k',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
  },
  {
    option: 'GenZ Việt Nam Package',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
  },
  {
    option: 'Back2School Package',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/512/3082/3082005.png',
      sizeMultiplier: 0.65,
      offsetY: 5,
    },
    probability: 0,
  },
];

export async function POST() {
  // Giả lập độ trễ BE (2s)
  await new Promise((r) => setTimeout(r, 2000));

  // Chọn giải thưởng theo tỉ lệ
  const prizeIndex = selectPrizeByProbability(prizeConfig);

  return NextResponse.json({
    prizeIndex,
    prize: prizeConfig[prizeIndex],
  });
}
