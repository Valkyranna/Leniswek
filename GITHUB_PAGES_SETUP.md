# GitHub Pages Setup Instructions

To enable GitHub Pages for your repository, follow these steps:

## 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click on the "Settings" tab (top navigation)
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Click "Save"

## 2. Verify Build Works Locally

Before pushing changes, test the build locally:
```bash
npm install
npm run build
```

This should create a `dist` folder with your built site.

## 3. Push Changes

After making the configuration changes, commit and push:
```bash
git add .
git commit -m "Fix GitHub Pages deployment configuration"
git push origin main
```

## 4. Check Deployment Status

1. Go to the "Actions" tab in your repository
2. You should see a new workflow run for your recent push
3. Wait for the workflow to complete (green checkmark)
4. Visit your site at: `https://username.github.io/repository-name/`

Replace `username` with your GitHub username and `repository-name` with your repository name.

## Troubleshooting

If deployment still fails:
1. Check the Actions tab for error details
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the repository name matches your settings
4. Check that the `main` branch is protected (if applicable)

## Current Configuration

- **Build Command**: `npm run build`
- **Build Output**: `dist` directory
- **Base URL**: Root path (`/`)
- **Deployment Method**: GitHub Actions