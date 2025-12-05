# Slumba London Landing Page 🌈✨

A groovy, Y2K-inspired landing page for Slumba London - Gen Z pajamas with MySpace energy!

## Features

- 🎨 **Y2K Aesthetic**: Bold colors (turquoise, yellow, pink, purple), playful shapes, and bubbly fonts
- ⭐ **Animated Stickers**: Floating emoji stickers with smooth animations
- ✨ **Sparkle Effects**: Background sparkle animations for that magical vibe
- 🎯 **Interactive Elements**: Hover wiggle effects on buttons and icons
- 📱 **Fully Responsive**: Works beautifully on desktop and mobile
- 🎭 **Framer Motion**: Smooth animations throughout the page

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Google Fonts** - Fredoka & Comfortaa for that groovy look

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
slumba/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx         # Root layout with fonts
│   └── globals.css        # Global styles and animations
├── components/
│   ├── Sticker.tsx        # Animated sticker component
│   ├── GroovyButton.tsx   # Gradient button with wiggle effect
│   ├── Sparkle.tsx        # Sparkle animation component
│   └── WavyBorder.tsx     # Wavy border decoration
└── public/                # Static assets
```

## Sections

1. **Hero Section**: Large animated title, floating stickers, and CTA button
2. **About Section**: Brand story in a groovy text bubble with decorative stickers
3. **Product/CTA Section**: Product cards with gradient borders
4. **Community Section**: Animated emoji grid and social links
5. **Footer**: Gradient footer with brand name

## Customization

### Colors
Edit the color variables in `app/globals.css`:
- `--turquoise: #40E0D0`
- `--yellow: #FFD700`
- `--pink: #FF69B4`
- `--purple: #9370DB`

### Fonts
Change fonts in `app/layout.tsx` - currently using Fredoka and Comfortaa for that Y2K vibe.

### Animations
Adjust animation timings in component files or add new animations in `globals.css`.

## Build for Production

```bash
npm run build
npm start
```

## Design Philosophy

This landing page captures the essence of:
- Early 2000s internet culture
- MySpace aesthetic
- Gen Z energy
- Playful, bold, and unapologetically fun

Enjoy the groovy vibes! 🌈💤✨
