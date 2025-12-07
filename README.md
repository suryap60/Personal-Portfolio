# Surya P - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Sections Include**:
  - Hero section with introduction
  - About section with skills highlights
  - Professional experience timeline
  - Featured projects showcase
  - Technical skills with progress bars
  - Education and certifications
  - Contact form with social links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: React Icons
- **Animations**: GSAP

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with all sections
│   └── globals.css      # Global styles and theme
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Navigation bar
│   │   └── Footer.tsx   # Footer component
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       ├── EducationSection.tsx
│       └── ContactSection.tsx
```

## Customization

Update the content in each section component to match your personal information:
- Contact details in `ContactSection.tsx`
- Projects in `ProjectsSection.tsx`
- Experience in `ExperienceSection.tsx`
- Skills in `SkillsSection.tsx`
- Education in `EducationSection.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily on Vercel, Netlify, or any platform that supports Next.js.

## License

MIT License - feel free to use this template for your own portfolio!
