/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Crea un nuevo producto
 *     description: Recibe name y price, ambos obligatorios.
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Monitor
 *               price:
 *                 type: number
 *                 example: 250
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Producto agregado
 *                 product:
 *                   type: object
 *       400:
 *         description: Faltan name o price
 *       500:
 *         description: Error interno del servidor
 */
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name || !body.price) {
      return Response.json({ message: "Nombre y precio son requeridos" }, { status: 400 });
    }

    return Response.json({ message: "Producto agregado", product: body }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Error en la solicitud" }, { status: 500 });
  }
}
