# Mi App Next.js — API con Swagger

API REST construida con Next.js y documentada con Swagger UI.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/users` | Lista de usuarios |
| GET | `/api/products` | Lista de productos |
| POST | `/api/product` | Crear un producto |

## Instalación

```bash
git clone <tu-repositorio>
cd mi-app-next
npm install
```

## Uso

```bash
npm run dev
```

- API: `http://localhost:3000`
- Documentación: `http://localhost:3000/docs`

## Integración de Swagger

Se añadieron las siguientes dependencias:

```bash
npm install swagger-jsdoc swagger-ui-react
```

Y se crearon tres archivos nuevos siguiendo la documentación oficial de cada librería:

**`src/lib/swagger.js`** — configuración central de swagger-jsdoc. Define el título, versión y dónde buscar los comentarios `@swagger` en el código. Basado en la [documentación de swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc).

**`src/app/api/docs/route.js`** — endpoint de Next.js que expone el JSON generado por swagger-jsdoc. Necesario para que Swagger UI pueda leer la documentación.

**`src/app/docs/page.jsx`** — página que renderiza Swagger UI usando el componente `swagger-ui-react`. Se carga con `dynamic` para evitar problemas de compatibilidad con el renderizado en servidor de Next.js 15. Basado en la [documentación de swagger-ui-react](https://github.com/swagger-api/swagger-ui).

Los tres endpoints originales (`users`, `products`, `product`) se modificaron añadiendo comentarios `@swagger` siguiendo la [especificación OpenAPI 3.0](https://swagger.io/specification/), que es el estándar que swagger-jsdoc interpreta para generar la documentación automáticamente.

## Tecnologías

- [Next.js](https://nextjs.org/)
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)
- [swagger-ui-react](https://github.com/swagger-api/swagger-ui)
