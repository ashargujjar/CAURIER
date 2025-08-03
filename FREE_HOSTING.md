# 🆓 Free Hosting Deployment Guide

This guide covers deploying your TCS app to free hosting platforms.

## 🎯 Recommended: Render (Best Free Option)

### Why Render?

- ✅ Free tier with 750 hours/month
- ✅ Automatic deployments from GitHub
- ✅ Free MongoDB database
- ✅ Custom domains
- ✅ SSL certificates included
- ✅ No credit card required

### Step-by-Step Deployment

#### 1. Prepare Your Repository

```bash
# Make sure your code is pushed to GitHub
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

#### 2. Deploy to Render

1. **Go to [render.com](https://render.com)** and sign up with GitHub
2. **Click "New +"** → **"Blueprint"**
3. **Connect your GitHub repository**
4. **Render will automatically detect the `render.yaml`** and create:
   - Backend service
   - Frontend service
   - MongoDB database

#### 3. Configure Environment Variables

In your Render dashboard, set these environment variables:

**Backend Service:**

```
NODE_ENV=production
PORT=10000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/tcs_db
SECRET=your_super_secret_jwt_key_here
FRONTEND_URL=https://your-frontend-url.onrender.com
```

**Frontend Service:**

```
REACT_APP_BACKENDURL=https://your-backend-url.onrender.com
```

#### 4. Get MongoDB Connection String

1. In Render dashboard, go to your MongoDB service
2. Click "Connect"
3. Copy the "External Database URL"
4. Paste it as your `MONGO_URL`

### 🚀 Your app will be live at:

- **Frontend**: `https://your-app-name.onrender.com`
- **Backend**: `https://your-backend-name.onrender.com`

---

## 🚂 Alternative: Railway

### Why Railway?

- ✅ Free tier with $5 credit
- ✅ Easy deployment
- ✅ Good performance
- ✅ Automatic deployments

### Deployment Steps

1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Click "New Project"** → **"Deploy from GitHub repo"**
4. **Select your repository**
5. **Railway will auto-detect and deploy**

### Environment Variables

Set these in Railway dashboard:

```
NODE_ENV=production
PORT=3000
MONGO_URL=your_mongodb_atlas_url
SECRET=your_jwt_secret
FRONTEND_URL=https://your-frontend-url.railway.app
```

---

## ⚡ Alternative: Vercel (Frontend Only)

### Why Vercel?

- ✅ Excellent for React apps
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Great performance

### Deployment Steps

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Deploy frontend:**

   ```bash
   cd frontend
   vercel
   ```

3. **Update `vercel.json`** with your backend URL

---

## 🕸️ Alternative: Netlify (Frontend Only)

### Why Netlify?

- ✅ Great for static sites
- ✅ Form handling
- ✅ Easy deployment

### Deployment Steps

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** your `frontend/build` folder
3. **Or connect GitHub** for automatic deployments

---

## 🗄️ Free MongoDB Options

### 1. MongoDB Atlas (Recommended)

- ✅ 512MB free cluster
- ✅ No credit card required
- ✅ Global deployment

**Setup:**

1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free account
3. Create cluster
4. Get connection string

### 2. Render MongoDB (Free)

- ✅ 1GB storage
- ✅ Automatic backups
- ✅ Easy setup

### 3. Railway MongoDB

- ✅ Included with Railway
- ✅ Easy integration

---

## 🔧 Environment Variables Guide

### Backend Variables

```env
NODE_ENV=production
PORT=10000 (or platform default)
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database
SECRET=your_very_long_random_secret_key
FRONTEND_URL=https://your-frontend-url.com
```

### Frontend Variables

```env
REACT_APP_BACKENDURL=https://your-backend-url.com
```

---

## 🚨 Important Notes

### Free Tier Limitations

- **Render**: 750 hours/month (about 30 days)
- **Railway**: $5 credit/month
- **Vercel**: 100GB bandwidth/month
- **Netlify**: 100GB bandwidth/month

### Best Practices

1. **Use environment variables** for sensitive data
2. **Set up automatic deployments** from GitHub
3. **Monitor your usage** to stay within free limits
4. **Use MongoDB Atlas** for reliable database
5. **Test thoroughly** before going live

### Troubleshooting

#### Common Issues:

1. **Build fails**: Check Node.js version compatibility
2. **Database connection**: Verify MongoDB URL format
3. **CORS errors**: Update FRONTEND_URL in backend
4. **Environment variables**: Make sure they're set correctly

#### Debug Commands:

```bash
# Check build logs
# View in platform dashboard

# Test locally first
cd backend && npm start
cd frontend && npm start
```

---

## 🎉 Quick Start Checklist

- [ ] Push code to GitHub
- [ ] Choose hosting platform (Render recommended)
- [ ] Set up MongoDB (Atlas or platform-provided)
- [ ] Configure environment variables
- [ ] Deploy and test
- [ ] Set up custom domain (optional)
- [ ] Monitor performance

---

## 📞 Support

- **Render**: [docs.render.com](https://docs.render.com)
- **Railway**: [docs.railway.app](https://docs.railway.app)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)

**Your app will be live in minutes! 🚀**
