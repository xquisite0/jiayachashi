# Jia Ya Cha Shi (佳雅茶室)

A modern, mobile-first website for Jia Ya Cha Shi, a traditional Singapore coffee hawker stall specializing in homemade drinks.

## Features

- 🎨 **Traditional Heritage Design** - Warm color palette inspired by Singapore's kopitiam culture
- 📱 **Mobile-First Responsive** - Optimized for viewing on all devices
- 📅 **Dynamic Daily Specials** - Automatically displays today's featured drink based on the day of the week
- 🍵 **Complete Menu** - Showcases both daily specials and regular menu items
- 🗺️ **Location & Hours** - Easy-to-find contact information and visit planning
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for Vercel deployment

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom traditional color scheme
- **Fonts:** Merriweather (serif) and Noto Sans
- **Deployment:** Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files:
   ```bash
   cd jiayachashi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure

```
jiayachashi/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home page
│   ├── menu/                # Menu page
│   ├── about/               # About page
│   └── contact/             # Contact page
├── components/              # Reusable React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer component
│   ├── DrinkCard.tsx        # Drink display card
│   ├── TodaySpecial.tsx     # Dynamic today's special
│   └── DailySchedule.tsx    # Weekly schedule display
├── lib/                     # Utility functions and data
│   └── drinks.ts            # Drink data and helper functions
└── public/                  # Static assets (add drink images here)
```

## Customization Guide

### Adding Drink Images

1. Add your drink images to the `public/drinks/` directory
2. Images should be named to match the image paths in `lib/drinks.ts`:
   - `lemongrass-apple.jpg`
   - `chrysanthemum-luohan.jpg`
   - `pear-fritillary.jpg`
   - `sugarcane-barley.jpg`
   - `ginseng-chrysanthemum.jpg`
   - `winter-melon.jpg`
   - `hawthorn.jpg`
   - `honey-lemon.jpg`
   - `lime-plum.jpg`
   - `lemon-tea.jpg`

### Updating Location Information

Edit [app/contact/page.tsx](app/contact/page.tsx) to add:
- Your actual hawker centre name and stall number
- Complete street address and postal code
- MRT station and bus information
- Google Maps embed (replace the placeholder)

### Modifying Opening Hours

Update the hours in:
- [components/Footer.tsx](components/Footer.tsx)
- [app/contact/page.tsx](app/contact/page.tsx)

### Changing the Menu

Edit [lib/drinks.ts](lib/drinks.ts) to:
- Add, remove, or modify drinks
- Update descriptions and Chinese names
- Change the daily special schedule

### Customizing Colors

The color scheme is defined in [tailwind.config.ts](tailwind.config.ts):
- `kopitiam` - Cream/beige tones for backgrounds
- `kopi` - Coffee brown tones for text and accents
- `jade` - Green tones for highlights and CTAs

## Deployment to Vercel

### Quick Deploy

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [vercel.com](https://vercel.com) and sign up/log in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

No environment variables are required for basic functionality. If you add features like contact forms or analytics, you can add them in the Vercel dashboard under Project Settings → Environment Variables.

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Daily Specials Schedule

The site automatically displays the correct special based on the day:

- **Monday:** Regular menu only
- **Tuesday:** Lemongrass w/ Green Apple Juice
- **Wednesday:** Chrysanthemum w/ Luohan Tea
- **Thursday:** Pear w/ Fritillary Bulb Homemade Drink
- **Friday:** Sugarcane w/ Barley Homemade Drink
- **Saturday/Sunday:** Ginseng w/ Chrysanthemum Tea

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Jia Ya Cha Shi. All rights reserved.

## Support

For issues or questions about the website, please contact your web developer or create an issue in your repository.

---

**Jia Ya Cha Shi (佳雅茶室)** - Serving authentic homemade drinks with traditional recipes.
