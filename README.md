# GlutenFree Substitutions

A privacy-first web application that helps users convert regular recipes to gluten-free versions with accurate ingredient substitutions.

## Features

- **Instant Recipe Conversion**: Convert any recipe to gluten-free in seconds
- **Privacy-First**: No user data collection, no registration required
- **Accurate Substitutions**: Tested ingredient alternatives with proper ratios
- **Mobile-Optimized**: Responsive design for all devices
- **Free Forever**: No hidden costs or premium features

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Context API
- **Routing**: React Router
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/gluten-free-substitutions.git
cd gluten-free-substitutions
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── recipe/         # Recipe-specific components
│   └── layout/         # Layout components
├── pages/              # Page components
├── contexts/           # React Context providers
├── services/           # Business logic services
├── data/               # Static data files
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles
```

## Key Components

- **RecipeInput**: Text area for recipe input with validation
- **AnalysisResults**: Displays conversion results and substitutions
- **SubstitutionCard**: Shows individual ingredient substitutions
- **IngredientDatabase**: Searchable database of gluten-free alternatives

## Data Structure

The application uses JSON files for ingredient data:

- `ingredients.json`: Gluten-containing ingredients and their substitutions
- `cookingTips.json`: Gluten-free cooking tips and techniques

## Privacy & Security

- **No Data Collection**: All processing happens client-side
- **Local Storage Only**: Recipe history stored in browser
- **No Tracking**: No analytics or user tracking
- **HTTPS Only**: Secure connections enforced

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Medical Disclaimer

This tool is for informational purposes only and is not intended as medical advice. Always consult with your healthcare provider before making significant dietary changes.

## Support

For support, please open an issue on GitHub or contact us at [email protected].

---

Made with ❤️ for the gluten-free community.# Deployment Trigger - Fri Oct 24 18:18:49 CEST 2025
