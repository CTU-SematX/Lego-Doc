---
layout: home

hero:
  name: "LegoCity"
  text: "Smart City Builder"
  tagline: A reusable platform for modern, map-based urban dashboards
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: View on GitHub
      link: https://github.com/CTU-SematX/LegoCity

features:
  - icon: 🏙️
    title: FIWARE / NGSI-LD Integration
    details: Standards-based context and entity management for smart city applications
  - icon: 🗺️
    title: Interactive Maps
    details: Mapbox GL JS with configurable layers and styles
  - icon: 📊
    title: Configurable Dashboards
    details: Layouts and blocks managed via PayloadCMS
  - icon: 🔌
    title: Extensible Architecture
    details: Plugins, proxy services, and custom integrations
  - icon: 🤖
    title: Optional AI Helpers
    details: Content assistance in the Payload admin (OpenAI / Anthropic / OpenRouter)
  - icon: 🌍
    title: Multi-tenant Ready
    details: Reusable for different cities and scenarios
---

# LegoCity Documentation

Welcome to **LegoCity** — a Smart City Builder platform for modern, map-based urban dashboards.

## Quick navigation

### 🚀 New to LegoCity?

Start here if you are seeing LegoCity for the first time.

| Section | Description |
|---------|-------------|
| [🚀 Getting started](/getting-started/) | Understand the core concepts and run LegoCity for the first time |
| [⬇️ Installation](/installation/) | Choose an installation method: local, Docker, or development environment |
| [🎓 User guide](/user-guide/) | Learn how to use maps, layers, dashboards, and entities |
| [⚙️ Configuration](/configuration/) | Configure data sources, Mapbox, brokers, APIs, and AI integration |

### 🛠️ For developers

Use these sections if you want to extend or contribute to LegoCity.

| Section | Description |
|---------|-------------|
| [💻 Development guide](/development/) | Set up a dev environment, create blocks, and extend the platform |
| [🤖 AI integration](/ai/overview) | Configure the Payload AI plugin and OpenRouter-based models |
| [☁️ Deployment](/deployment/) | Deploy LegoCity using Docker, AWS, VMs, Cloudflare, or Coolify |
| [📚 Reference](/reference/troubleshooting) | Troubleshooting, API details, and technical reference material |

## Quick start

```bash
# Clone repository
git clone https://github.com/CTU-SematX/LegoCity.git
cd LegoCity/dashboard

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Start development server
pnpm dev
```

**Access at**: [http://localhost:3000](http://localhost:3000)

👉 See the [Quick Start Guide](/getting-started/quickstart) for detailed instructions.

## Architecture Overview

LegoCity uses a three-layer architecture:

1. **Context & Data Layer** - FIWARE/NGSI-LD brokers with standardized city data
2. **Content & UI Layer** - PayloadCMS + Next.js for configurable dashboards
3. **Integration Layer** - API proxies, AI helpers, external services

👉 See the [Architecture Guide](/getting-started/architecture) for detailed diagrams and explanations.

## Community & Support

### Getting Help

- 📖 **Documentation**: You're reading it!
- 💬 **Discussions**: [GitHub Discussions](https://github.com/CTU-SematX/LegoCity/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/CTU-SematX/LegoCity/issues)
- 📧 **Contact**: CTU-SematX Team

### Contributing

We welcome contributions! See:

- [Development Guide](/development/) - How to contribute
- [CONTRIBUTING.md](https://github.com/CTU-SematX/LegoCity/blob/main/CONTRIBUTING.md) - Guidelines
- [CODE_OF_CONDUCT.md](https://github.com/CTU-SematX/LegoCity/blob/main/CODE_OF_CONDUCT.md) - Community standards

### Resources

- **Repository**: [github.com/CTU-SematX/LegoCity](https://github.com/CTU-SematX/LegoCity)
- **Demo**: [Coming soon]
- **License**: Check repository for license details

## What's Next?

::: tip I'm New
**Start Here**:
1. Read [Getting Started](/getting-started/)
2. Follow [Quick Start](/getting-started/quickstart)
3. Explore [User Guide](/user-guide/)
:::

::: info I Want to Use It
**Set Up Your City**:
1. [Install LegoCity](/installation/)
2. [Configure Data Sources](/configuration/data-sources)
3. [Create Dashboard Pages](/user-guide/)
:::

::: info I Want to Build
**Start Developing**:
1. [Development Environment](/installation/development)
2. [Development Guide](/development/)
3. [Create Custom Blocks](/development/blocks)
:::

::: warning I Want to Deploy
**Deploy to Production**:
1. [Deployment Overview](/deployment/)
2. Choose deployment method
3. [Operations Guide](/deployment/operations)
:::

---

**Ready to begin?** Head to the [Getting Started Guide](/getting-started/) →

