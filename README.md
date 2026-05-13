# 🚀 Portfolio – Vincent Bissonnette

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-2088FF?style=flat-square&logo=github-pages)](https://pages.github.com/)

📘 Read this in other languages: [Français](./README.fr.md)

> A modern, responsive portfolio website showcasing my journey as a Computer Science graduate, featuring interactive projects, skills showcase, and professional experience.

## 🌐 Live Demo

👉 **[View Live Portfolio](https://vincentbissonnette99.github.io/portfolio/)**

---

## ✨ Features

### 🎯 **Core Features**
- **🌍 Bilingual Support** - Full French/English internationalization
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast & Modern** - Built with Vite for lightning-fast development
- **🎨 Beautiful Design** - Modern UI with smooth animations and gradients
- **♿ Accessible** - WCAG compliant with proper focus management

### 📋 **Content Sections**
- **🏠 Hero Section** - Eye-catching introduction with call-to-action buttons
- **💼 Projects Showcase** - Interactive project cards with detailed views
- **📄 CV/Resume** - Professional experience and education timeline
- **📞 Contact** - Multiple ways to get in touch
- **🎮 Interactive Elements** - Engaging user interactions

### 🛠️ **Technical Highlights**
- **Component-Based Architecture** - Modular, reusable React components
- **Custom Design System** - Consistent styling with TailwindCSS utilities
- **Hash-Based Routing** - Client-side navigation without page reloads
- **Optimized Performance** - Lazy loading and efficient bundling

---

## 🧑‍💻 About Me

Hi! I'm **Vincent Bissonnette**, a passionate **Computer Science and Software Engineering graduate from UQAM**. My journey in tech is driven by curiosity and a love for creating meaningful digital experiences.

### 🎓 **Background**
- 🎓 **Bachelor's Degree** in Computer Science & Software Engineering (UQAM)
- 💡 **Passionate about**: Application development, system programming, and interactive experiences
- 🌟 **Currently exploring**: Modern web technologies and software architecture

### 🚀 **What You'll Find Here**
- **💼 Professional Experience** - My career journey and achievements
- **🎯 Technical Skills** - Programming languages, frameworks, and tools I master
- **🛠️ Featured Projects** - Showcasing my best work and technical abilities
- **📚 Academic Projects** - University projects demonstrating various skills
- **🎮 Interactive Demo** - A small game I built for fun

---

## 🛠️ Tech Stack

### **Frontend Framework**
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### **Styling & UI**
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### **Development Tools**
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-2088FF?style=for-the-badge&logo=github-pages&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

### **Languages & Technologies Featured**
`JavaScript` `TypeScript` `React` `C++` `C#` `Python` `Java` `SQL` `HTML5` `CSS3` `Unity` `Android` `Node.js`

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VincentBissonnette99/portfolio.git
   cd portfolio/portfolio-react
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
   - Navigate to [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/)
   - The site will automatically reload when you make changes

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
portfolio-react/
├── public/                    # Static assets
│   ├── cv/                   # PDF CV files
│   └── favicon.ico           # Site favicon
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section
│   │   ├── ProjectCard.jsx   # Project showcase cards
│   │   └── LanguageToggle.jsx # Language switcher
│   ├── data/                 # Static data files
│   │   └── projectData.js    # Projects information
│   ├── i18n/                 # Internationalization
│   │   ├── LanguageContext.jsx # Language context provider
│   │   └── translations.js   # Translation strings
│   ├── pages/                # Page components
│   │   ├── Projects.jsx      # Projects listing page
│   │   ├── ProjectDetail.jsx # Individual project details
│   │   ├── CV.jsx            # Resume/CV page
│   │   └── Contact.jsx       # Contact information
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── styles.css            # Global styles & TailwindCSS
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # TailwindCSS configuration
└── README.md                 # This file
```

---

## 🌍 Deployment

### GitHub Pages Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions.

**Manual Deployment:**
```bash
# Build and deploy
npm run deploy
```

**Deployment Configuration:**
- **Repository**: `VincentBissonnette99/portfolio`
- **Branch**: `main`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Custom Domain**: Configured via GitHub Pages settings

---

## 🤝 Contributing

While this is a personal portfolio, I'm open to suggestions and improvements!

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style and component structure
- Test changes locally before submitting
- Ensure responsive design works on all screen sizes
- Maintain accessibility standards

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - feel free to use this project as inspiration for your own portfolio!
```

---

## 📞 Contact & Connect

I'm always interested in new opportunities and collaborations!

### 📧 **Get In Touch**
- **Email**: [vincentbissonnette86@gmail.com](mailto:vincentbissonnette86@gmail.com)
- **LinkedIn**: [Vincent Bissonnette](https://www.linkedin.com/in/vincent-bissonnette)
- **GitHub**: [@VincentBissonnette99](https://github.com/VincentBissonnette99)

### 📍 **Location**
- **City**: Laval, Quebec, Canada
- **Timezone**: EST (UTC-5)

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS framework
- **Vite** for the blazing fast build tool
- **UQAM** for the excellent computer science education
- **Open Source Community** for inspiration and tools

---

## 📈 Future Plans

- [ ] Add more interactive project demos
- [ ] Implement dark mode toggle
- [ ] Add blog section for technical articles
- [ ] Integrate contact form with backend
- [ ] Add project filtering and search
- [ ] Implement PWA features

---

<div align="center">

**⭐ If you like this portfolio, please give it a star!**

Made with ❤️ by Vincent Bissonnette

</div>