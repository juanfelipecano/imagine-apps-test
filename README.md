# 📚 Course Management App

Aplicación web para la gestión de cursos, usuarios inscritos y estadísticas, construida con **React**, **Redux**, **React Router**, y **CSS Modules**. La aplicación permite:

- Ver listado de cursos con paginación y edición.
- Registrar y actualizar cursos desde un formulario.
- Ver usuarios registrados, filtrar por nombre o email, y visualizar los cursos inscritos.
- Visualizar métricas clave mediante gráficas.
- Usar autenticación básica y proteger rutas según sesión.

---

## 🚀 Instrucciones para correr el proyecto localmente

### 1. Clonar el repositorio

`git clone https://github.com/juanfelipecano/imagine-apps-test.git`

`cd imagine-apps-test`

### 2. Instalar dependencias

`npm install`

### 3. Iniciar la app en modo desarrollo

`npm run dev`

> El proyecto estará disponible en \`http://localhost:5173\` (usando Vite).

### 4. Ejecutar pruebas

`npm run test`

---

## 🧠 Decisiones técnicas

- **Redux Toolkit**: Para el manejo global del estado (cursos), permitiendo escalar fácilmente.
- **React Router**: Para navegación y control de rutas públicas y privadas (basado en localStorage).
- **CSS Modules**: Para estilos encapsulados por componente, evitando colisiones.
- **Skeleton Loaders**: Mejora de experiencia de usuario mientras se cargan datos asíncronos.
- **Paginator separado**: Se creó un componente reutilizable para control de paginación.
- **Modularidad**: Separación clara entre presentación (\`Course\`, \`User\`, etc.) y lógica (\`hooks\`, \`store\`, etc.).

---

## 📌 Requisitos

- Node.js >= 18
- npm >= 9
