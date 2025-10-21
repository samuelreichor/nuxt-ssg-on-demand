# SSG On-Demand in Nuxt

> **Proof of Concept** for static site generation on demand

## 🎯 What is this?

This project demonstrates how to regenerate individual static pages in Nuxt **after the initial build** without rebuilding the entire app.

## Workflow

### 1. Initial Build & Preview

```bash
npm run build
npm run preview
```

This generates all static pages and starts a preview server.

### 2. Regenerate Individual Pages

Use the API to re-render specific pages on demand:

**Update homepage:**
```bash
curl "http://localhost:3000/api/prerender?route=/"
```

**Update specific page:**
```bash
curl "http://localhost:3000/api/prerender?route=/news/news1"
```

**Multiple pages:**
```bash
curl "http://localhost:3000/api/prerender?route=/about"
curl "http://localhost:3000/api/prerender?route=/news"
curl "http://localhost:3000/api/prerender?route=/news/news2"
```

## 🔧 How does it work?

The `/api/prerender` endpoint:

1. **Fetches** the specified route in ssr mode
2. **Renders** the page completely (including Vue components & data fetching)
3. **Extracts** the payload JSON (all data from `useAsyncData`/`useFetch`)
4. **Writes** both files (`index.html` + `_payload.json`) to disk

## 💡 Use Cases

- **CMS Integration**: Trigger targeted re-rendering on content updates
- **Incremental Static Regeneration**: Only regenerate changed pages
- **Preview Mode**: Test changes before full rebuild
- **Performance**: No complete rebuilds for small changes

## 🎨 Customization

**Change output directory:**
```typescript
const OUTPUT_DIR = './public'; // or './dist'
```

**Adjust base URL:**
```typescript
const PREVIEW_BASE_URL = '/ssg'; // your base URL
```

## 📝 Notes

- Preview server must be running for on-demand rendering
- Payload JSONs are only generated if the page uses data fetching
- Existing files will be overwritten

---

**Status:** Proof of Concept  
**Nuxt Version:** 4.1.3
