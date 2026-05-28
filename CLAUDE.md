# FIT COACH Landing Page — Project Guide

## Project Overview

Static landing page for **Coach Leo**, a personal fitness coach based in Guangzhou, China. The site targets Chinese-speaking clients seeking 1-on-1 fitness coaching for fat loss, muscle gain, and posture improvement.

**Live stack:** Plain HTML + CSS + Vanilla JS. No build tools, no frameworks, no dependencies.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | All page structure and content |
| `style.css` | All styles — dark theme, responsive layout, animations |
| `script.js` | Mobile nav, FAQ accordion, scroll reveal, form demo |

---

## Brand & Design Tokens

These CSS variables in `:root` define the entire visual language — always use them instead of hard-coding values:

```css
--color-bg: #070707          /* Page background */
--color-surface: #111111     /* Card / form backgrounds */
--color-surface-2: #181818   /* Secondary surfaces */
--color-border: rgba(255,255,255,0.12)
--color-text: #f7f7f2        /* Primary text */
--color-muted: #a9a9a1       /* Secondary / descriptive text */
--color-accent: #e3272f      /* Brand red — CTAs, highlights */
--color-accent-dark: #a9151c /* Hover state for accent */
--radius: 8px
--container: 1160px
```

**Typography:** Inter (system fallback stack). Chinese body copy uses `--color-muted`; headings and labels use `--color-text`.

---

## Content Language

- **Section labels / eyebrows / nav:** English (e.g. "Services", "Results", "About")
- **Headings and body copy:** Chinese (Simplified)
- **CTAs:** Chinese (e.g. "立即预约咨询", "选择方案")
- **Coach credentials / plan kickers:** English (e.g. "ACE Certified", "12-Week Start")

Keep this bilingual pattern consistent when adding or editing copy.

---

## Coach Details (Placeholder — replace with real info)

| Field | Current placeholder |
|---|---|
| WeChat ID | `ock20050826` |
| Phone | `138-1234-5678` |
| Location | 广州市天河区 |
| Credentials | ACE Certified, 5+ Years, 300+ Transformations |

---

## Component Patterns

### Buttons
```html
<a class="btn btn-accent" href="#contact">Primary CTA</a>
<a class="btn btn-ghost" href="#services">Secondary</a>
<a class="btn btn-small btn-accent" href="#contact">Nav CTA</a>
```

### Section structure
```html
<section class="section" id="section-id">
  <div class="container">
    <div class="section-heading reveal">
      <p class="eyebrow">English Label</p>
      <h2>中文标题</h2>
      <p>中文副标题说明文字。</p>
    </div>
    <!-- content -->
  </div>
</section>
```

### Reveal animation
Add `class="reveal"` to any element that should fade-in on scroll. The IntersectionObserver in `script.js` handles it automatically.

### Muted sections
Add `section-muted` alongside `section` for the subtle banded background variant.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 980px` | Full desktop layout, multi-column grids |
| `≤ 980px` | Single-column hero/about/contact, 2-col cards |
| `≤ 760px` | Mobile nav drawer, all grids collapse to 1 col |

---

## Placeholder Elements to Replace

These are intentional stubs — swap them out when real assets are available:

- **`.gym-visual` / `.silhouette`** — CSS-generated coach silhouette. Replace the `div` with an `<img>` tag pointing to a real photo.
- **`.qr-placeholder`** — WeChat QR code box. Replace with `<img src="wechat-qr.png" alt="WeChat QR">` inside `.wechat-cta`.
- **`.image-placeholder.small` BEFORE/AFTER** — Client transformation photos. Replace both divs with real `<img>` elements.

---

## Form Integration

The consultation form is currently static (demo only). The `script.js` intercepts submit and shows "已记录" feedback.

To go live, pick one of these options and update `index.html`:

**Option A — FormSubmit (zero backend):**
```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```

**Option B — Web3Forms:**
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_KEY">
```

Remove the `form-note` paragraph and the `event.preventDefault()` block in `script.js` once a real endpoint is wired up.

---

## Deployment

No build step needed. Deploy as-is:

- **GitHub Pages:** push to repo → Settings → Pages → select branch/root
- **Netlify / Vercel:** drag-and-drop the folder
- **Local preview:** `python -m http.server 8000` then open `http://localhost:8000`

---

## What NOT to change

- Do not introduce JS frameworks or bundlers — the whole point is zero-dependency simplicity.
- Do not break the `reveal` class pattern — it is load-bearing for scroll animations.
- Do not hard-code color hex values in new CSS rules — always reference the CSS custom properties.
- Do not add `localStorage` — there is no state that needs to persist across visits on this page.
