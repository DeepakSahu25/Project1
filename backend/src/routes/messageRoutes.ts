import express from 'express';
import { createMessage, getMessages, markMessageRead, deleteMessage } from '../controllers/messageController';
import { protect, admin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .post(createMessage)
  .get(protect, admin, getMessages);

router.route('/:id').delete(protect, admin, deleteMessage);
router.route('/:id/read').put(protect, admin, markMessageRead);

export default router;
