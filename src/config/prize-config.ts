export interface PrizeConfig {
  option: string;
  image: {
    uri: string;
    sizeMultiplier?: number;
    offsetY?: number;
    offsetX?: number;
  };
  backgroundColor?: string;
  probability: number; // Tỉ lệ phần trăm (0-100)
}

// Hàm kiểm tra tổng tỉ lệ có bằng 100% và các giá trị hợp lệ
export const validateProbabilities = (config: PrizeConfig[]): boolean => {
  for (const prize of config) {
    if (prize.probability < 0 || prize.probability > 100) {
      console.error(
        `Tỷ lệ không hợp lệ cho giải thưởng ${prize.option}: ${prize.probability}%`
      );
      return false;
    }
  }
  const total = config.reduce((sum, prize) => sum + prize.probability, 0);
  return total === 100;
};

// Hàm chọn giải thưởng dựa trên tỉ lệ
export const selectPrizeByProbability = (config: PrizeConfig[]): number => {
  if (config.length === 0) {
    throw new Error('Danh sách giải thưởng rỗng');
  }
  const random = Math.random() * 100;
  let cumulative = 0;

  for (let i = 0; i < config.length; i++) {
    cumulative += config[i].probability;
    if (random <= cumulative) {
      return i;
    }
  }
  return config.length - 1; // Trả về giải thưởng cuối cùng nếu không chọn được
};
