#!/bin/bash
set -e

echo "==================================="
echo " Verificación de entorno QA"
echo "==================================="
echo ""

echo "[1/5] Verificando Docker..."
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker no está instalado"
    exit 1
fi
echo "OK - Docker encontrado"
echo ""

echo "[2/5] Verificando Docker Compose..."
if ! docker compose version &> /dev/null; then
    echo "ERROR: Docker Compose no encontrado"
    exit 1
fi
echo "OK - Docker Compose encontrado"
echo ""

echo "[3/5] Verificando Docker daemon..."
if ! docker info &> /dev/null; then
    echo "ERROR: Docker daemon no está corriendo"
    exit 1
fi
echo "OK - Docker daemon activo"
echo ""

echo "[4/5] Verificando Node.js y npm..."

if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js no está instalado"
    echo ""
    echo "Ubuntu/Debian:"
    echo "  sudo apt update"
    echo "  sudo apt install nodejs npm"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "ERROR: npm no está instalado"
    exit 1
fi

echo "OK - $(node --version)"
echo "OK - npm $(npm --version)"
echo ""

echo "[5/5] Instalando dependencias de Cypress..."

if [ ! -d "automation/cypress" ]; then
    echo "ERROR: No existe automation/cypress"
    exit 1
fi

cd automation/cypress

if [ ! -f package.json ]; then
    echo "ERROR: package.json no encontrado"
    exit 1
fi

npm install

echo "OK - Dependencias instaladas"

cd ../..
echo ""

echo "==================================="
echo " Versiones instaladas"
echo "==================================="

docker --version
docker compose version
node --version
npm --version

echo ""
echo "==================================="
echo " Entorno listo"
echo "==================================="
echo ""
echo "Para ejecutar Cypress:"
echo "  cd automation/cypress"
echo "  npm run cypress:open"
echo "o"
echo "  npm run cypress:run"