# Punyawat Online Resume

A modern, AI/data-science themed **multi-page** online resume ready for GitHub Pages.

## Pages

- `index.html` — main profile and resume summary
- `projects.html` — project showcase directory
- `project-cyber-hilbert.html` — intrusion detection project details
- `project-liver-segmentation.html` — liver segmentation project details
- `project-adaptive-cyber.html` — adaptive cybersecurity project details

## 🚀 Quick Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.
5. Open: `https://<your-username>.github.io/<repo-name>/`

## 🖼️ Profile picture (GIF supported)

You can use static images (`.png`, `.jpg`, `.svg`) **or animated GIF** (`.gif`).

1. Put your file in `assets/` (example: `assets/profile.gif`).
2. In `index.html`, replace:

```html
<img src="assets/profile-placeholder.svg" alt="Profile placeholder or GIF profile" />
```

with:

```html
<img src="assets/profile.gif" alt="Punyawat Jaroensiripong profile" />
```

## ✨ Interactive effects

- Typing animation for role titles
- Scroll reveal animation for sections
- Particle background canvas
- Animated training metric bars on project detail pages
- AI-style grid + ambient glow theme
