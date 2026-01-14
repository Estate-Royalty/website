# Estate Royalty

Property-backed yield through structured vaults. Tokenized real estate income distributed as USD-denominated rental royalties.

## Overview

Estate Royalty enables global real-estate owners to tokenize income-generating properties and distribute USD-denominated rental royalties to investors through structured on-chain vaults.

## Features

- **Structured Vaults**: Senior, Junior, and Reserve tiers with different risk-return profiles
- **Property-Backed**: Real rental income from properties in East Africa and Dubai
- **USD-Denominated**: Monthly royalty distributions in stablecoins
- **Institutional Grade**: Built for long-term, yield-focused investors

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
estate-royalty/
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── page.tsx          # Home page
│   │   ├── vaults/           # Vaults page
│   │   ├── research/         # Research/blog page
│   │   ├── risk-disclosure/  # Risk disclosure
│   │   ├── terms/            # Terms of service
│   │   └── privacy/          # Privacy policy
│   └── components/
│       ├── layout/           # Header, Footer
│       └── sections/         # Page sections
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## Design System

### Colors

- **Charcoal**: `#0a0a0a` - Primary background
- **Estate Green**: `#1a4d3a` - Brand primary
- **Ivory**: `#f5f2eb` - Primary text
- **Gold**: `#c9a227` - Accent for royalties/yield

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: DM Sans (sans-serif)

## License

Proprietary - All rights reserved.
