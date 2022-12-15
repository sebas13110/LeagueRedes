const express = require('express')
const ctrlDatos = require('./controlador');
const user = require('./modelo');
const { body, param, validationResult } = require('express-validator');
var router = express.Router()
router.get('/api', ctrlDatos.findDatos, (req, res) => {
    user.getAll(connection, (data => {
    res.json(data);
    }))
   });

   (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
    }
    let body = req.body;
    user.create(connection, body, (data => {
    res.json(data);
    }))
   };

   module.exports = router;