# MVG Portfolio — React JS
### Madasu Venkata Guruvulu | Pharmacovigilance & Drug Safety

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm start
# Opens at http://localhost:3000

# 3. Build for production
npm run build
# Output in /build folder
```

---
 

---

## ✏️ Customization

All content lives in **`src/data.js`** — edit your name, skills, experience etc.

To update the **resume PDF**, replace `src/assets/resume.pdf` and regenerate `resumeB64.js`:
```bash
node -e "const fs=require('fs'); const b64=fs.readFileSync('src/assets/resume.pdf').toString('base64'); fs.writeFileSync('src/assets/resumeB64.js', \`const resumeB64 = \\\`\${b64}\\\`;\nexport default resumeB64;\n\`);"
```

---

## 🌐 Deploy (Free)

| Platform | Command |
|---|---|
| **Netlify** | `npm run build` → drag `/build` folder to netlify.com/drop |
| **Vercel** | `npx vercel` |
| **GitHub Pages** | `npm run build` → push `/build` to `gh-pages` branch |

---

## 🎨 Design Tokens

Edit CSS variables in `src/index.css`:
- `--gold` / `--gold2` — accent gold colors
- `--teal` — secondary accent
- `--bg` / `--bg2` / `--bg3` — background layers
- `--w1` / `--w2` / `--w3` — text hierarchy

---

*Built with React 18 · No external UI library · Pure CSS*
