# Tushar Tibude - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS showcasing my professional experience as a Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with light mode theme
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with Next.js 15 and modern web technologies
- **SEO Optimized**: Proper metadata, Open Graph tags, and structured data
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Smooth Animations**: Subtle animations and transitions for better UX
- **Dynamic Resume**: Generate and download PDF resume with your portfolio data
- **PDF Generation**: Two PDF generation methods - HTML-to-PDF and React PDF

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (Google Fonts)
- **PDF Generation**: jsPDF, html2canvas, @react-pdf/renderer
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
TT-portfolio/
├── app/
│   ├── components/
│   │   └── ResumePDF.tsx    # PDF generation component
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage with hero, about, skills, projects
│   ├── projects/
│   │   └── page.tsx         # Detailed projects page
│   └── resume/
│       └── page.tsx         # Resume page with PDF generation
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TT-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Homepage** (`app/page.tsx`):
   - Update name, title, and description
   - Modify skills and technologies
   - Update featured projects
   - Change contact information

2. **Projects Page** (`app/projects/page.tsx`):
   - Add/remove projects from the `projects` array
   - Update project details, responsibilities, and tech stacks

3. **Layout** (`app/layout.tsx`):
   - Update metadata (title, description, keywords)
   - Change Open Graph and Twitter card information
   - Update canonical URL

### Styling

- **Colors**: Modify the color scheme in `app/globals.css`
- **Typography**: Update font choices in `app/layout.tsx`
- **Layout**: Adjust spacing and layout in individual page components

### Content

- **About Section**: Update the about text in `app/page.tsx`
- **Skills**: Modify the skills grid in the skills section
- **Projects**: Add your own projects with detailed descriptions
- **Resume**: Update resume data in `app/resume/page.tsx`
- **Contact**: Update email and social media links

## 🎨 Design Features

### Color Scheme
- Primary: Blue (#3b82f6)
- Secondary: Slate grays
- Accent: Purple, Green, Orange for project cards

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Navigation**: Fixed header with smooth scrolling
- **Hero Section**: Large typography with call-to-action buttons
- **Skills Grid**: Organized by category with color-coded indicators
- **Project Cards**: Gradient backgrounds with tech stack tags
- **Contact Section**: Professional contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal with Next.js optimizations
- **Loading Speed**: Fast initial load with optimized images

## 🔍 SEO Features

- **Meta Tags**: Complete meta information for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus States**: Visible focus indicators
- **Alt Text**: Descriptive alt text for images

## 🚀 Future Enhancements

- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Dark mode toggle
- [ ] Project filtering by technology
- [ ] Testimonials section
- [ ] Analytics integration
- [ ] Resume template customization
- [ ] Multiple resume formats

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: tushar.tibude@example.com
- **GitHub**: [TusharVelotio](https://github.com/TusharVelotio)
- **GitLab**: [tushar.tibude](https://gitlab.com/tushar.tibude)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
