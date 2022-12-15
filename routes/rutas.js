const { Router } = require('express');
const router = Router();
const { getDatos, getIne,getLeague, getChamp,getAgente,getCharact} = require('./controlador')

router.get('/getDatos?:api_key?:date', getDatos);
router.get('/getIne/', getIne);
router.get('/getLeague/',getLeague);
router.get('/getChamp/',getChamp);
router.get('/getAgente/',getAgente);
router.get('/getCharact/',getCharact);

module.exports = router;
