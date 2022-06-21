
const express = require('express');
const router = express.Router();
const productApiController = require('../../api/controllers/productApiController');

router.get('/api/products',productApiController.list);
router.get('/api/products/:id',productApiController.detail);
router.get('/api/dashboard/products',productApiController.listadoProductos);
router.get('/api/dashboard/categories',productApiController.listadoCategorias);

module.exports = router;