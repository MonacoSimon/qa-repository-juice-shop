## Conclusión final

La aplicación OWASP Juice Shop cumple correctamente su objetivo como entorno vulnerable 
orientado al aprendizaje y práctica de testing funcional, automatización, seguridad y QA 
integral.

A lo largo del proyecto se implementó un enfoque de testing completo, incluyendo:

- pruebas funcionales manuales
- automatización E2E con Cypress
- testing de APIs con Postman y Newman
- pruebas de rendimiento con JMeter
- análisis de seguridad con OWASP ZAP
- auditorías de accesibilidad con Axe y Lighthouse
- integración continua mediante Jenkins
- ejecución centralizada utilizando Docker y Docker Compose

Uno de los principales desafíos técnicos del proyecto fue la integración entre múltiples 
contenedores Docker, especialmente la comunicación entre:

- el contenedor de OWASP Juice Shop
- los contenedores de testing
- Jenkins
- Docker Compose
- las herramientas de automatización y seguridad

La resolución de problemas relacionados con networking, puertos, `localhost`, 
`host.docker.internal` y permisos de Docker representó una parte importante del proceso 
de implementación.

La incorporación de Docker y Docker Compose permitió construir un entorno reproducible, 
portable y desacoplado del sistema operativo local, facilitando la automatización y 
la ejecución consistente de pruebas.

Además, Jenkins permitió centralizar el pipeline de testing, automatizando:

1. el levantamiento de Juice Shop
2. la ejecución paralela de pruebas
3. la recolección de resultados
4. la generación de evidencias y reportes

Desde el punto de vista funcional, la aplicación presenta múltiples vulnerabilidades y 
comportamientos inseguros diseñados intencionalmente para el entrenamiento en seguridad.

Durante las pruebas se identificaron escenarios como:

- SQL Injection
- fallos de autenticación
- exposición de información sensible
- problemas de validación
- configuraciones inseguras
- vulnerabilidades detectadas por OWASP ZAP

Esto permitió validar el funcionamiento de herramientas de seguridad ofensiva y testing 
automatizado sobre una aplicación vulnerable realista.

En términos de rendimiento, el sistema mostró degradación progresiva bajo escenarios de 
mayor carga de usuarios concurrentes, especialmente en pruebas de 80 y 100 usuarios, 
aunque manteniendo disponibilidad general del servicio.

Respecto a accesibilidad, se identificaron distintos problemas relacionados con:

- contraste de colores
- etiquetas faltantes
- atributos ARIA incompletos
- estructura HTML mejorable

El uso combinado de Cypress, Newman, JMeter y OWASP ZAP permitió automatizar distintos 
tipos de pruebas dentro de una misma arquitectura basada en contenedores, centralizando 
evidencias, reportes y resultados.

En conclusión, el proyecto permitió construir un entorno QA completo y altamente 
automatizado, integrando múltiples herramientas modernas de testing sobre una aplicación 
realista y vulnerable.

Además de los objetivos funcionales y de seguridad, el proyecto sirvió para profundizar 
conocimientos sobre:

- automatización de pruebas
- integración continua
- contenedorización
- pipelines CI/CD
- networking Docker
- ejecución paralela de pruebas
- testing de seguridad ofensiva
- performance testing
- accesibilidad web

Se recomienda continuar evolucionando el proyecto mediante:

- integración con servicios cloud como AWS y LocalStack
- generación automática de reportes centralizados
- incorporación de análisis estático
- ejecución distribuida de pruebas
- monitoreo continuo
- integración con dashboards y métricas

El enfoque basado en Docker y Jenkins representa una base sólida para escalar el entorno 
de testing hacia escenarios más cercanos a entornos reales de QA profesional.
