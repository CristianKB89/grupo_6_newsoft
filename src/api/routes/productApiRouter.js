
const express = require('express');
const router = express.Router();
const userApiController = require('../../api/controllers/productApiController');

router.get('/api/products/list',userApiController.list);
router.get('/api/products/:id',userApiController.detail);

module.exports = router;