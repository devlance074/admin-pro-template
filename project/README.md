# Admin Pro - Ultramodern Admin Dashboard Template

A beautiful, fully-featured admin dashboard template built with React, TypeScript, and Tailwind CSS. Features a modern design with dark/light mode support, responsive layout, and comprehensive user management.

![Admin Pro Dashboard](https://adminnpro.netlify.app/)

## ✨ Features

- **🎨 Modern Design**: Apple-inspired clean and professional interface
- **🌓 Dark/Light Mode**: Seamless theme switching with system preference detection
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🔐 Authentication System**: Built-in login/signup with demo credentials
- **📊 Interactive Charts**: Beautiful data visualization with Recharts
- **👥 User Management**: Complete user administration interface
- **🎯 TypeScript**: Full type safety and better development experience
- **⚡ Fast Performance**: Built with Vite for lightning-fast development
- **🎭 Smooth Animations**: Subtle transitions and micro-interactions
- **🔍 Search & Filters**: Advanced filtering and search capabilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or download this template**
   ```bash
   git clone <https://github.com/devlance074/admin-pro-template.git>
   cd admin-pro-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 Demo Credentials

The template comes with pre-configured demo accounts for testing:

### Administrator Account
- **Email**: `admin@adminpro.com`
- **Password**: `admin123`
- **Role**: Administrator (full access)

### Demo User Account
- **Email**: `demo@adminpro.com`
- **Password**: `demo123`
- **Role**: User (limited access)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── charts/         # Chart components
│   ├── dashboard/      # Dashboard-specific components
│   ├── layout/         # Layout components (Sidebar, Navbar)
│   └── ui/             # Base UI components (Button, Input, etc.)
├── contexts/           # React contexts
│   ├── AuthContext.tsx # Authentication state management
│   └── ThemeContext.tsx # Theme state management
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Analytics.tsx   # Analytics page
│   ├── Users.tsx       # User management
│   ├── Profile.tsx     # User profile
│   ├── Settings.tsx    # Application settings
│   ├── Login.tsx       # Login page
│   └── Signup.tsx      # Registration page
├── utils/              # Utility functions and mock data
└── App.tsx             # Main application component
```

## 🎨 Customization

### Theme Configuration

The template uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    }
  }
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/layout/Sidebar.tsx`

Example:
```tsx
// src/pages/NewPage.tsx
export const NewPage: React.FC = () => {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
};

// Add to App.tsx routes
<Route path="/new-page" element={
  <ProtectedRoute>
    <Layout>
      <NewPage />
    </Layout>
  </ProtectedRoute>
} />
```

### Modifying Authentication

The authentication system is located in `src/contexts/AuthContext.tsx`. To integrate with a real backend:

1. Replace the mock `DEFAULT_USERS` with API calls
2. Update the `login` and `signup` functions
3. Add proper error handling and validation

## 📊 Charts and Data

Charts are built with Recharts. Mock data is provided in `src/utils/mockData.ts`. To use real data:

1. Replace mock data with API calls
2. Update data structures as needed
3. Customize chart configurations in `src/components/charts/`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Connect your repository to Vercel
2. Set framework preset to "Vite"
3. Deploy automatically on push

### Other Platforms
The template generates static files in the `dist` folder after building, making it compatible with any static hosting service.

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 Customization Guide

### Changing Colors
Update the color scheme in `tailwind.config.js` and component files.

### Adding New Components
Follow the existing component structure and use TypeScript interfaces.

### Modifying Layout
The layout system is flexible - modify `src/components/layout/Layout.tsx` for structural changes.

### Database Integration
Replace mock data in `src/utils/mockData.ts` with real API calls.

## 🐛 Troubleshooting

### Common Issues

**Build fails with TypeScript errors**
- Run `npm run lint` to identify issues
- Check for missing type definitions

**Styles not loading**
- Ensure Tailwind CSS is properly configured
- Check `src/index.css` imports

**Authentication not working**
- Verify demo credentials are correct
- Check browser console for errors

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Admin Pro Template

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Images from [Pexels](https://pexels.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation above
- Review the code comments for implementation details

---

**Made with ❤️ by Devlance for the developer community**

*This template is production-ready and can be used for commercial projects under the MIT license.*