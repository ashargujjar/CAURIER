@echo off
setlocal enabledelayedexpansion

REM TCS App Deployment Script for Windows
REM Usage: deploy.bat [production|development]

set ENVIRONMENT=%1
if "%ENVIRONMENT%"=="" set ENVIRONMENT=development

echo 🚀 Starting deployment to %ENVIRONMENT%...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed. Please install Node.js first.
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not installed. Please install npm first.
    exit /b 1
)

REM Install PM2 globally if not installed
echo [INFO] Checking PM2 installation...
pm2 --version >nul 2>&1
if errorlevel 1 (
    echo [INFO] Installing PM2...
    npm install -g pm2
)

REM Install backend dependencies
echo [INFO] Installing backend dependencies...
cd backend
call npm ci --only=production
cd ..

REM Install frontend dependencies
echo [INFO] Installing frontend dependencies...
cd frontend
call npm ci
call npm run build
cd ..

REM Create logs directory
if not exist logs mkdir logs

REM Set up environment variables
if not exist backend\.env (
    echo [WARNING] No backend .env file found. Please create one based on env.example
    copy backend\env.example backend\.env
)

if not exist frontend\.env (
    echo [WARNING] No frontend .env file found. Please create one based on env.example
    copy frontend\env.example frontend\.env
)

REM Start application with PM2
echo [INFO] Starting application with PM2...
pm2 delete tcs-app 2>nul
pm2 start ecosystem.config.js --env %ENVIRONMENT%

REM Save PM2 configuration
pm2 save

echo [INFO] Deployment completed successfully! 🎉
echo [INFO] PM2 status: pm2 status
echo [INFO] PM2 logs: pm2 logs tcs-app
echo [INFO] Application should be running on: http://localhost:5000

pause 