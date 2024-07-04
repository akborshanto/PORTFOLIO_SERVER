const express=require('express');
const { getUser, createUser, getSingleUser, deleteSingleUser } = require('../controller/user.controler');
const router=express.Router()
router.get('/',getUser)
router.post('/',createUser)
router.get('/:id',getSingleUser)
router.delete('/:id',deleteSingleUser)
module.exports= router;