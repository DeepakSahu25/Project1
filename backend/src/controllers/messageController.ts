import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Message from '../models/messageModel';

// @desc    Create a new message
// @route   POST /api/messages
// @access  Public
const createMessage = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  const createdMessage = await Message.create({ name, email, message });
  res.status(201).json(createdMessage);
});

// @desc    Get all messages
// @route   GET /api/messages
// @access  Private/Admin
const getMessages = asyncHandler(async (req: Request, res: Response) => {
  const messages = await Message.find({}).sort({ createdAt: -1 });
  res.json(messages);
});

// @desc    Mark message as read
// @route   PUT /api/messages/:id/read
// @access  Private/Admin
const markMessageRead = asyncHandler(async (req: Request, res: Response) => {
  const message = await Message.findById(req.params.id);

  if (message) {
    message.isRead = true;
    const updatedMessage = await message.save();
    res.json(updatedMessage);
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

// @desc    Delete message
// @route   DELETE /api/messages/:id
// @access  Private/Admin
const deleteMessage = asyncHandler(async (req: Request, res: Response) => {
  const message = await Message.findById(req.params.id);

  if (message) {
    await message.deleteOne();
    res.json({ message: 'Message removed' });
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

export { createMessage, getMessages, markMessageRead, deleteMessage };
