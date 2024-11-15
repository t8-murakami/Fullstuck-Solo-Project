const express = require('express')
const router = express.Router()
const pathController = require('../controllers/pathController')

router.get('/', pathController.getPaths);
router.post('/',pathController.createPath);
router.delete('/:id',pathController.deletePath);


module.exports = router;