/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene la lista de productos
 *     description: Devuelve un array con todos los productos disponibles.
 *     tags:
 *       - Productos
 *     responses:
 *       200:
 *         description: Lista de productos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Laptop
 *                   price:
 *                     type: number
 *                     example: 1000
 */
export async function GET() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
  ];

  return Response.json(products, { status: 200 });
}
