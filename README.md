# Punyawat Online Resume

A modern, single-page online resume ready to host on **GitHub Pages**.

## 🚀 Quick Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.
5. Your resume will be available at:
   - `https://<your-username>.github.io/<repo-name>/`

## 🖼️ Change your profile photo

The page currently uses a placeholder image at:

- `assets/profile-placeholder.svg`

To use your own picture:

1. Add your image file to `assets/` (for example: `assets/punyawat.jpg`).
2. Open `index.html`.
3. Replace the image source in the profile card:

```html
<img src="assets/profile-placeholder.svg" alt="Profile placeholder" />
```

with:

```html
<img src="assets/punyawat.jpg" alt="Punyawat Jaroensiripong" />
```

## ✏️ Customize content

All resume sections are in `index.html`:

- Header / contact
- Education
- Work Experience
- Projects & Research
- Skills
- Certificates & Events

Styling is in `styles.css`, and a small script that sets the footer year is in `script.js`.
