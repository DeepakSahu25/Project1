import express from 'express';
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectController';
import { protect, admin } from '../middlewares/authMiddleware';
import { upload } from '../config/cloudinary';

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(protect, admin, upload.single('image'), createProject);

router.route('/:id')
  .get(getProjectById)
  .put(protect, admin, upload.single('image'), updateProject)
  .delete(protect, admin, deleteProject);

export default router;
