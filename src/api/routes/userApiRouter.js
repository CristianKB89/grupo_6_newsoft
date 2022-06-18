
const express = require('express');
const router = express.Router();
const userApiController = require('../../api/controllers/userApiController');

router.get('/api/users/',userApiController.list);
 router.get('/api/users/:id',userApiController.detail);

module.exports = router;