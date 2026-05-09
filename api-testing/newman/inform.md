## Informe de pruebas con Newman (API Testing)
Colección de pruebas ejecutada utilizando Newman (CLI de Postman).
El objetivo de las pruebas fue validar endpoints REST y endpoints funcionales de la aplicación vulnerable OWASP Juice Shop.
Resumen de ejecución

┌─────────────────────────┬─────────────────────┬────────────────────┐
│ │ executed │ failed │
├─────────────────────────┼─────────────────────┼────────────────────┤
│ iterations │ 1 │ 0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│ requests │ 9 │ 0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│ test-scripts │ 9 │ 0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│ prerequest-scripts │ 1 │ 0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│ assertions │ 43 │ 0 │
├─────────────────────────┴─────────────────────┴────────────────────┤
│ total run duration: 565ms │
├──────────────────────────────────────────────────────────────────────┤
│ total data received: 94.55kB (approx) │
├──────────────────────────────────────────────────────────────────────┤
│ average response time: 33ms │
│ [min: 18ms, max: 57ms, s.d.: 11ms] │
└──────────────────────────────────────────────────────────────────────┘

## Casos de prueba ejecutados
- GET requests
Get index
GET /
Status: 200 OK
Status code correcto
Respuesta HTML válida
Contiene contenido esperado de la aplicación
Tiempo de respuesta aceptable
Respuesta no vacía
List products
GET /rest/products/search?q=
Status: 200 OK
Respuesta JSON válida
Listado de productos obtenido correctamente
Validación de campos requeridos
Tiempo de respuesta aceptable
Respuesta no vacía
List a product
GET /rest/products/search?q=apple
Status: 200 OK
Respuesta JSON válida
Producto encontrado correctamente
Tiempo de respuesta aceptable
Respuesta no vacía
Get a product by id
GET /api/products/2
Status: 200 OK
Respuesta JSON válida
Obtención correcta del producto por ID
Tiempo de respuesta aceptable
Respuesta no vacía
Security questions
GET /api/SecurityQuestions
Status: 200 OK
Respuesta JSON válida
Información de preguntas de seguridad obtenida correctamente
Validación de estructura de paginación
Tiempo de respuesta aceptable
Respuesta no vacía
Get feedbacks
GET /api/Feedbacks
Status: 200 OK
Respuesta JSON válida
Información de feedbacks obtenida correctamente
Validación de estructura de paginación
Tiempo de respuesta aceptable
Respuesta no vacía
POST requests
Create account
POST /api/Users
Status: 201 Created
Creación exitosa de usuario
Generación correcta de ID
Tiempo de respuesta aceptable
Respuesta no vacía
Security answer
POST /api/SecurityAnswers
Status: 201 Created
Respuesta JSON válida
Asociación correcta de respuesta de seguridad
Generación correcta de ID
Tiempo de respuesta aceptable
Respuesta no vacía
Login
POST /rest/user/login
Status: 200 OK
Login ejecutado correctamente
Generación de token JWT válida
Validación de datos del usuario autenticado
Tiempo de respuesta aceptable
Respuesta no vacía
Conclusiones
100% de requests ejecutados correctamente
0 errores funcionales detectados
API estable bajo una ejecución simple
Tiempos de respuesta considerablemente bajos
Correcta validación de endpoints REST y endpoints internos de la aplicación
Entorno de prueba
Plataforma: OWASP Juice Shop
Herramienta: Postman + Newman
Tipo de pruebas: API Testing
Ejecución: local mediante CLI
Base URL: http://localhost:3000
Observaciones QA
Los endpoints REST muestran buena estabilidad y tiempos de respuesta bajos.
La autenticación genera correctamente tokens JWT reutilizables para escenarios autenticados.
La aplicación permite validar tanto endpoints funcionales (/rest) como endpoints internos (/api).
