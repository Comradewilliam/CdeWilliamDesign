# CDE William Design

A modern React application built with Vite, TypeScript, and TailwindCSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [https://github.com/Comradewilliam/CdeWilliamDesign]

# Install dependencies
npm install

# Create .env file and configure environment variables
cp .env.example .env
```

### Development
```bash
# Start development server
npm run dev
```

### Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- React Hook Form (for form handling)
- Zod (for validation)
- React Helmet (for SEO)

## 📁 Project Structure
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── utils/         # Utility functions
├── services/      # API services
├── types/         # TypeScript types
└── App.tsx        # Root component
```

## 🔒 Environment Variables
Required environment variables:
- `VITE_BEEM_API_KEY` - Beem Africa API Key
- `VITE_BEEM_SECRET_KEY` - Beem Africa Secret Key
- `VITE_EMAIL_SERVICE_KEY` - Email Service API Key

## 📧 Contact Form
The contact form supports:
- Email notifications
- SMS notifications via Beem Africa
- Form validation
- Error handling

## 🎯 Features
- Responsive design
- SEO optimization
- Form handling with validation
- Error boundaries
- Environment configuration
- Email and SMS notifications

## 📝 License
[Your License] 