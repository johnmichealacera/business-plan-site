# 🏝️ Isla Paraiso Beach Resort Website

A modern, responsive website for Isla Paraiso Beach Resort - a tropical paradise in the Philippines. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Isla Paraiso Beach Resort](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### 🎨 **Modern Design**
- Tropical color scheme (blue #00AEEF, sand #FBE8A6)
- Clean, responsive layout
- Smooth animations and transitions
- Mobile-first design approach

### 📱 **Responsive Navigation**
- Sticky header with mobile hamburger menu
- Smooth scroll navigation
- Prominent "Book Now" call-to-action
- Social media links in footer

### 🖼️ **Interactive Gallery**
- Image carousel with navigation arrows
- Dot indicators for easy navigation
- Image counter and captions
- Optimized images with Next.js Image component

### 📄 **Complete Pages**
- **Home** - Hero section, gallery carousel, testimonials
- **About** - Resort story with images
- **Amenities** - Grid of resort features
- **Gallery** - Full-screen image carousel
- **Contact** - Contact form with API integration

### ⚡ **Performance & SEO**
- Next.js App Router for optimal performance
- SEO metadata for all pages
- Optimized images and fonts
- Fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.11
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/isla-paraiso-resort.git
   cd isla-paraiso-resort
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images**
   Replace the placeholder images in the `public/` folder:
   - `beach-hero.jpg` - Hero background image
   - `gallery1.jpg` to `gallery6.jpg` - Gallery images
   - `about1.jpg`, `about2.jpg` - About page images

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
isla-paraiso-resort/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── amenities/page.tsx # Amenities page
│   │   ├── gallery/page.tsx   # Gallery page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── api/contact/       # Contact form API
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable components
│       ├── Header.tsx         # Navigation header
│       ├── Footer.tsx         # Footer component
│       ├── Hero.tsx           # Hero section
│       ├── GalleryCarousel.tsx # Image carousel
│       ├── AmenitiesList.tsx  # Amenities grid
│       └── Testimonials.tsx   # Customer reviews
├── public/                    # Static assets
│   ├── beach-hero.jpg         # Hero background
│   ├── gallery1.jpg - gallery6.jpg # Gallery images
│   └── about1.jpg, about2.jpg # About page images
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

## 🎨 Customization

### Colors
The tropical color scheme is defined in `src/app/globals.css`:
```css
@theme {
  --color-tropical-blue: #00AEEF;
  --color-tropical-sand: #FBE8A6;
}
```

### Content
- Update resort information in `src/components/` files
- Modify testimonials in `src/components/Testimonials.tsx`
- Change amenities in `src/components/AmenitiesList.tsx`

### Images
- Replace images in `public/` folder
- Update image paths in components
- Optimize images for web (recommended: 1200px width)

## 📧 Contact Form

The contact form sends data to `/api/contact` which currently logs to console. To implement email functionality:

1. Add email service (SendGrid, Resend, etc.)
2. Update `src/app/api/contact/route.ts`
3. Add environment variables for API keys

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- All the beautiful beach images (replace with your own)

---

**Isla Paraiso Beach Resort** - Your Island Escape Awaits! 🏖️

*Built with ❤️ for tropical paradise lovers*
