const express = require('express')
const router = express.Router()
const userController = require('../controllers/usercontrollers');// ../ = previous folder
// Retrieve all users 
router.get('/', userController.findAll);//retrive
// Create a new user
router.post('/', userController.create);//create
// Retrieve a single user with id
router.get('/:id', userController.findOne);
// Update a user with id
router.put('/:id', userController.update);//update
// Delete a user with id
router.delete('/:id', userController.delete);//delete
module.exports = router