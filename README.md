# Valentine Week Letters Website 💕

A beautiful, mobile-first Valentine's Day letters website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

✨ **Mobile-First Design** - Optimized for touch interactions and mobile viewing
🎨 **Glassmorphism UI** - Premium frosted-glass aesthetic
💌 **8 Valentine Days** - Rose Day through Valentine's Day with dedicated letters
🎵 **Background Music** - Romantic ambient music (placeholder included)
✍️ **Handwritten Letters** - Elegant Dancing Script font for emotional reading
🖼️ **Animated Background** - Floating photo grid with gentle animations
🌊 **Smooth Animations** - Powered by Framer Motion
🎭 **Watermark Support** - Low-opacity image overlays in letters

## Setup Instructions

### 1. Add Your Couple Photos

Replace the placeholder photo grid with your actual couple photos:

- Open `/app/app/page.js`
- Find the background photo grid section (around line 187)
- Replace the placeholder divs with actual images:

```jsx
<img 
  src="/photos/photo1.jpg" 
  alt="" 
  className="w-full h-full object-cover"
/>
```

- Place your photos in `/app/public/photos/` directory
- Recommended: 12 photos for the grid

### 2. Add Background Music

- Place your music file in `/app/public/` directory
- Name it `placeholder-music.mp3` or update the path in `page.js` (line 118)
- Recommended format: MP3
- Music will auto-play when user clicks "Tap to Begin"

### 3. Add Watermark Images

For the cute watermark in letters:

- Place watermark images in `/app/public/watermarks/` directory
- Update the watermark section in each letter modal (around line 414):

```jsx
<img 
  src="/watermarks/cute-couple.png" 
  alt="" 
  className="w-64 h-64 object-contain opacity-20"
/>
```

### 4. Customize Letter Content

Edit the `letterContent` object in `/app/app/page.js` (starting line 29) to personalize each day's letter.

### 5. Run the Application

```bash
cd /app
yarn install
sudo supervisorctl restart nextjs
```

Visit `http://localhost:3000` to view your website!

## Color Scheme

- **Base**: Deep burgundy/wine (rose-950)
- **Accents**: Soft pink and purple
- **Highlights**: Rose-gold
- **Text**: Warm cream/off-white

## Typography

- **UI Font**: Inter (modern sans-serif)
- **Letter Font**: Dancing Script (elegant handwritten)

## File Structure

```
/app
├── app/
│   ├── page.js          # Main page component
│   ├── layout.js        # Root layout with fonts
│   └── globals.css      # Global styles
├── public/
│   ├── photos/          # Your couple photos (create this)
│   ├── watermarks/      # Watermark images (create this)
│   └── placeholder-music.mp3  # Background music
└── README.md
```

## Mobile Optimization

- Large tap targets (min 48x48px)
- Thumb-friendly spacing
- Full-screen modals on mobile
- Smooth touch interactions
- Optimized for portrait orientation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Tips for Best Experience

1. Use high-quality photos (but optimize file size)
2. Choose romantic, slow-tempo music
3. Test on actual mobile devices
4. Personalize the letter content
5. Consider the reading time for each letter

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ for Valentine's Week
