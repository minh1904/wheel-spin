// Cấu hình giải thưởng và tỉ lệ
export interface PrizeConfig {
  image: string;
  name: string;
  value: string;
  probability: number; // Tỉ lệ phần trăm (0-100)
}

// Tùy chỉnh tỉ lệ và giải thưởng
export const PRIZE_CONFIG: PrizeConfig[] = [
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    name: 'Giải Nhất',
    value: 'iPhone 15 Pro',
    probability: 10, // 10% cơ hội
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    name: 'Giải Nhì',
    value: 'iPad Air',
    probability: 10, // 10% cơ hội
  },
  {
    image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63',
    name: 'Giải Ba',
    value: 'AirPods Pro',
    probability: 30, // 30% cơ hội
  },
  {
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    name: 'Giải Khuyến Khích',
    value: 'Voucher 500k',
    probability: 20, // 20% cơ hội
  },
  {
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    name: 'Giải May Mắn',
    value: 'Sticker',
    probability: 30, // 30% cơ hội
  },
];

// Hàm kiểm tra tổng tỉ lệ có bằng 100% và các giá trị hợp lệ
export const validateProbabilities = (config: PrizeConfig[]): boolean => {
  for (const prize of config) {
    if (prize.probability < 0 || prize.probability > 100) {
      console.error(
        `Tỷ lệ không hợp lệ cho giải thưởng ${prize.name}: ${prize.probability}%`
      );
      return false;
    }
  }
  const total = config.reduce((sum, prize) => sum + prize.probability, 0);
  return total === 100;
};

// Kiểm tra cấu hình giải thưởng ngay khi khởi tạo
if (!validateProbabilities(PRIZE_CONFIG)) {
  throw new Error('Tổng tỷ lệ giải thưởng phải bằng 100%');
}

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

// Cấu hình tốc độ quay
export interface SpinConfig {
  minSpeed: number; // Tốc độ tối thiểu (vòng/phút)
  maxSpeed: number; // Tốc độ tối đa (vòng/phút)
  minDuration: number; // Thời gian quay tối thiểu (giây)
  maxDuration: number; // Thời gian quay tối đa (giây)
}

export const SPIN_CONFIG: SpinConfig = {
  minSpeed: 200, // 200 vòng/phút
  maxSpeed: 800, // 800 vòng/phút
  minDuration: 3, // 3 giây
  maxDuration: 8, // 8 giây
};

// Hàm kiểm tra cấu hình tốc độ quay
export const validateSpinConfig = (config: SpinConfig): boolean => {
  if (config.minSpeed > config.maxSpeed) {
    console.error('minSpeed phải nhỏ hơn hoặc bằng maxSpeed');
    return false;
  }
  if (config.minDuration > config.maxDuration) {
    console.error('minDuration phải nhỏ hơn hoặc bằng maxDuration');
    return false;
  }
  return true;
};

// Kiểm tra cấu hình tốc độ quay ngay khi khởi tạo
if (!validateSpinConfig(SPIN_CONFIG)) {
  throw new Error('Cấu hình tốc độ quay không hợp lệ');
}

// Hàm tạo tốc độ quay ngẫu nhiên
export const generateRandomSpinSpeed = (config: SpinConfig): number => {
  return Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
};

// Hàm tạo thời gian quay ngẫu nhiên
export const generateRandomSpinDuration = (config: SpinConfig): number => {
  return (
    Math.random() * (config.maxDuration - config.minDuration) +
    config.minDuration
  );
};
