# Data Analyst Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed specifically for data analysts to showcase their skills, projects, and expertise.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with data-centric aesthetics
- 🌓 **Dark/Light Mode**: Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Vite for lightning-fast builds
- 🎭 **Smooth Animations**: Powered by Framer Motion and custom CSS animations
- 🔍 **SEO Optimized**: Complete meta tags and Open Graph support
- ♿ **Accessible**: WCAG compliant with semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings
6. Click "Deploy"

Your site will be live in minutes!

## 📂 Project Structure

```
my-portfolio/
├── public/
│   └── cv.pdf              # Your resume (replace with actual file)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation with theme toggle
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── About.tsx       # About section with skills
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills with progress bars
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer component
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/light mode context
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.tsx            # Entry point
├── index.html              # HTML template with SEO tags
├── tailwind.config.js      # Tailwind configuration
├── vercel.json             # Vercel deployment config
└── package.json
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero Section** (`src/components/Hero.tsx`):
- Change the headline and description
- Update stats (years of experience, projects, etc.)

**About Section** (`src/components/About.tsx`):
- Replace the emoji with your profile image
- Update the introduction text
- Modify skills if needed

**Projects Section** (`src/components/Projects.tsx`):
- Replace placeholder projects with your actual projects
- Update titles, descriptions, tools, and links
- Add project screenshots/thumbnails

**Contact Section** (`src/components/Contact.tsx`):
- Update social media links (LinkedIn, GitHub, Email)
- Configure form submission (currently simulated)

**Footer** (`src/components/Footer.tsx`):
- Update copyright information
- Modify social links

### 2. Resume/CV

Replace `public/cv.pdf` with your actual resume file.

### 3. SEO & Meta Tags

Update `index.html`:
- Change the title and description
- Update Open Graph and Twitter card meta tags
- Replace placeholder URLs with your actual domain

### 4. Colors & Branding

Modify `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { /* Your primary color palette */ },
  accent: { /* Your accent color palette */ },
}
```

### 5. Form Integration

To connect the contact form to a real backend:

1. **Using Formspree**:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

2. **Using EmailJS**:
```bash
npm install @emailjs/browser
```

3. **Using your own API**:
Update the `handleSubmit` function in `Contact.tsx`

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📱 Sections

1. **Hero**: Eye-catching introduction with animated background
2. **About**: Professional bio with skills showcase
3. **Projects**: Portfolio of data analysis projects
4. **Skills**: Categorized technical skills with proficiency levels
5. **Contact**: Contact form and social media links

## 🎯 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Optimized bundle size
- 🖼️ Lazy loading for images
- 🎨 CSS optimization with Tailwind

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from modern data dashboards
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ and React
