# Sai Hemanth Digital Library: Change Guide

## 1. Folder layout (put everything like this)

```
your-website/
├── index.html
├── dashboard.html      (new)
├── pdf-reader.html     (back link changed)
├── tool-lab.html       (back link changed)
├── script.css          (not changed)
├── script.js           (new)
├── images/
│   ├── mbu-logo.png        <- your MBU logo
│   └── image.png       <- your photo
└── pdfs/
    ├── module1.pdf
    ├── module2.pdf
    ├── module3.pdf
    ├── module4.pdf
    └── module5.pdf
```

Open `index.html` in the browser, click Enter Dashboard.

## 2. What YOU must change

| What | Where | Change to |
|------|-------|-----------|
| GitHub link | top of `script.js`, line `const GITHUB_URL` | your real link, e.g. `https://github.com/yourname` |
| MBU logo | file `images/mbu-logo.png` | save your logo with exactly this name |
| Your photo | file `images/image.png` | save your photo with exactly this name (`swayam.png` also works) |
| PDFs | folder `pdfs/` | names must be `module1.pdf` ... `module5.pdf` |

Why the photo was not showing: the browser only shows it if the `images` folder is next to the HTML files and the file name matches exactly (capital letters count). If it is missing, the page shows "SK" instead.

## 3. What I changed

### dashboard.html (rewritten)
- Left sidebar: Home, Modules, Lab Assignments, Tools, AI Model, My Profile, Logout
- MBU logo at the top of the sidebar and on the ID card
- Home: "Explore the world of Data Science" + Modules 5, Lab projects 10, Tools and libraries 12
- ID card with photo, roll no 24102A030164, college, department, year 3rd, semester 5, section 3, academic year 2026–2027, GitHub link, Print button

### script.js (rewritten)
- `MODULES` list is the same 5 modules as before (not changed)
- Sidebar switching between pages
- Modules page: click a module -> opens `pdf-reader.html` with that PDF
- Lab Assignments page: 5 cards -> open `tool-lab.html?tool=python / numpy / pandas / matplotlib / sklearn`
- Tools page: 12 cards -> official websites
- AI Model page: topic buttons + question box -> opens Claude / ChatGPT / Perplexity with the question filled in
- `GITHUB_URL` setting at the top

### pdf-reader.html
- Back button now says "← Modules" and returns to the Modules page

### tool-lab.html
- Back button now says "← Lab Assignments" and returns to the Lab Assignments page

### Not changed
- `index.html`, `script.css`, all PDF and lab code logic

## 4. Common things you may want to edit later

- Change a module name or PDF (cards now only show "Open PDF"): `MODULES` in `script.js`
- Change lab cards: `LABS` in `script.js`
- Change the 12 tools: `TOOLS` in `script.js`
- Change AI topic buttons: `AI_TOPICS` in `script.js`
- Change ID card details: search the text in `dashboard.html` (two places: the ID card and the Student details box)

## 5. Notes
- The AI page opens an external AI website. Showing answers inside your own page needs a paid API key and a server.
- The coding lab and PDF reader need internet (they load Pyodide and PDF.js).
- Open the site through a local server (VS Code "Live Server") if PDFs do not load by double-clicking the file; browsers block local PDF loading from `file://`.
