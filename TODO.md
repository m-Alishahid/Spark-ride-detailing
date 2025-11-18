# Spark Ride Theme Transformation TODO

## 1. Update globals.css
- Change CSS variables to Spark Ride colors: Primary #10B5DB, Secondary #3B82F6, Neutrals #F8FAFC to #1E293B, Accents #EF4444
- Add font imports: Poppins for headings, Inter for body
- Update animations if needed for Framer Motion integration

## 2. Update page.tsx
- Change metadata to Spark Ride: title, description, keywords, canonical URL, Open Graph, Twitter

## 3. Update Index.tsx
- Change any hardcoded content to Spark Ride if needed

## 4. Update Navbar.tsx
- Change logo path to spark-ride-logo.svg
- Update colors to use new palette
- Add Framer Motion for mobile drawer slide-out
- Ensure fixed h-20 with py-4, justify-between
- Add smooth transitions, hover/scale animations
- Accessibility: ARIA labels, keyboard navigation

## 5. Update HeroSection.tsx
- Change background to hero-bg.png with parallax
- Update text: gradient headings, large sizes text-5xl md:text-8xl
- Buttons: gradient bg from-primary to-blue-500, shadows shadow-2xl, hover effects
- Overlay: bg-black/40 for better contrast
- Add Framer Motion for fadeInUp page transitions
- Standardize container

## 6. Update AboutSection.tsx
- Update content to Spark Ride
- Add glassmorphism effects
- Framer Motion hover effects
- Standardize layout: py-16, gap-8

## 7. Update ServicesSection.tsx
- Card layout: aspect-[4/3], p-8, consistent padding
- Grid: grid-cols-1 md:grid-cols-2 xl:grid-cols-3 with gap-6/8
- Typography: text-xl font-semibold, text-gray-600
- Framer Motion: whileHover={{ scale: 1.05, y: -10 }}
- Add icons, badges, border-l-4 border-primary

## 8. Update GallerySection.tsx
- Update images to Spark Ride assets
- Add Framer Motion hover effects
- Standardize grid and spacing

## 9. Update ContactSection.tsx
- Update colors and layout
- Add Framer Motion animations
- Standardize container

## 10. Update Footer.tsx
- Responsive grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Center headings, left-align content, mobile text-center
- Spacing: py-12, space-y-4
- Add newsletter signup if needed
- Larger social icons w-6 h-6
- Background gradient

## 11. Update DiscountModal.tsx
- Update colors to match theme

## 12. Replace image paths
- Update all image imports to Spark Ride assets (hero-bg.png, spark-ride-logo.svg, etc.)

## 13. Test and verify
- Run dev server
- Check responsiveness
- Verify animations
- Ensure no broken links or missing assets
