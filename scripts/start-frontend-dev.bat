@echo off
chcp 65001 >nul

echo ==========================================
echo   启动 MOMO 前端开发服务器
echo ==========================================

cd /d "%~dp0.."

echo.
echo [1/3] 检查 Node.js 版本...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误: 未找到 Node.js，请先安装 Node.js (建议 v18+)
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo       Node.js 版本: %NODE_VERSION%

echo.
echo [2/3] 检查 npm 依赖...
if not exist "node_modules" (
    echo       正在安装依赖...
    npm install
) else (
    echo       依赖已安装
)

echo.
echo [3/3] 启动开发服务器...
echo       服务地址: http://localhost:5173
echo       API 代理: http://localhost:8000/api
echo.
npm run dev

echo.
echo ==========================================
echo   服务器已停止
echo ==========================================
pause
