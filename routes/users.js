import express from 'express';
import { getUsers, createUsers, getUserByID, updateUser, deleteUser } from '../controllers/users.js'


var router = express.Router();

// [GET] Get all foods
router.get('/', getUsers);

// [GET] Get user by ID
router.get('/:userId', getUserByID);

// [POST] Created an user
router.post('/', createUsers);

// [POST] Update an user
router.post('/update', updateUser);

// [GET] Delete user by ID
router.get('/delete/:userId', deleteUser);


export default router;

