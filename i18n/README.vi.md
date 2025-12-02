# Tài liệu LegoCity

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)
[![VitePress](https://img.shields.io/badge/VitePress-1.x-646CFF?style=for-the-badge&logo=vite)](https://vitepress.dev/)

Tài liệu chính thức cho **LegoCity** — nền tảng Smart City Builder cho các dashboard đô thị hiện đại, dựa trên bản đồ.

🌐 **Tài liệu trực tuyến**: [https://ctu-sematx.github.io/Lego-Doc/](https://ctu-sematx.github.io/Lego-Doc/)

## 📖 Giới thiệu

Repository này chứa các file nguồn tài liệu cho dự án LegoCity. Tài liệu được xây dựng bằng [VitePress](https://vitepress.dev/) và triển khai lên GitHub Pages.

## 🚀 Bắt đầu nhanh

### Yêu cầu

- [Node.js](https://nodejs.org/) 18.x hoặc mới hơn
- npm hoặc pnpm

### Phát triển cục bộ

```bash
# Clone repository
git clone https://github.com/CTU-SematX/Lego-Doc.git
cd Lego-Doc

# Cài đặt dependencies
npm install

# Khởi động server phát triển
npm run docs:dev
```

Tài liệu sẽ có sẵn tại `http://localhost:5173/Lego-Doc/`

### Build cho Production

```bash
npm run docs:build
```

### Xem trước bản Production

```bash
npm run docs:preview
```

## 📁 Cấu trúc dự án

```
Lego-Doc/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # Cấu hình VitePress
│   ├── public/             # Tài nguyên tĩnh
│   ├── vi/                 # Bản dịch tiếng Việt
│   ├── getting-started/    # Hướng dẫn bắt đầu
│   ├── installation/       # Hướng dẫn cài đặt
│   ├── user-guide/         # Tài liệu người dùng
│   ├── configuration/      # Hướng dẫn cấu hình
│   ├── development/        # Tài liệu phát triển
│   ├── ai/                 # Tài liệu tích hợp AI
│   ├── deployment/         # Hướng dẫn triển khai
│   ├── reference/          # Tài liệu tham khảo
│   └── index.md            # Trang chủ
├── package.json
└── README.md
```

## 🌍 Ngôn ngữ

- **English** (mặc định)
- **Tiếng Việt**

## 🤝 Đóng góp

Chúng tôi hoan nghênh các đóng góp để cải thiện tài liệu!

1. Fork repository này
2. Tạo branch mới (`git checkout -b feature/improve-docs`)
3. Thực hiện các thay đổi
4. Commit các thay đổi (`git commit -m 'Cải thiện tài liệu'`)
5. Push lên branch (`git push origin feature/improve-docs`)
6. Mở Pull Request

Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết chi tiết về quy tắc ứng xử và hướng dẫn đóng góp.

## 📝 Giấy phép

Tài liệu này được cấp phép theo [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSES/CC-BY-4.0.txt).

## 🔗 Liên kết liên quan

- **Repository LegoCity**: [github.com/CTU-SematX/LegoCity](https://github.com/CTU-SematX/LegoCity)
- **Issues**: [GitHub Issues](https://github.com/CTU-SematX/Lego-Doc/issues)
- **Thảo luận**: [GitHub Discussions](https://github.com/CTU-SematX/LegoCity/discussions)

## 👥 Người duy trì

**CTU-SematX Team**

---

Được xây dựng với ❤️ sử dụng [VitePress](https://vitepress.dev/)
