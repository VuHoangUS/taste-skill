#!/usr/bin/env node
// Bản fork dùng cho dự án Nhật ký vết thương (bệnh viện): đã TẮT việc tải ảnh từ
// Internet. Ảnh y khoa/dữ liệu bệnh nhân không được đi qua bất kỳ dịch vụ ngoài nào,
// và app không dùng ảnh minh họa tìm ngoài. Bản gốc: github.com/Leonxlnx/taste-skill
console.error(
  'assets.mjs đã bị tắt trong bản fork này (không tải ảnh từ Internet). ' +
    'Dùng ảnh/biểu tượng có sẵn của dự án, hoặc vẽ SVG, rồi ghi rõ trong báo cáo.',
);
process.exit(1);
