## QA – Análisis funcional, accesibilidad y performance
# Descripción

Este módulo presenta un análisis integral de la aplicación OWASP Juice Shop, combinando:

pruebas funcionales automatizadas con Cypress
auditoría de accesibilidad con axe
evaluación de performance con Lighthouse

El objetivo es detectar fallos en la interfaz, problemas de accesibilidad y cuellos de botella de rendimiento.

Herramientas utilizadas
Cypress
axe
Lighthouse
Pruebas funcionales (Cypress)
Escenario ejecutado
Navegación a:
http://localhost:3000/#/search
Validación esperada:
#tbodyid debe ser visible
Resultado

❌ Fallo en la prueba

AssertionError:
Expected to find element: #tbodyid, but never found it.
Análisis del fallo

Durante la ejecución:

Se realizan múltiples requests XHR (API responde correctamente – 200 OK)
La UI no renderiza el elemento esperado #tbodyid
Posibles causas
Selector incorrecto
#tbodyid no pertenece a esta vista (es típico de otras apps como Demoblaze)
Renderizado asincrónico
El DOM aún no está listo al momento de la validación
Cambio en la estructura del frontend
La aplicación usa Angular (SPA), por lo que el contenido se genera dinámicamente
Recomendaciones (testing)
Usar selectores robustos:
cy.get('[data-test="product-list"]')
Esperar correctamente a la carga:
cy.intercept('/rest/products/search*').as('search')
cy.wait('@search')
Evitar IDs inexistentes o heredados de otros proyectos
Accesibilidad (axe + Lighthouse)
Score general
Accesibilidad: 87/100
Problemas detectados
1. Botones sin nombre accesible

Descripción:
Elementos <button> sin texto o atributos accesibles.

Impacto:
Usuarios con lectores de pantalla no pueden interpretar la acción.

Recomendación:

<button aria-label="Agregar al carrito"></button>
2. Elementos ARIA sin nombre

Descripción:
role="dialog" o alertdialog sin etiquetas descriptivas.

Impacto:
Dificulta navegación asistida.

3. Bajo contraste de colores

Descripción:
Relación de contraste insuficiente entre texto y fondo.

Impacto:
Problemas de legibilidad.

Performance (Lighthouse)
Métricas principales
Métrica	Valor	Evaluación
First Contentful Paint (FCP)	4.3 s	Lento
Largest Contentful Paint (LCP)	6.4 s	Crítico
Total Blocking Time (TBT)	840 ms	Alto
Speed Index	4.5 s	Lento
Cumulative Layout Shift (CLS)	0.131	Medio
Diagnóstico de performance
Problemas principales
1. Alto tiempo de ejecución de JavaScript
~2.6 s de ejecución JS
Angular genera carga pesada en el main thread
2. Trabajo excesivo en el hilo principal
~4.2 s bloqueando interacción
3. JavaScript no utilizado
~206 KiB innecesarios
4. CSS no utilizado
~41 KiB desperdiciados
5. Imágenes no optimizadas
sin width ni height
impacto en CLS
6. Long tasks
13 tareas largas detectadas

Esto bloquea la UI y afecta la experiencia del usuario

Buenas prácticas

✔ Score: 100

Incluye:

políticas de seguridad recomendadas (CSP, HSTS sugeridas)
compatibilidad de navegador adecuada
SEO

✔ Score: 100

estructura básica correcta
datos estructurados válidos
Análisis general

La aplicación presenta tres tipos claros de problemas:

1. Funcionales
fallo en test por selector incorrecto o asincronía
desacople entre frontend dinámico y testing
2. Accesibilidad
problemas en etiquetas, ARIA y contraste
impacto directo en usuarios con tecnologías asistivas
3. Performance
carga lenta inicial
exceso de JavaScript
renderizado ineficiente
Recomendaciones generales
Testing
usar data-* selectors
sincronizar con requests (intercepts)
evitar selectores frágiles
Accesibilidad
agregar aria-label
mejorar contraste
validar con WCAG
Performance
reducir bundle JS (tree-shaking)
lazy loading de módulos Angular
optimizar imágenes
eliminar código muerto
Conclusión

El análisis evidencia que, aunque la aplicación funciona a nivel backend (respuestas 200 OK), existen problemas en:

- renderizado del frontend
- calidad de testing automatizado
- accesibilidad
- rendimiento

- No hay fallas críticas, pero sí múltiples puntos de mejora que afectan la experiencia del usuario y la calidad del producto.
