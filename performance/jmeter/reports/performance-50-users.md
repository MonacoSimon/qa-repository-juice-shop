# Performance Analysis Report – Juice Shop (50 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 50 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 50
* Tiempo promedio (average): 3 s
* Tiempo mínimo (min): 1 s
* Tiempo máximo (max): 6 s
* Mediana (median): 4 s
* Percentil 90 (P90): 5 s
* Percentil 95 (P95): 6 s
* Percentil 99 (P99): 6 s
* Tasa de error: 0 %
* Throughput: 2.0 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 3 segundos representa una leve mejora respecto a escenarios con menor carga, lo cual resulta contraintuitivo y sugiere un comportamiento más estable del sistema bajo este nivel de concurrencia.

La mediana de 4 segundos indica que la mayoría de las solicitudes se concentran en ese rango, con una distribución relativamente homogénea.

El tiempo máximo de 6 segundos es considerablemente menor que en pruebas anteriores, lo que evidencia la ausencia de picos extremos de latencia.

---

### Percentiles

* P90: 5 s
* P95: 6 s
* P99: 6 s

Estos valores indican que:

* el 10 % de las solicitudes supera los 5 segundos
* el 5 % alcanza los 6 segundos
* el 1 % se mantiene dentro del mismo rango máximo (6 segundos)

A diferencia de escenarios con outliers, aquí los percentiles altos se encuentran controlados, lo que refleja una mayor consistencia en los tiempos de respuesta.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* todas las solicitudes fueron procesadas correctamente
* el sistema mantiene estabilidad funcional bajo esta carga

Esto demuestra que la aplicación es capaz de soportar 50 usuarios concurrentes sin fallos.

---

### Throughput

El throughput de 2.0 requests por segundo se mantiene en un nivel bajo en relación a la cantidad de usuarios concurrentes.

Esto puede indicar:

* tiempos de respuesta relativamente altos
* limitaciones en la capacidad de procesamiento
* posibles cuellos de botella en el sistema

---

## Análisis general

El sistema presenta un comportamiento más estable bajo 50 usuarios que en cargas menores, eliminando los picos extremos de latencia.

Se observa:

* tiempos de respuesta consistentes
* ausencia de outliers críticos
* estabilidad completa (sin errores)
* limitación en el throughput

Este patrón puede sugerir que el sistema entra en un estado más predecible bajo cierta carga, aunque con tiempos de respuesta aún elevados.

---

## Conclusión

La aplicación soporta 50 usuarios concurrentes de manera estable, manteniendo tiempos de respuesta consistentes y sin errores.

Sin embargo, los tiempos siguen siendo elevados para un entorno productivo, y el throughput continúa siendo bajo en relación a la carga aplicada.

Se recomienda:

* optimizar tiempos de respuesta para mejorar la experiencia del usuario
* analizar limitaciones en la capacidad de procesamiento
* continuar pruebas con cargas mayores para identificar el punto de degradación

En su estado actual, el sistema es estable pero presenta oportunidades claras de mejora en rendimiento.
