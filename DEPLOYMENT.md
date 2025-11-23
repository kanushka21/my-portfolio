# Vercel Deployment Guide

This guide will help you deploy your Data Analyst Portfolio to Vercel in minutes.

## Prerequisites

- A GitHub account
- Your portfolio code pushed to a GitHub repository
- A Vercel account (free tier is sufficient)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Data Analyst Portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your portfolio repository
5. Vercel will auto-detect the framework settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site is now live! 🎉

### Step 4: Custom Domain (Optional)

1. Go to your project settings
2. Click **"Domains"**
3. Add your custom domain
4. Follow the DNS configuration instructions

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **data-analyst-portfolio**
- In which directory is your code located? **.**

### Step 4: Production Deployment

```bash
vercel --prod
```

## Environment Variables (If Needed)

If you're using environment variables (e.g., for form submissions):

1. Go to your project on Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Add your variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your project

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the `main` branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

## Deployment Checklist

Before deploying, make sure you've:

- [ ] Replaced placeholder content with your actual information
- [ ] Updated all social media links
- [ ] Added your actual resume to `public/cv.pdf`
- [ ] Updated SEO meta tags in `index.html`
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the project successfully (`npm run build`)
- [ ] Replaced project screenshots with real images
- [ ] Updated the README with your information

## Troubleshooting

### Build Fails

**Error**: `Command "npm run build" exited with 1`

**Solution**: 
1. Check the build logs for specific errors
2. Make sure all dependencies are in `package.json`
3. Test the build locally: `npm run build`

### 404 on Refresh

**Problem**: Page shows 404 when refreshing on routes

**Solution**: The `vercel.json` file is already configured to handle this:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Slow Build Times

**Solution**:
1. Enable caching in Vercel (automatic)
2. Optimize dependencies
3. Use `npm ci` instead of `npm install` in build command

## Performance Optimization

After deployment, check your site's performance:

1. Run Lighthouse audit in Chrome DevTools
2. Check Vercel Analytics (available in project dashboard)
3. Monitor Core Web Vitals

## Updating Your Site

To update your deployed site:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
```bash
git add .
git commit -m "Update: description of changes"
git push
```
4. Vercel will automatically deploy the changes

## Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Go to your project → **Settings** → **Domains**
2. Enter your domain name
3. Click **Add**

### Step 2: Configure DNS

Add these records to your DNS provider:

**For apex domain (example.com)**:
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain**:
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### Step 3: Wait for Propagation

DNS changes can take up to 48 hours, but usually complete within a few hours.

## Monitoring & Analytics

Enable Vercel Analytics:
1. Go to your project dashboard
2. Click **"Analytics"**
3. Enable analytics (free for hobby projects)

Track:
- Page views
- Performance metrics
- User demographics
- Traffic sources

## Support

If you encounter issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Visit [Vercel Community](https://github.com/vercel/vercel/discussions)
- Contact Vercel Support

---

🎉 **Congratulations!** Your Data Analyst Portfolio is now live on Vercel!

Share your portfolio URL:
- On LinkedIn
- In your resume
- With potential employers
- On your GitHub profile
