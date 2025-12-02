
# LegoCity Documentation

<div style="float:right">
	<a href="README.vi.md" style="background-color:#0b63ce;color:#ffffff;padding:6px 10px;border-radius:6px;text-decoration:none;font-weight:600">Tiếng Việt</a>
</div>

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)
[![VitePress](https://img.shields.io/badge/VitePress-1.x-646CFF?style=for-the-badge&logo=vite)](https://vitepress.dev/)

Official documentation for **LegoCity** — a Smart City Builder platform for modern, map-based urban dashboards.

🌐 **Live Documentation**: [https://ctu-sematx.github.io/Lego-Doc/](https://ctu-sematx.github.io/Lego-Doc/)

## 📖 About

This repository contains the documentation source files for the LegoCity project. The documentation is built using [VitePress](https://vitepress.dev/) and deployed to GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- npm or pnpm

### Local Development

```bash
# Clone the repository
git clone https://github.com/CTU-SematX/Lego-Doc.git
cd Lego-Doc

# Install dependencies
npm install

# Start development server
npm run docs:dev
```

The documentation will be available at `http://localhost:5173/Lego-Doc/`

### Build for Production

```bash
npm run docs:build
```

### Preview Production Build

```bash
npm run docs:preview
```

## 📁 Project Structure

```
Lego-Doc/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # VitePress configuration
│   ├── public/             # Static assets
│   ├── vi/                 # Vietnamese translations
│   ├── getting-started/    # Getting started guides
│   ├── installation/       # Installation guides
│   ├── user-guide/         # User documentation
│   ├── configuration/      # Configuration guides
│   ├── development/        # Developer documentation
│   ├── ai/                 # AI integration docs
│   ├── deployment/         # Deployment guides
│   ├── reference/          # Reference documentation
│   └── index.md            # Homepage
├── package.json
└── README.md
```

## 🌍 Languages

- **English** (default)
- **Tiếng Việt** (Vietnamese)

## 🤝 Contributing

We welcome contributions to improve the documentation!

1. Fork this repository
2. Create a new branch (`git checkout -b feature/improve-docs`)
3. Make your changes
4. Commit your changes (`git commit -m 'Improve documentation'`)
5. Push to the branch (`git push origin feature/improve-docs`)
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and contribution guidelines.

## 📝 License

This documentation is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSES/CC-BY-4.0.txt).

## 🔗 Related Links

- **LegoCity Repository**: [github.com/CTU-SematX/LegoCity](https://github.com/CTU-SematX/LegoCity)
- **Issues**: [GitHub Issues](https://github.com/CTU-SematX/Lego-Doc/issues)
- **Discussions**: [GitHub Discussions](https://github.com/CTU-SematX/LegoCity/discussions)

## 👥 Maintainers

**CTU-SematX Team**

---

Built with ❤️ using [VitePress](https://vitepress.dev/)
