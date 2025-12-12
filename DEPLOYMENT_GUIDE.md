# KubePilot CE Landing Page - Deployment Guide

Your production-ready landing page for KubePilot CE has been created and is ready to deploy.

## 📋 What's Included

### Pages & Sections

- ✅ **Hero Section** - Bold headline with dual CTAs (Download / GitHub)
- ✅ **USP Highlights** - 6 key features with icons and descriptions
- ✅ **Features Grid** - 12 comprehensive feature cards (all free)
- ✅ **Comparison Table** - KubePilot vs K9s vs Lens
- ✅ **Download Section** - Platform-specific downloads (macOS, Windows, Linux)
- ✅ **Footer** - Community links, resources, social media

### Design & Styling

- ✅ **Dark theme** - Zinc-900 background (#18181b)
- ✅ **Color scheme** - Sky-400 buttons (#38BDF8), Orange-700 accents (#C2410C)
- ✅ **Blue cards** - Blue-900/20 with blue-800 borders
- ✅ **Responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Fast** - Optimized bundle size, minimal dependencies

### CI/CD

- ✅ **GitHub Actions Workflow** - Automatic build and deploy on push to main
- ✅ **Type-safe** - Full TypeScript compilation
- ✅ **Production build** - Minified, tree-shaken code

## 🚀 Quick Start - Deployment

### Option 1: GitHub Pages (Recommended for kubepilot.sh)

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name: `kubepilot` (or any name)
   - Make it public
   - Clone to your machine

2. **Add This Project to Your Repo**

   ```bash
   git clone https://github.com/YOUR_USERNAME/kubepilot.git
   cd kubepilot
   # Copy all files from this project here
   git add .
   git commit -m "Initial KubePilot landing page"
   git push origin main
   ```

3. **Configure GitHub Pages**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/(root)`
   - Custom domain: `kubepilot.sh` (if you own the domain)
   - Click "Save"

4. **Set Up DNS (for custom domain)**
   - Add DNS CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or use A records pointing to GitHub's IP addresses
   - See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

5. **Deploy**
   - Push to `main` branch
   - GitHub Actions automatically builds and deploys
   - Check workflow at: repo → Actions tab

### Option 2: Netlify (Alternative)

1. **Push to GitHub** (as above)

2. **Connect Netlify**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select your GitHub repo
   - Build command: `pnpm build:client`
   - Publish directory: `dist/spa/`
   - Click "Deploy"

3. **Configure Custom Domain**
   - Site settings → Domain management
   - Add custom domain: `kubepilot.sh`

### Option 3: Vercel (Alternative)

1. **Push to GitHub** (as above)

2. **Connect Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Framework: `Other` (static)
   - Build command: `pnpm build:client`
   - Output directory: `dist/spa/`
   - Click "Deploy"

3. **Configure Custom Domain**
   - Project → Settings → Domains
   - Add: `kubepilot.sh`

## 🔧 Local Development

### Prerequisites

```bash
# Node 18+ required
node --version

# Install pnpm
npm install -g pnpm

# Or use with Homebrew (macOS)
brew install pnpm
```

### Development Server

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Visit http://localhost:5173
```

### Build for Production

```bash
# Build client (static site)
pnpm build:client

# Output in: dist/spa/

# Type check
pnpm typecheck

# Test build locally
# (serve the dist/spa folder with any static server)
```

## 📁 Project Structure

```
kubepilot-landing/
├── client/
│   ├── components/
│   │   ├── Hero.tsx                    # Hero section with CTA
│   │   ├── USPSection.tsx              # 6 key features
│   │   ├── FeaturesGrid.tsx            # 12 feature cards
│   │   ├── ComparisonTable.tsx         # Comparison vs K9s/Lens
│   │   ├── DownloadSection.tsx         # Platform downloads
│   │   ├── Footer.tsx                  # Footer with links
│   │   └── ui/                         # Shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx                   # Main landing page
│   │   └── NotFound.tsx                # 404 page
│   ├── App.tsx                         # App entry point
│   ├── global.css                      # Dark theme CSS variables
│   └── vite-env.d.ts
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions workflow
├── tailwind.config.ts                  # Tailwind configuration
├── vite.config.ts                      # Vite configuration
├── tsconfig.json                       # TypeScript configuration
├── package.json
├── pnpm-lock.yaml
└── index.html                          # HTML entry point
```

## 🎨 Customization

### Change Colors

Edit `client/global.css` and `tailwind.config.ts`:

```css
/* In global.css, update HSL values */
:root {
  --background: 240 10% 11%; /* Zinc-900 */
  --primary: 200 98% 77%; /* Sky-400 */
  --accent: 18 87% 38%; /* Orange-700 */
  --card: 217 67% 11%; /* Blue-900/20 */
}
```

### Update Links

Edit component files:

```tsx
// Download links
href = "https://github.com/opsflow/kubepilot/releases";

// GitHub repo
href = "https://github.com/opsflow/kubepilot";

// Documentation
href = "https://docs.kubepilot.sh";

// Discord
href = "https://discord.gg/kubepilot";
```

### Add Screenshots

Replace image URLs in `Hero.tsx` and `USPSection.tsx`:

```tsx
<img src="YOUR_SCREENSHOT_URL" alt="Feature description" />
```

### Change Fonts

Edit `client/global.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap");
```

## 📊 Build Output

```
dist/spa/
├── index.html                (HTML entry)
├── assets/
│   ├── index-HASH.css       (Minified CSS)
│   └── index-HASH.js        (Minified JS)
└── robots.txt               (SEO)
```

**Size**: ~560KB (gzipped ~169KB) - fits in GitHub Pages free tier

## ✅ Pre-Deployment Checklist

- [ ] Update all GitHub links to your repo
- [ ] Set your custom domain in `.github/workflows/deploy.yml`
- [ ] Update social links in Footer (Discord, Twitter, etc.)
- [ ] Replace screenshot URLs with your own
- [ ] Update documentation URL
- [ ] Test on mobile (responsive)
- [ ] Run `pnpm typecheck` - no errors
- [ ] Run `pnpm build:client` - successful build
- [ ] Configure GitHub Pages or Netlify/Vercel

## 🔗 Important Links

- **KubePilot Repo**: https://github.com/opsflow/kubepilot
- **GitHub Pages Docs**: https://pages.github.com/
- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **Domain Management**: Update DNS after setting custom domain

## 🛠️ Troubleshooting

### Build fails with TypeScript errors

```bash
pnpm typecheck
# Fix errors reported

pnpm install
pnpm build:client
```

### GitHub Actions workflow not running

- Check: repo → Settings → Actions → General
- Ensure "Allow all actions and reusable workflows" is selected

### Custom domain not resolving

- Wait 24 hours for DNS propagation
- Verify DNS records at: https://mxtoolbox.com/
- Check GitHub Pages settings in repo

### Page not updating after push

- Force reload: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear browser cache
- Check GitHub Actions workflow status

## 📝 License

This landing page is open source and follows the same license as KubePilot CE (Apache 2.0).

## ❓ Questions?

For issues with deployment or customization, check:

- GitHub Actions logs in your repo
- GitHub Pages documentation
- KubePilot repository discussions
