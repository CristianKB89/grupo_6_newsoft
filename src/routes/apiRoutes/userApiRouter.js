
const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/apiController/userApiController');

router.get('/api/users/list',userApiController.list);
 router.get('/api/users/:id',userApiController.detail);

module.exports = router;