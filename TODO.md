# Fix Image Import Issues in Next.js Project

## Tasks
- [ ] Update src/pages/Gallery.tsx: Replace incorrect image paths in galleryImages array with correct paths from public/pictures/, ensuring they match categories (exterior, interior, ceramic, window-tint).
- [ ] Update src/pages/Service.tsx: Remove image import statements and replace with direct paths in src attributes.
- [ ] Verify all images are in public/pictures/ and paths are correct.
- [ ] Test the gallery page to ensure images display properly.
- [ ] Test Service.tsx for any image display issues.

## Notes
- Use Next.js Image component with proper width/height.
- Direct paths should start with '/pictures/filename.ext'.
- Match image titles to relevant existing images in public/pictures/.
