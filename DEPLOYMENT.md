# TCS App Deployment Guide

This guide covers multiple deployment options for the TCS (Parcel Delivery) application.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (local or cloud)
- Git

### Environment Setup

1. **Backend Environment Variables**

   ```bash
   cp backend/env.example backend/.env
   ```

   Edit `backend/.env` with your configuration:

   ```env
   PORT=5000
   NODE_ENV=production
   MONGO_URL=mongodb://localhost:27017/tcs_db
   SECRET=your_jwt_secret_key_here
   FRONTEND_URL=https://yourdomain.com
   ```

2. **Frontend Environment Variables**
   ```bash
   cp frontend/env.example frontend/.env
   ```
   Edit `frontend/.env` with your configuration:
   ```env
   REACT_APP_BACKENDURL=https://api.yourdomain.com
   ```

## 📦 Deployment Options

### Option 1: Docker Deployment (Recommended)

#### Using Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

#### Using Docker directly

```bash
# Build the image
docker build -t tcs-app .

# Run the container
docker run -d -p 5000:5000 --name tcs-app tcs-app
```

### Option 2: PM2 Deployment (Production)

#### Linux/Ubuntu Server

```bash
# Make script executable
chmod +x deploy.sh

# Deploy to production
./deploy.sh production
```

#### Windows Server

```cmd
# Run deployment script
deploy.bat production
```

#### Manual PM2 Setup

```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Setup startup script
pm2 startup
```

### Option 3: Traditional Server Deployment

1. **Install Dependencies**

   ```bash
   # Backend
   cd backend
   npm ci --only=production

   # Frontend
   cd frontend
   npm ci
   npm run build
   ```

2. **Setup Nginx**

   ```bash
   sudo apt install nginx
   sudo cp nginx.conf /etc/nginx/nginx.conf
   sudo nginx -t
   sudo systemctl restart nginx
   ```

3. **Start Application**
   ```bash
   cd backend
   npm start
   ```

## 🌐 Cloud Deployment

### Heroku

1. Create `Procfile` in root:

   ```
   web: cd backend && npm start
   ```

2. Deploy:
   ```bash
   heroku create your-app-name
   heroku config:set NODE_ENV=production
   heroku config:set MONGO_URL=your_mongodb_url
   heroku config:set SECRET=your_jwt_secret
   git push heroku main
   ```

### Vercel (Frontend)

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Deploy frontend:
   ```bash
   cd frontend
   vercel
   ```

### Railway

1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically on push

### DigitalOcean App Platform

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `cd frontend && npm ci && npm run build`
   - Run Command: `cd backend && npm start`
3. Set environment variables
4. Deploy

## 🔧 Configuration

### Database Setup

- **Local MongoDB**: Install and configure MongoDB locally
- **MongoDB Atlas**: Create cluster and get connection string
- **Other Cloud DBs**: Configure connection strings in `.env`

### SSL/HTTPS Setup

1. **Let's Encrypt (Free)**

   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

2. **Manual SSL**
   - Generate SSL certificates
   - Update `nginx.conf` with SSL configuration
   - Uncomment SSL lines in nginx config

### Environment Variables Reference

#### Backend (.env)

| Variable       | Description           | Example                            |
| -------------- | --------------------- | ---------------------------------- |
| `PORT`         | Server port           | `5000`                             |
| `NODE_ENV`     | Environment           | `production`                       |
| `MONGO_URL`    | MongoDB connection    | `mongodb://localhost:27017/tcs_db` |
| `SECRET`       | JWT secret key        | `your_secret_key`                  |
| `FRONTEND_URL` | Frontend URL for CORS | `https://yourdomain.com`           |

#### Frontend (.env)

| Variable               | Description     | Example                      |
| ---------------------- | --------------- | ---------------------------- |
| `REACT_APP_BACKENDURL` | Backend API URL | `https://api.yourdomain.com` |

## 📊 Monitoring & Logs

### PM2 Monitoring

```bash
# View status
pm2 status

# View logs
pm2 logs tcs-app

# Monitor resources
pm2 monit

# Restart application
pm2 restart tcs-app
```

### Docker Monitoring

```bash
# View container status
docker ps

# View logs
docker logs tcs-app

# Monitor resources
docker stats
```

### Health Checks

- Backend: `GET /health`
- Docker: Built-in health check
- Load Balancer: Configure health check endpoint

## 🔒 Security Checklist

- [ ] Environment variables properly set
- [ ] JWT secret is strong and unique
- [ ] CORS configured correctly
- [ ] Rate limiting enabled
- [ ] Helmet.js security headers
- [ ] HTTPS/SSL configured
- [ ] Firewall rules set
- [ ] Database access restricted
- [ ] Regular security updates
- [ ] Backup strategy in place

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Find process using port
   lsof -i :5000
   # Kill process
   kill -9 <PID>
   ```

2. **MongoDB connection failed**

   - Check MongoDB service is running
   - Verify connection string
   - Check network connectivity

3. **Build failures**

   ```bash
   # Clear npm cache
   npm cache clean --force
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **PM2 issues**
   ```bash
   # Reset PM2
   pm2 kill
   pm2 start ecosystem.config.js
   ```

### Log Locations

- PM2 logs: `~/.pm2/logs/`
- Nginx logs: `/var/log/nginx/`
- Application logs: `./logs/`

## 📈 Performance Optimization

1. **Enable Gzip compression** (already in nginx.conf)
2. **Cache static assets** (already configured)
3. **Use CDN for static files**
4. **Database indexing**
5. **Load balancing for high traffic**

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

## 📞 Support

For deployment issues:

1. Check logs first
2. Verify environment variables
3. Test locally before deploying
4. Review security checklist
5. Contact development team

---

**Note**: Always test deployment in a staging environment before going to production!
