import express from 'express';

import { getAllUsers, getUser, insertUser, removeUserById, updateUser, compereLog } from '../controllers/user-ctrl.js';

const usersRouter = express.Router();

usersRouter.get("/all", getAllUsers);
usersRouter.get('/user/:id', getUser);
usersRouter.post("/saveUser", insertUser);
usersRouter.delete('/user/:id', removeUserById);
usersRouter.put('/user/:id', updateUser);
usersRouter.post('/userAuth', compereLog);

export default usersRouter;

