# OWASP ZAP – Análisis de Seguridad con Docker (Juice Shop)

## Descripción

Este módulo permite ejecutar un análisis de seguridad automatizado utilizando OWASP ZAP dentro de un contenedor Docker, específicamente para la aplicación **OWASP Juice Shop**.

El objetivo es detectar vulnerabilidades y configuraciones inseguras en Juice Shop, generando un reporte directamente en el entorno del proyecto.

---

## Estructura

```text
docker-report/
├── run.sh
├── report.html
└── zap.yaml

    run.sh → script que ejecuta el escaneo con Docker

    report.html → reporte generado por ZAP

    zap.yaml → configuración utilizada por ZAP durante la ejecución

Requisitos previos

    Docker instalado y funcionando

    OWASP Juice Shop corriendo en http://localhost:3000

Iniciar Juice Shop
bash

docker run -d --name juice-shop -p 3000:3000 bkimminich/juice-shop

Ejecución del escaneo

El escaneo se realiza mediante el siguiente script:
bash

#!/bin/bash

# Usar network host (recomendado)
docker run --network host -t \
  -u root \
  -v $(pwd):/zap/wrk \
  zaproxy/zap-stable \
  zap-baseline.py \
  -t http://localhost:3000 \
  -r report.html

Para ejecutar:
bash

./run.sh

Explicación técnica
Parámetro	Descripción
docker run	ejecuta el contenedor de ZAP
--network host	comparte la red del host, permitiendo acceder a localhost:3000
-u root	permite al contenedor escribir archivos en la carpeta local
-v $(pwd):/zap/wrk	monta la carpeta actual como volumen dentro del contenedor
zaproxy/zap-stable	imagen oficial de OWASP ZAP
zap-baseline.py	script de escaneo pasivo
-t http://localhost:3000	URL objetivo del análisis (Juice Shop)
-r report.html	nombre del reporte generado
Archivo de configuración (zap.yaml)

El archivo zap.yaml define la configuración del escaneo:
yaml

env:
  contexts:
  - name: baseline
    urls:
    - http://localhost:3000
  parameters:
    failOnError: true

jobs:
- type: spider
  parameters:
    url: http://localhost:3000
    maxDuration: 1
- type: passiveScan-config
- type: passiveScan-wait
- type: report
  parameters:
    reportDir: /zap/wrk/
    reportFile: report.html
    template: traditional-html

Resultado

Al ejecutar el script se generan los siguientes archivos:

    report.html → reporte con los resultados del análisis

    zap.yaml → configuración utilizada por ZAP durante el escaneo (actualizado automáticamente)

Tipo de análisis

El escaneo corresponde a un baseline scan, que incluye:

    exploración de la aplicación (spider)

    análisis pasivo de seguridad

    detección de vulnerabilidades comunes (XSS, SQLi, etc.)

No se realizan ataques activos, por lo que es adecuado para entornos de testing.
Integración con Juice Shop

Juice Shop es una aplicación web intencionalmente insegura para prácticas de seguridad. Algunas vulnerabilidades que ZAP puede detectar:

    Inyección SQL

    Cross-Site Scripting (XSS)

    Configuraciones inseguras

    Headers de seguridad faltantes

Solución de problemas
Error de conexión a localhost

Si ZAP no puede acceder a Juice Shop, asegúrate de:
bash

# 1. Verificar que Juice Shop esté corriendo
docker ps | grep juice-shop

# 2. Probar la conexión
curl http://localhost:3000

# 3. Reconstruir el contenedor de Juice Shop
docker rm -f juice-shop
docker run -d --name juice-shop -p 3000:3000 bkimminich/juice-shop

Contenedor de ZAP no puede escribir archivos

El flag -u root permite escribir en el directorio montado.
Conclusión

La ejecución de OWASP ZAP mediante Docker permite realizar análisis de seguridad de forma simple y reproducible en Juice Shop, generando reportes directamente en el proyecto sin depender de configuraciones locales ni instalar herramientas adicionales.
