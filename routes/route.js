const express=require('express');
const router=express.Router();
const { createApiData, getAllApiData } = require('../controllers/controller.js');

router.post('/postnumber',createApiData);
router.get("/get", getAllApiData);
module.exports = router;