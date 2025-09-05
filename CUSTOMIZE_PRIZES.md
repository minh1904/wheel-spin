# Hướng dẫn tùy chỉnh tỉ lệ giải thưởng

## Cách tùy chỉnh tỉ lệ

Để tùy chỉnh tỉ lệ giải thưởng, bạn chỉ cần chỉnh sửa file `src/config/prize-config.ts`:

### 1. Thay đổi tỉ lệ phần trăm

```typescript
export const PRIZE_CONFIG: PrizeConfig[] = [
  {
    image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
    name: 'Giải Nhất',
    value: 'iPhone 15 Pro',
    probability: 5, // 5% cơ hội thắng
  },
  {
    image: 'https://i.ibb.co/T1M05LR/good-2.png',
    name: 'Giải Nhì',
    value: 'iPad Air',
    probability: 10, // 10% cơ hội thắng
  },
  // ... các giải khác
];
```

### 2. Thêm giải thưởng mới

```typescript
{
  image: 'https://example.com/new-prize.png',
  name: 'Giải Đặc Biệt',
  value: 'MacBook Pro',
  probability: 2, // 2% cơ hội thắng
}
```

### 3. Xóa giải thưởng

Chỉ cần xóa object tương ứng khỏi mảng `PRIZE_CONFIG`.

## Lưu ý quan trọng

⚠️ **Tổng tỉ lệ phải bằng 100%**

Ví dụ:

- ✅ `[5, 10, 15, 25, 45]` = 100%
- ❌ `[5, 10, 15, 25, 40]` = 95% (thiếu 5%)
- ❌ `[5, 10, 15, 25, 50]` = 105% (thừa 5%)

## Các ví dụ tỉ lệ phổ biến

### Tỉ lệ cân bằng (mỗi giải 20%)

```typescript
probability: 20, // cho tất cả 5 giải
```

### Tỉ lệ giảm dần (giải cao ít, giải thấp nhiều)

```typescript
[5, 10, 15, 25, 45]; // Giải nhất 5%, giải may mắn 45%
```

### Tỉ lệ tăng dần (giải cao nhiều, giải thấp ít)

```typescript
[45, 25, 15, 10, 5]; // Giải nhất 45%, giải may mắn 5%
```

### Tỉ lệ đặc biệt (chỉ có 1-2 giải chính)

```typescript
[80, 20, 0, 0, 0]; // Chỉ có 2 giải, giải nhất 80%
```

## Kiểm tra tỉ lệ

Hệ thống sẽ tự động kiểm tra và báo lỗi nếu tổng tỉ lệ không bằng 100%. Bạn sẽ thấy thông báo lỗi trong console của trình duyệt.

## Thay đổi hình ảnh

Để thay đổi hình ảnh giải thưởng, chỉ cần thay đổi URL trong trường `image`:

```typescript
{
  image: 'https://your-new-image-url.com/prize.png',
  name: 'Giải Mới',
  value: 'Phần thưởng mới',
  probability: 15,
}
```

## Thay đổi tên và giá trị giải thưởng

```typescript
{
  image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
  name: 'Giải Vàng', // Tên hiển thị
  value: 'Xe máy Honda', // Mô tả giải thưởng
  probability: 10,
}
```

## Tùy chỉnh tốc độ quay

### Các chế độ tốc độ có sẵn:

1. **🎲 Ngẫu nhiên**: Tốc độ và thời gian hoàn toàn ngẫu nhiên
2. **🐌 Chậm**: 150-250 vòng/phút, 5-8 giây
3. **⚡ Trung bình**: 300-500 vòng/phút, 3-5 giây
4. **🚀 Nhanh**: 600-800 vòng/phút, 2-4 giây

### Tùy chỉnh cấu hình tốc độ

Để thay đổi cấu hình tốc độ, chỉnh sửa trong file `src/config/prize-config.ts`:

```typescript
export const SPIN_CONFIG: SpinConfig = {
  minSpeed: 200, // Tốc độ tối thiểu (vòng/phút)
  maxSpeed: 800, // Tốc độ tối đa (vòng/phút)
  minDuration: 3, // Thời gian quay tối thiểu (giây)
  maxDuration: 8, // Thời gian quay tối đa (giây)
};
```

### Ví dụ cấu hình tốc độ khác:

**Tốc độ chậm hơn:**

```typescript
export const SPIN_CONFIG: SpinConfig = {
  minSpeed: 100,
  maxSpeed: 300,
  minDuration: 5,
  maxDuration: 10,
};
```

**Tốc độ nhanh hơn:**

```typescript
export const SPIN_CONFIG: SpinConfig = {
  minSpeed: 500,
  maxSpeed: 1000,
  minDuration: 1,
  maxDuration: 3,
};
```
