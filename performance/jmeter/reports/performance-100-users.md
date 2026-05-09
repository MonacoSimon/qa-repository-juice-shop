# Performance Analysis Report – Juice Shop (100 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 100 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 100
* Tiempo promedio (average): 3 s
* Tiempo mínimo (min): 1 s
* Tiempo máximo (max): 8 s
* Mediana (median): 4 s
* Percentil 90 (P90): 5 s
* Percentil 95 (P95): 5 s
* Percentil 99 (P99): 7 s
* Tasa de error: 0 %
* Throughput: 3.3 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 3 segundos se mantiene consistente respecto a pruebas con menor carga, lo que indica que el sistema logra sostener su rendimiento incluso con 100 usuarios concurrentes.

La mediana de 4 segundos confirma que la mayoría de las solicitudes se concentran en ese rango, sin grandes variaciones.

El tiempo máximo de 8 segundos representa un incremento moderado respecto a escenarios anteriores, pero sigue dentro de un rango controlado sin presencia de picos extremos.

---

### Percentiles

* P90: 5 s
* P95: 5 s
* P99: 7 s

Estos valores indican que:

* el 10 % de las solicitudes supera los 5 segundos
* el 5 % se mantiene en ese mismo rango
* el 1 % alcanza hasta 7 segundos

La diferencia moderada en el P99 muestra la aparición de algunos casos más lentos, aunque sin llegar a valores críticos.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* todas las solicitudes fueron procesadas correctamente
* el sistema mantiene estabilidad funcional incluso bajo una carga alta

Esto demuestra una buena capacidad de respuesta desde el punto de vista funcional.

---

### Throughput

El throughput de 3.3 requests por segundo representa una mejora respecto a escenarios anteriores.

Esto sugiere que:

* el sistema incrementa su capacidad de procesamiento a medida que aumenta la carga
* existe un comportamiento de escalabilidad progresiva

Sin embargo, el valor sigue siendo relativamente bajo en relación a la cantidad de usuarios concurrentes.

---

## Análisis general

El sistema presenta un comportamiento estable bajo 100 usuarios concurrentes, manteniendo tiempos de respuesta relativamente consistentes y sin errores.

Se observa:

* estabilidad en los tiempos promedio y medianos
* ligera aparición de latencias más altas en percentiles extremos
* mejora gradual en el throughput
* ausencia de fallos funcionales

Esto indica que el sistema escala de manera moderada, manteniendo la consistencia sin degradaciones abruptas.

---

## Conclusión

La aplicación soporta 100 usuarios concurrentes sin errores y con tiempos de respuesta estables.

Si bien no se evidencian problemas críticos, los tiempos siguen siendo elevados para escenarios de alta exigencia, y el throughput continúa siendo limitado en relación a la carga aplicada.

Se recomienda:

* optimizar tiempos de respuesta para mejorar la experiencia del usuario
* analizar posibles cuellos de botella en backend o infraestructura
* continuar con pruebas de mayor carga para identificar el límite de escalabilidad del sistema

En su estado actual, el sistema demuestra estabilidad bajo alta concurrencia, con margen de mejora en rendimiento.
