#!/bin/bash

set -e

echo "=========================================="
echo "  启动 MOMO 前端开发服务器"
echo "=========================================="

cd "$(dirname "$0")/.."

echo ""
echo "[1/3] 检查 Node.js 版本..."
NODE_VERSION=$(node -v 2>/dev/null || echo "NOT_FOUND")
if [ "$NODE_VERSION" = "NOT_FOUND" ]; then
    echo "错误: 未找到 Node.js，请先安装 Node.js (建议 v18+)"
    exit 1
fi
echo "      Node.js 版本: $NODE_VERSION"

echo ""
echo "[2/3] 检查 npm 依赖..."
if [ ! -d "node_modules" ]; then
    echo "      正在安装依赖..."
    npm install
else
    echo "      依赖已安装"
fi

echo ""
echo "[3/3] 启动开发服务器..."
echo "      服务地址: http://localhost:5173"
echo "      API 代理: http://localhost:8000/api"
echo ""
npm run dev

echo ""
echo "=========================================="
echo "  服务器已停止"
echo "=========================================="
