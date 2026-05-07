# API con Next.js

Este proyecto es una API sencilla construida con **Next.js** que proporciona tres endpoints:

- `GET /api/users` → Devuelve una lista de usuarios en formato JSON.
- `GET /api/products` → Devuelve una lista de productos en formato JSON.
- `POST /api/product` → Permite agregar un producto enviando un JSON con `name` y `price`.

## 📦 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/rpiealb297/mi-app-next.git
   cd nextjs-api
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```
## 🚀 Ejecución en local

Para iniciar el servidor en desarrollo:

```bash
npm run dev
```

Esto iniciará un servidor en `http://localhost:3000`.

### 🔗 Endpoints disponibles

- **Usuarios:** `http://localhost:3000/api/users`
- **Productos:** `http://localhost:3000/api/products`
- **Subir producto:** `http://localhost:3000/api/product` (requiere JSON con `name` y `price`: {"name":"producto1", "price":5.5})

## 🌍 Despliegue

Puedes desplegar la API en **Vercel** con un solo comando:

```bash
npm run build
vercel deploy
```

O subirlo a cualquier servidor compatible con **Next.js**.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo y modificarlo libremente.

---

**¡Listo para usar! 🚀**
