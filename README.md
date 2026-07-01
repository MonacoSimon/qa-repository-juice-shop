# QA Repository - OWASP Juice Shop

## Descripción General

Este repositorio contiene una implementación completa de pruebas QA sobre la aplicación vulnerable :contentReference[oaicite:0]{index=0} utilizando múltiples herramientas y estrategias de testing automatizado y manual.

El proyecto incluye:

- Automatización E2E con Cypress
- Testing de API con Postman y Newman
- Pruebas de performance con JMeter
- Escaneo de seguridad con OWASP ZAP
- Pruebas de accesibilidad con Axe y Lighthouse
- Integración continua con Jenkins
- Contenedorización con Docker y Docker Compose
- Evidencias manuales y reportes de bugs
- Casos de prueba documentados

---

![Jenkins Pipeline](https://img.shields.io/badge/Jenkins-Pipeline-blue)
![Docker](https://img.shields.io/badge/Docker-Containers-blue)
![Cypress](https://img.shields.io/badge/Cypress-E2E-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

# Arquitectura General

La estructura del proyecto está organizada en capas:

```text
Jenkins Pipeline
        ↓
Docker Compose
        ↓
Contenedores Docker individuales
        ↓
Herramientas específicas de testing
(Cypress, Newman, JMeter, ZAP, Axe, Lighthouse)
```

---

# Objetivo del Proyecto

El objetivo principal es centralizar múltiples tipos de pruebas QA sobre una aplicación realista y vulnerable, utilizando contenedores Docker y pipelines automatizados.

Uno de los principales desafíos técnicos del proyecto fue combinar:

- El contenedor de OWASP Juice Shop
- Los contenedores de testing
- La comunicación entre redes Docker
- La ejecución automatizada desde Jenkins

---

# Tecnologías Utilizadas

| Herramienta | Uso |
|---|---|
| Docker | Contenedores |
| Docker Compose | Orquestación |
| Jenkins | Pipeline CI/CD |
| Cypress | Automatización E2E |
| Newman | Testing de APIs |
| Postman | Colecciones API |
| JMeter | Performance Testing |
| OWASP ZAP | Security Testing |
| Axe | Accesibilidad |
| Lighthouse | Auditoría Web |

---

# Requisitos

## Requisitos mínimos

- Linux
- Docker
- Docker Compose

---

# Verificación del Entorno

El proyecto incluye un script de validación:

```bash
chmod +x set-up.sh
./set-up.sh
```

Este script verifica:

- Instalación de Docker
- Instalación de Docker Compose
- Estructura mínima necesaria

---

# Estructura del Proyecto

```text
.
├── accesibility-testing
├── api-testing
├── automation
├── bug-reports
├── conclusions
├── docker-compose.yml
├── Jenkinsfile
├── performance
├── results-docker
├── security
├── set-up.sh
└── test-scenarios
```

---

# Docker Compose

## ¿Qué es Docker Compose?

Docker Compose permite orquestar múltiples contenedores simultáneamente utilizando un único archivo `docker-compose.yml`.

En este proyecto se utiliza para:

- Levantar Juice Shop
- Ejecutar pruebas automatizadas
- Ejecutar pruebas de seguridad
- Ejecutar pruebas de performance
- Centralizar resultados

---

# Uso de Docker Compose

## Levantar todos los servicios

```bash
docker-compose up
```

## Levantar en segundo plano

```bash
docker-compose up -d
```

## Detener servicios

```bash
docker-compose down
```

---

# Jenkins Pipeline

## ¿Qué es Jenkins?

:contentReference[oaicite:1]{index=1} es una herramienta de integración continua utilizada para automatizar pipelines de testing.

En este proyecto el pipeline:

1. Levanta Juice Shop
2. Ejecuta pruebas paralelas
3. Recolecta resultados
4. Genera artefactos

---

# Uso del Pipeline

## Crear Pipeline

1. Abrir Jenkins
2. Crear nuevo Pipeline
3. Configurar repositorio Git
4. Utilizar el `Jenkinsfile` del proyecto

---

# Flujo del Pipeline

```text
Jenkins
   ↓
Docker Compose
   ↓
Levantar Juice Shop
   ↓
Pruebas paralelas:
   - Cypress
   - Newman
   - JMeter
   - ZAP
   ↓
Resultados
```

---

# Importante Sobre Juice Shop

## Ejecución Manual

Para ejecutar pruebas individuales fuera de Docker Compose o Jenkins, primero debe levantarse Juice Shop manualmente en:

```text
http://localhost:3000
```

## Ejecutar Juice Shop manualmente

```bash
docker run -d \
  --name juice-shop \
  -p 3000:3000 \
  bkimminich/juice-shop:v20.1.1
```

---

# Automatización E2E - Cypress

### Patrón de Diseño (Arquitectura)

La suite de pruebas E2E está desarrollada bajo el patrón de diseño **Page Object Model (POM)**. Esta arquitectura permite separar la lógica de negocio y las interacciones con la interfaz de usuario de las aserciones de los casos de prueba.

Beneficios implementados:
- **Mantenibilidad:** Los selectores del DOM y los métodos de interacción se centralizan en clases específicas por página, facilitando su actualización ante cambios en la interfaz.
- **Reutilización de código:** Se reducen las duplicaciones mediante la abstracción de flujos comunes de usuario (como el proceso de registro, inicio de sesión y adición de productos al carrito).
- **Legibilidad:** Los archivos de pruebas (`.cy.js`) mantienen un enfoque semántico y limpio, enfocado estrictamente en los flujos de validación y criterios de aceptación.

Directorio:

```text
automation/
```

## Dar permisos

```bash
chmod +x run.sh
```

## Ejecutar

```bash
./run.sh
```

## Funcionalidad

- Automatización de interfaz
- Validación funcional
- Testing E2E

## Resultados

Los resultados se almacenan en:

```text
automation/cypress/results
```

---

# API Testing - Newman

Directorio:

```text
api-testing/
```

## Dar permisos

```bash
chmod +x run-docker.sh
```

## Ejecutar

```bash
./run-docker.sh
```

## Funcionalidad

- Testing de endpoints
- Validación de respuestas
- Automatización de APIs

## Resultados

```text
api-testing/newman/results-newman
```

---

# Performance Testing - JMeter

Directorio:

```text
performance/jmeter
```

## Dar permisos

```bash
chmod +x run.sh
```

## Ejecutar

```bash
./run.sh
```

## Funcionalidad

- Stress testing
- Load testing
- Performance metrics

## Resultados

```text
results-docker/jmeter
```

Incluye:

- `.jtl`
- logs
- reportes HTML

---

# Security Testing - OWASP ZAP

Directorio:

```text
security/docker-report
```

## Dar permisos

```bash
chmod +x run.sh
```

## Ejecutar

```bash
./run.sh
```

## Funcionalidad

- Escaneo automático
- Detección de vulnerabilidades
- Seguridad web

## Resultados

```text
results-docker/zap
```

---

# Accesibilidad

Directorio:

```text
accesibility-testing
```

Herramientas utilizadas:

- Axe
- Lighthouse

## Funcionalidad

- Validación WCAG
- Problemas de accesibilidad
- Auditorías automáticas

---

# Testing Manual

Directorio:

```text
test-scenarios
```

Incluye:

- Casos de prueba
- Escenarios manuales
- Documentación QA

Archivos:

```text
test-cases.ods
test-cases.pdf
```

---

# Reportes de Bugs

Directorio:

```text
bug-reports
```

Incluye:

- Evidencias visuales
- Capturas
- Bugs documentados
- Exportaciones PDF y ODS

---

# Resultados Generados

Todos los resultados se almacenan en:

```text
results-docker/
```

Separados por herramienta:

```text
results-docker/jmeter
results-docker/newman
results-docker/zap
```

---

# Consideraciones Técnicas

## Comunicación entre contenedores

Uno de los puntos más complejos del proyecto fue la integración entre:

- Contenedores Docker de testing
- Contenedor de Juice Shop
- Redes Docker
- Jenkins
- Docker Compose

Especialmente para:

- Acceso a `localhost`
- Resolución de hostnames
- Uso de `host.docker.internal`
- Redes compartidas
- Conflictos de puertos

---

# Compatibilidad

Actualmente el proyecto está orientado principalmente a:

- Linux
- Docker Engine Linux

Puede requerir ajustes en:

- Windows
- macOS

Principalmente por diferencias en networking Docker.

---

# Licencia

Este proyecto incluye archivo:

```text
LICENSE
```

---

# Autor
Simón Mónaco

Proyecto QA desarrollado para prácticas de:

- Automatización
- Seguridad
- Performance
- Accesibilidad
- Integración continua
- Testing manual y automatizado


# Contribución

Si deseas contribuir a este proyecto:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -am 'Agrego nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

**Nota:** Asegúrate de que todas las pruebas pasen localmente antes de enviar el PR.
