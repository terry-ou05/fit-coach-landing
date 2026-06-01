# Workflow

This is the practical workflow for using this as a master template.

## 1. Keep This Folder Clean

Treat this folder as the master copy.

Do not experiment directly on the master when making a client version.

## 2. Create A Client Version

Use Git branches:

```powershell
git checkout main
git checkout -b client/coach-name
```

Or copy the whole folder if you are not ready for branches yet.

## 3. Change The Easy File First

Most client edits should happen in:

```text
src/siteData.js
```

Change coach name, city, WeChat, phone, programs, prices, and testimonials there.

## 4. Preview Locally

```powershell
npm run dev
```

Open the URL shown in the terminal.

Check:

- Desktop layout
- Mobile layout
- Contact details
- WeChat copy button
- Form wording

## 5. Build Before Delivery

```powershell
npm run build
```

If the build passes, the production files are created in:

```text
dist/
```

## 6. Save Your Work

```powershell
git status
git add src/siteData.js src/App.jsx src/index.css README.md WORKFLOW.md
git commit -m "update: customize coach landing page"
```

## Simple Rule

Data first. Layout second. Publish last.
