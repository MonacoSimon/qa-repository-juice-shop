# Performance Analysis Report – Juice Shop (80 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 80 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 80
* Tiempo promedio (average): 3 s
* Tiempo mínimo (min): 1 s
* Tiempo máximo (max): 7 s
* Mediana (median): 4 s
* Percentil 90 (P90): 5 s
* Percentil 95 (P95): 5 s
* Percentil 99 (P99): 6 s
* Tasa de error: 0 %
* Throughput: 2.6 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 3 segundos se mantiene estable respecto a pruebas anteriores, lo que indica que el sistema logra sostener su rendimiento incluso al aumentar la carga a 80 usuarios.

La mediana de 4 segundos confirma que la mayoría de las solicitudes se procesan en un rango consistente.

El tiempo máximo de 7 segundos representa un leve incremento, pero se mantiene dentro de valores controlados en comparación con escenarios donde aparecen outliers extremos.

---

### Percentiles

* P90: 5 s
* P95: 5 s
* P99: 6 s

Estos valores muestran que:

* el 10 % de las solicitudes supera los 5 segundos
* el 5 % se mantiene en ese mismo rango
* el 1 % alcanza un máximo de 6 segundos

La cercanía entre los percentiles indica una distribución de tiempos de respuesta uniforme, sin presencia de picos críticos.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* todas las solicitudes fueron procesadas correctamente
* el sistema mantiene estabilidad funcional incluso bajo alta concurrencia

Esto es un indicador positivo de robustez del sistema.

---

### Throughput

El throughput de 2.6 requests por segundo representa una mejora respecto a pruebas con menor carga.

Esto sugiere que:

* el sistema logra procesar más solicitudes a medida que aumenta la concurrencia
* existe cierto grado de escalabilidad, aunque limitada

Sin embargo, el valor sigue siendo relativamente bajo para la cantidad de usuarios concurrentes.

---

## Análisis general

El sistema mantiene un comportamiento estable y consistente bajo una carga de 80 usuarios.

Se observa:

* tiempos de respuesta controlados
* ausencia de outliers extremos
* estabilidad completa sin errores
* leve mejora en el throughput

Esto indica que el sistema escala de forma moderada, manteniendo la calidad de respuesta sin degradaciones abruptas.

---

## Conclusión

La aplicación soporta 80 usuarios concurrentes sin errores y con tiempos de respuesta relativamente estables.

Si bien no se observan problemas críticos de rendimiento, los tiempos siguen siendo elevados para escenarios exigentes, y el throughput continúa siendo limitado.

Se recomienda:

* optimizar tiempos de respuesta para mejorar la experiencia del usuario
* analizar la capacidad de escalabilidad del sistema bajo cargas mayores
* complementar con métricas de infraestructura para identificar posibles cuellos de botella

En su estado actual, el sistema demuestra estabilidad bajo carga alta, aunque con margen de mejora en rendimiento.
