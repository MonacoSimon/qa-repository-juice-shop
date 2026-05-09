# Performance Analysis Report – Juice Shop (20 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 20 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 20
* Tiempo promedio (average): 4 s
* Tiempo mínimo (min): 2 s
* Tiempo máximo (max): 44 s
* Mediana (median): 4 s
* Percentil 90 (P90): 5 s
* Percentil 95 (P95): 6 s
* Percentil 99 (P99): 44 s
* Tasa de error: 0 %
* Throughput: 1.9 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 4 segundos es elevado para una carga de solo 20 usuarios, indicando que el sistema presenta demoras significativas desde etapas tempranas de concurrencia.

La mediana coincide con el promedio (4 s), lo que sugiere que la mayoría de las solicitudes tienen tiempos de respuesta similares, sin una gran dispersión en condiciones normales.

Sin embargo, el tiempo máximo de 44 segundos es extremadamente alto y representa casos críticos donde la experiencia del usuario se degrada completamente.

---

### Percentiles

* P90: 5 s
* P95: 6 s
* P99: 44 s

Estos valores indican que:

* el 10 % de las solicitudes supera los 5 segundos
* el 5 % supera los 6 segundos
* el 1 % alcanza tiempos extremos de hasta 44 segundos

Esto evidencia la existencia de outliers severos, donde ciertas requests experimentan tiempos de respuesta muy superiores al comportamiento general.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* todas las solicitudes fueron procesadas correctamente
* no se registraron fallos funcionales bajo carga

Esto es positivo en términos de disponibilidad, pero no compensa los altos tiempos de respuesta observados.

---

### Throughput

El throughput de 1.9 requests por segundo es bajo para 20 usuarios concurrentes.

Esto puede indicar:

* tiempos de procesamiento elevados por request
* posibles bloqueos o cuellos de botella
* baja capacidad de escalabilidad del sistema bajo carga concurrente

---

## Análisis general

El sistema se mantiene estable en términos funcionales, pero presenta problemas importantes de rendimiento.

Se observa:

* tiempos de respuesta elevados incluso en condiciones normales
* outliers extremos que afectan la consistencia del sistema
* bajo throughput en relación a la carga aplicada

Estos indicadores sugieren que el sistema no está optimizado para manejar concurrencia de manera eficiente.

---

## Conclusión

La aplicación responde sin errores bajo una carga de 20 usuarios, pero presenta tiempos de respuesta elevados y casos extremos que impactan negativamente la experiencia del usuario.

La presencia de valores críticos en el percentil 99 (44 s) indica problemas de rendimiento que deben ser abordados.

Se recomienda:

* analizar cuellos de botella en backend y base de datos
* optimizar tiempos de procesamiento por request
* revisar configuración de recursos (CPU, memoria, conexiones)
* ejecutar pruebas con distintas cargas para identificar el punto de degradación

En su estado actual, el sistema es funcional pero no ofrece un rendimiento adecuado para escenarios de uso concurrente.
