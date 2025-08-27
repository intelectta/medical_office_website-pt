@echo off
cd /d %~dp0

echo.
echo [Deploy Automático - GitHub Actions]
echo ====================================
echo.

REM Adiciona todas as mudanças (como .github/workflows/deploy.yml)
git add .

REM Faz commit
git commit -m "Deploy automático com GitHub Actions"

REM Envia para o repositório remoto
git push origin main

echo.
echo ✅ Deploy enviado com sucesso!
pause
