# Automation Testing - Cypress

Este módulo contiene pruebas automatizadas end-to-end (E2E) implementadas con Cypress.
Las pruebas están diseñadas para ejecutarse tanto en entorno local como dentro de contenedores Docker, permitiendo integrarlas fácilmente en pipelines de CI/CD.

---

## Estructura del proyecto

```
automation/
├── cypress/
│   ├── cypress/            # Casos de prueba E2E
│   ├── cypress.config.js   # Configuración de Cypress
│   ├── package.json        # Dependencias del proyecto
│   └── package-lock.json
├── Dockerfile              # Imagen para ejecutar Cypress en contenedor
├── run.sh                  # Script de ejecución local
└── README.md
```

---

## Objetivo

Validar el comportamiento funcional de la aplicación mediante pruebas automatizadas de interfaz, simulando flujos reales de usuario como:

* navegación principal
* registro y login
* interacción con productos
* procesos de compra

Las pruebas están pensadas para ejecutarse contra una aplicación levantada en Docker, lo que permite un entorno controlado y reproducible.

---

## Ejecución de pruebas

### 1. Ejecución local

Instalar dependencias:

```bash
cd cypress
npm install
```

Ejecutar pruebas:

```bash
npx cypress run
```

---

### 2. Ejecución mediante script

Dar permisos al script:

```bash
chmod +x run.sh
```

Ejecutar:

```bash
./run.sh
```

---

### 3. Ejecución con Docker

Construir la imagen:

```bash
docker build -t cypress-tests .
```

Ejecutar contenedor:

```bash
docker run cypress-tests
```

Nota: para que las pruebas funcionen correctamente, la aplicación bajo prueba debe estar disponible.
En entornos dockerizados, se recomienda utilizar el nombre del servicio (por ejemplo `http://juice-shop:3000`) en lugar de `localhost`.

---

## Configuración

El entorno de ejecución se define en `cypress.config.js`.
Se recomienda parametrizar la URL base de la aplicación:

```js
baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000'
```

Esto permite ejecutar las mismas pruebas en distintos entornos sin modificar el código.

---

## Consideraciones

* Las pruebas dependen del estado inicial de la aplicación.
* Es recomendable limpiar datos o utilizar usuarios dinámicos para evitar fallos en ejecuciones repetidas.
* Algunos elementos dinámicos (modales, loaders, overlays) pueden requerir esperas explícitas o validaciones de visibilidad.
* En entornos CI/CD, es necesario asegurar que la aplicación esté disponible antes de ejecutar las pruebas.

---

## Integración con CI/CD

Este módulo está preparado para integrarse en pipelines (por ejemplo Jenkins), donde:

1. Se levanta la aplicación bajo prueba (Docker)
2. Se ejecutan las pruebas de Cypress
3. Se recolectan resultados y reportes

---

## Enfoque

Se prioriza:

* reproducibilidad del entorno
* desacoplamiento entre aplicación y tests
* ejecución automatizada en pipelines
* cobertura de flujos críticos de negocio

