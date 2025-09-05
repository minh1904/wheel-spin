'use client';
import { useState } from 'react';

import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css'; // <=== Don't forget to import styles

import {
  PRIZE_CONFIG,
  selectPrizeByProbability,
  validateProbabilities,
  SPIN_CONFIG,
  generateRandomSpinSpeed,
  generateRandomSpinDuration,
} from '../config/prize-config';

interface Prize {
  image: string;
  name: string;
  value: string;
}

// Kiểm tra tỉ lệ có hợp lệ không
if (!validateProbabilities(PRIZE_CONFIG)) {
  console.error('Tổng tỉ lệ giải thưởng phải bằng 100%!');
}

// Chọn giải thưởng dựa trên tỉ lệ
const winPrizeIndex = selectPrizeByProbability(PRIZE_CONFIG);

// Lấy danh sách giải thưởng từ config
const prizes: Prize[] = PRIZE_CONFIG.map(({ image, name, value }) => ({
  image,
  name,
  value,
}));

const reproduceArray = <T,>(array: T[], length: number): T[] => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproduceArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproduceArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : generateId(),
}));

const App = () => {
  const [start, setStart] = useState(false);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [currentSpeed, setCurrentSpeed] = useState<number>(0);
  const [currentDuration, setCurrentDuration] = useState<number>(0);
  const [speedMode, setSpeedMode] = useState<
    'random' | 'slow' | 'medium' | 'fast'
  >('random');
  const [winCount, setWinCount] = useState<number>(0);
  const [currentWinPrizeIndex, setCurrentWinPrizeIndex] =
    useState<number>(winPrizeIndex);

  const prizeIndex = prizes.length * 4 + currentWinPrizeIndex;

  const handleStart = () => {
    let speed: number;
    let duration: number;

    // Tạo giải thưởng mới cho lần quay này
    const newWinPrizeIndex = selectPrizeByProbability(PRIZE_CONFIG);
    setCurrentWinPrizeIndex(newWinPrizeIndex);

    // Chọn tốc độ dựa trên mode
    switch (speedMode) {
      case 'slow':
        speed = 150 + Math.random() * 100; // 150-250 vòng/phút
        duration = 5 + Math.random() * 3; // 5-8 giây
        break;
      case 'medium':
        speed = 300 + Math.random() * 200; // 300-500 vòng/phút
        duration = 3 + Math.random() * 2; // 3-5 giây
        break;
      case 'fast':
        speed = 600 + Math.random() * 200; // 600-800 vòng/phút
        duration = 2 + Math.random() * 2; // 2-4 giây
        break;
      default: // random
        speed = generateRandomSpinSpeed(SPIN_CONFIG);
        duration = generateRandomSpinDuration(SPIN_CONFIG);
    }

    setCurrentSpeed(speed);
    setCurrentDuration(duration);
    setStart((prevState) => !prevState);
    setWonPrize(null); // Reset giải thưởng trước đó
    setWinCount(0); // Reset số win

    console.log(`🎯 Tốc độ quay: ${speed.toFixed(0)} vòng/phút`);
    console.log(`⏱️ Thời gian quay: ${duration.toFixed(1)} giây`);
    console.log(`🎮 Chế độ: ${speedMode}`);
    console.log(`🎁 Giải thưởng sẽ thắng: ${prizes[newWinPrizeIndex].name}`);
  };

  const handlePrizeDefined = () => {
    const selectedPrize = prizes[currentWinPrizeIndex];
    setWonPrize(selectedPrize);
    setWinCount(1); // Tăng số win lên 1
    console.log('🥳 Prize defined! 🥳', selectedPrize);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Vòng Quay May Mắn</h1>

      {/* Hiển thị tỉ lệ giải thưởng */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Tỉ lệ giải thưởng:</h3>
        {PRIZE_CONFIG.map((prize, index) => (
          <div key={index} style={{ margin: '5px 0' }}>
            {prize.name}: {prize.probability}%
          </div>
        ))}
      </div>

      {/* Chọn chế độ tốc độ */}
      <div style={{ marginBottom: '20px' }}>
        <h3>🎮 Chọn chế độ tốc độ:</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { mode: 'random', label: '🎲 Ngẫu nhiên', color: '#9c27b0' },
            { mode: 'slow', label: '🐌 Chậm', color: '#4caf50' },
            { mode: 'medium', label: '⚡ Trung bình', color: '#ff9800' },
            { mode: 'fast', label: '🚀 Nhanh', color: '#f44336' },
          ].map(({ mode, label, color }) => (
            <button
              key={mode}
              onClick={() =>
                setSpeedMode(mode as 'random' | 'slow' | 'medium' | 'fast')
              }
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: speedMode === mode ? color : '#f5f5f5',
                color: speedMode === mode ? 'white' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: speedMode === mode ? 'bold' : 'normal',
                transition: 'all 0.3s ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Hiển thị thông tin tốc độ quay */}
      {currentSpeed > 0 && (
        <div
          style={{
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
            border: '1px solid #2196f3',
          }}
        >
          <h4>🎯 Thông tin lần quay này:</h4>
          <p>
            <strong>Tốc độ:</strong> {currentSpeed.toFixed(0)} vòng/phút
          </p>
          <p>
            <strong>Thời gian:</strong> {currentDuration.toFixed(1)} giây
          </p>
          <p>
            <strong>Chế độ:</strong>{' '}
            {speedMode === 'random'
              ? '🎲 Ngẫu nhiên'
              : speedMode === 'slow'
              ? '🐌 Chậm'
              : speedMode === 'medium'
              ? '⚡ Trung bình'
              : '🚀 Nhanh'}
          </p>
        </div>
      )}

      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        spinningTime={currentDuration}
      />

      <button
        onClick={handleStart}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {start ? 'Đang quay...' : 'Bắt đầu quay'}
      </button>

      {/* Hiển thị số lần thắng */}
      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#fff3cd',
          borderRadius: '8px',
          border: '1px solid #ffeaa7',
        }}
      >
        <h3>🏆 Số lần thắng: {winCount}</h3>
      </div>

      {/* Hiển thị giải thưởng đã thắng */}
      {wonPrize && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            border: '2px solid #28a745',
          }}
        >
          <h2>🎉 Chúc mừng! 🎉</h2>
          <h3>Bạn đã thắng: {wonPrize.name}</h3>
          <p>Giải thưởng: {wonPrize.value}</p>
        </div>
      )}
    </div>
  );
};

export default App;
