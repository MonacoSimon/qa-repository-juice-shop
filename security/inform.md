## Security – Análisis de seguridad con OWASP ZAP
# Descripción

Este módulo contiene el análisis de seguridad de la aplicación web OWASP Juice Shop, utilizando OWASP ZAP ejecutado en un entorno containerizado con Docker.

El objetivo del análisis es identificar vulnerabilidades, configuraciones inseguras y posibles vectores de ataque mediante escaneo automatizado (baseline), evaluando la postura de seguridad de la aplicación.

Herramienta utilizada
OWASP ZAP (Zed Attack Proxy)
Ejecución mediante contenedor Docker (zaproxy/zap-stable)
Ejecución del análisis

El escaneo se realizó en modo automatizado utilizando el script:

./run.sh

Internamente ejecuta:

docker run -t -u root -v $(pwd):/zap/wrk zaproxy/zap-stable zap-baseline.py -t http://host.docker.internal:3000 -r report.html

Este tipo de análisis:

realiza un escaneo pasivo
identifica problemas de configuración
no ejecuta ataques activos
Resumen de hallazgos
URLs analizadas: 124
Vulnerabilidades críticas: 0
Vulnerabilidades medias: 0
Advertencias (WARN): 8 tipos
Checks pasados: 59

#El análisis no detecta fallas críticas, pero sí múltiples debilidades de configuración.

Distribución de alertas
Tipo de alerta	Riesgo	Frecuencia
CSP Header Not Set	Medio	5
Cross-Domain Misconfiguration (CORS)	Medio	5
Dangerous JS Functions	Medio	2
Cross-Origin-Embedder-Policy Missing	Bajo	10
Cacheable Content	Bajo	6
Deprecated Feature Policy Header	Bajo	5
Timestamp Disclosure (Unix)	Bajo	5
Modern Web Application (informativo)	Info	5
Vulnerabilidades detectadas
Content Security Policy (CSP) no configurada
Riesgo: Medio

Descripción:
No se define una política CSP en las respuestas HTTP.

Impacto:
Aumenta el riesgo de ataques como Cross-Site Scripting (XSS) al no restringir el origen de scripts.

Recomendación:
Implementar cabecera:

Content-Security-Policy: default-src 'self';
Configuración incorrecta Cross-Domain (CORS)
Riesgo: Medio

Descripción:
Se detecta una política CORS permisiva o mal configurada.

Impacto:
Permite que dominios externos interactúen con la aplicación.

Recomendación:
Restringir orígenes permitidos:

Access-Control-Allow-Origin: https://dominio-seguro.com
Uso de funciones JavaScript peligrosas
Riesgo: Medio

Descripción:
Presencia de funciones como eval, setTimeout(string) u otras dinámicas.

Impacto:
Facilita la explotación de XSS.

Recomendación:
Evitar ejecución dinámica de código.

Vulnerabilidades de bajo riesgo
Cross-Origin-Embedder-Policy no configurada

Impacto:
Puede permitir cargas inseguras de recursos.

Recomendación:

Cross-Origin-Embedder-Policy: require-corp
Contenido cacheable

Impacto:
Datos sensibles podrían almacenarse en caché.

Recomendación:

Cache-Control: no-store, no-cache
Deprecated Feature Policy Header

Impacto:
Uso de políticas obsoletas.

Recomendación:
Migrar a Permissions-Policy.

Timestamp Disclosure

Impacto:
Exposición de información interna del servidor.

Recomendación:
Evitar timestamps innecesarios en respuestas.

Hallazgos informativos
Aplicación identificada como SPA (Single Page Application)
Uso de múltiples archivos JS fragmentados (chunks)
Estructura moderna basada en frontend dinámico
Análisis general

La aplicación presenta una postura de seguridad típica de entornos de prueba:

ausencia de cabeceras de seguridad clave
configuraciones permisivas
exposición de metadatos

No se detectaron vulnerabilidades críticas debido a que:

el escaneo fue pasivo
no se ejecutaron ataques activos
Recomendaciones generales
Implementar cabeceras de seguridad:
CSP
HSTS
X-Frame-Options
X-Content-Type-Options
Restringir políticas CORS
Revisar uso de funciones JS inseguras
Ajustar políticas de caché
Reducir exposición de información en respuestas
Conclusión

El análisis evidencia múltiples debilidades de configuración que, aunque no críticas de forma aislada, incrementan la superficie de ataque.

La aplicación requiere tareas de hardening, especialmente en:

cabeceras HTTP
políticas de seguridad del navegador
control de exposición de información
