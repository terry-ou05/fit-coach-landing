# Fit Coach Tailwind Master Template

This is the reusable master template for fitness coach landing pages.

It uses:

- Vite for local development and production builds
- React for page sections and reusable components
- Tailwind CSS for styling
- lucide-react for icons

## Beginner Workflow

1. Edit coach information in `src/siteData.js`.
2. Only edit `src/App.jsx` when the page structure needs to change.
3. Run the local preview:

```powershell
npm run dev
```

4. Open the local URL shown in the terminal.
5. Check desktop and mobile sizes.
6. Build before publishing:

```powershell
npm run build
```

## Main Files

- `src/siteData.js` - coach name, phone, WeChat, programs, proof points, testimonials
- `src/App.jsx` - page layout and React components
- `src/index.css` - Tailwind import and tiny global base styles
- `vite.config.js` - Vite, React, and Tailwind plugin setup

## Plain English Rule

For a new client, change data first. Touch layout only when data changes are not enough.
