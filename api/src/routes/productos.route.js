const express = require('express');
const router = express.Router();
const { getProductos, createProducto, getProductoById, updateProducto, deleteProducto } = require('../controllers/productos.controller');

router.get('/', getProductos);
router.post('/', createProducto);
router.get('/:id', getProductoById);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;