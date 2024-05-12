const express = require("express");
const router = express.Router();
const controller = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

//Mostrar todos los productos
router.get('/', controller.showProducts);
router.get('/products', controller.showProducts);

//Devuelve el formulario para subir un artículo nuevo.
router.get('/dashboard/new', authMiddleware.checkSessionMiddleware, controller.formNewProduct);

// Crear un nuevo producto
router.post("/dashboard", authMiddleware.checkSessionMiddleware, controller.createProduct)

//Devolver el detalle de un producto
router.get('/products/:productId', controller.showProductById);
router.get('/dashboard/:productId', authMiddleware.checkSessionMiddleware, controller.showProductById);

//Devuelve el dashboard del administrador con todos los productos
router.get('/dashboard', authMiddleware.checkSessionMiddleware, controller.showProducts);

//Mostrar formulario de actualización producto
router.get('/dashboard/:productId/edit', authMiddleware.checkSessionMiddleware, controller.showEditProduct);

//Actualización producto
router.put('/dashboard/:productId', authMiddleware.checkSessionMiddleware, controller.updateProduct)

//Actualización producto
router.put('/dashboard/:productId', controller.updateProduct)

//Eliminar un producto
router.get('/dashboard/:productId/delete', authMiddleware.checkSessionMiddleware, controller.deleteProduct);

//Mostrar productos por categoría
router.get('/categoria/:categoria', controller.showProductsByCategory);

/* ROUTERS PARA API */

// Mostrar todos los productos API
router.get('/api/products', controller.showProductsAPI);

// Crear un nuevo producto API
router.post("/api/dashboard", controller.createProductAPI);

// Actualización producto API
router.put('/api/dashboard/:_id', controller.updateProductAPI)

// Eliminar producto API
router.delete('/api/dashboard/:_id', controller.deleteProductAPI);

module.exports = router;