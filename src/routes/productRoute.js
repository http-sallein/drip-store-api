import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gerenciamento de produtos
 */

/**
 * @swagger
 * /product/search:
 *   get:
 *     summary: Recupera todos os produtos
 *     description: Obtém uma lista de produtos com base em parâmetros de filtro e paginação.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: limit
 *         type: integer
 *         example: 30
 *         description: Número máximo de itens por página. Use -1 para buscar todos os itens.
 *         required: false
 *       - in: query
 *         name: page
 *         type: integer
 *         example: 2
 *         description: Número da página para a paginação. Ignorado se limit for -1.
 *         required: false
 *       - in: query
 *         name: category_ids
 *         type: string
 *         example: 15,24
 *         description: IDs das categorias para filtrar produtos.
 *         required: false
 *       - in: query
 *         name: price_range
 *         type: string
 *         example: 100-200
 *         description: Faixa de preço para filtrar produtos.
 *         required: false
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Acesso não autorizado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/product/search', getAllProducts);


/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Recupera um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Dados do produto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/product/:id', getProductById);

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/product', authenticateToken, createProduct);

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     summary: Atualiza os dados de um produto
 *     security:
 *       - BearerAuth: [] 
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       204:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/product/:id', authenticateToken, updateProduct);

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Exclui um produto
 *     security:
 *       - BearerAuth: [] 
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     responses:
 *       204:
 *         description: Produto excluído com sucesso
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/product/:id', authenticateToken, deleteProduct);


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do produto.
 *         enable:
 *           type: boolean
 *           description: Indica se o produto está ativo ou não.
 *           default: false
 *         name:
 *           type: string
 *           description: Nome do produto.
 *           example: 'Tênis esportivo'
 *         slug:
 *           type: string
 *           description: Slug do produto.
 *           example: 'tenis-esportivo'
 *         use_in_menu:
 *           type: boolean
 *           description: Indica se o produto deve ser mostrado no menu.
 *           default: false
 *         stock:
 *           type: integer
 *           description: Quantidade em estoque.
 *           default: 0
 *         description:
 *           type: string
 *           description: Descrição do produto.
 *           example: 'Tênis confortável para práticas esportivas'
 *         price:
 *           type: number
 *           format: float
 *           description: Preço do produto.
 *           example: 199.99
 *         price_with_discount:
 *           type: number
 *           format: float
 *           description: Preço com desconto do produto.
 *           example: 149.99
 *         images:
 *           type: array
 *           description: Imagens do produto.
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID da imagem.
 *               content:
 *                 type: string
 *                 description: URL da imagem.
 *               enable:
 *                 type: boolean
 *                 description: Se a imagem está habilitada ou não.
 *         category_ids:
 *           type: array
 *           items:
 *             type: integer
 *           description: IDs das categorias associadas ao produto.
 *           example: [1, 15, 24, 68]
 *       required:
 *         - name
 *         - slug
 *         - price
 *         - price_with_discount
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário.
 *         first_name:
 *           type: string
 *           description: Nome do usuário.
 *           example: 'João'
 *         sur_name:
 *           type: string
 *           description: Sobrenome do usuário.
 *           example: 'Silva'
 *         email:
 *           type: string
 *           description: Email do usuário.
 *           example: 'joao.silva@example.com'
 *         password:
 *           type: string
 *           description: Senha do usuário (hash).
 *           example: '$2b$10$kWjX8dX/tJfAFOZnAl.p9OyywH5zHL7Jm76oyFCUOunZ42TAlFzZO'
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Data e hora em que o usuário foi criado.
 *           example: '2024-08-18T12:34:56Z'
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Data e hora da última atualização do usuário.
 *           example: '2024-08-18T12:34:56Z'
 *       required:
 *         - first_name
 *         - sur_name
 *         - email
 *         - password
 *       example:
 *         id: 1
 *         first_name: 'João'
 *         sur_name: 'Silva'
 *         email: 'joao.silva@example.com'
 *         password: '$2b$10$kWjX8dX/tJfAFOZnAl.p9OyywH5zHL7Jm76oyFCUOunZ42TAlFzZO'
 *         created_at: '2024-08-18T12:34:56Z'
 *         updated_at: '2024-08-18T12:34:56Z'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da categoria.
 *           example: 1
 *         name:
 *           type: string
 *           description: Nome da categoria.
 *           example: 'Roupas'
 *         slug:
 *           type: string
 *           description: Slug da categoria.
 *           example: 'roupas'
 *         use_in_menu:
 *           type: boolean
 *           description: Indica se a categoria deve ser mostrada no menu.
 *           default: false
 *       required:
 *         - name
 *         - slug
 *       example:
 *         id: 1
 *         name: 'Roupas'
 *         slug: 'roupas'
 *         use_in_menu: false
 */


export default router;
