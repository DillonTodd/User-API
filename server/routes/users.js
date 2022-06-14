import express from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express();

// get method to return a list of all users
router.get('/', getUsers);

// get method to return a user by id
router.get('/', getUser);

// post method to create a user
router.post('/', createUser);

// put method to update a user by id
router.put('/:id', updateUser);

// delete method to delete a user by id
router.delete('/:id', deleteUser);

export default router;