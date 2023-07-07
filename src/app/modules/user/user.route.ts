import express from 'express';
import userConttroller from './user.conttroller';
const router = express.Router();

router.post('/create-user', userConttroller.createUser);

export default router;
