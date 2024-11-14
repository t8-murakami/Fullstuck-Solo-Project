const express = require('express')
const router = express.Router()
const pathController = require('../../controllers/pathController')

router.get('/paths', pathController.getPaths);
router.post('/paths',pathController.createPath);
router.delete('/paths/:id',pathController.deletePath);


module.exports = router;