const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.home)

router.get('/quienes-somos', mainController.who)

router.get('/registroWeb', mainController.docs)

router.get('/documentos', mainController.pdf)


module.exports = router