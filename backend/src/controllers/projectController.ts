import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel';

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const projects = await Project.find({});
  res.json(projects);
});

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = asyncHandler(async (req: Request, res: Response) => {
  const { title, description, tech, githubLink, liveLink, color } = req.body;
  let imageUrl = '';

  if (req.file) {
    imageUrl = req.file.path;
  } else if (req.body.image) {
    imageUrl = req.body.image; // allow passing image URL string directly
  }

  const project = new Project({
    title,
    description,
    tech: Array.isArray(tech) ? tech : tech?.split(',').map((t: string) => t.trim()) || [],
    image: imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Default placeholder
    githubLink,
    liveLink,
    color,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = asyncHandler(async (req: Request, res: Response) => {
  const { title, description, tech, githubLink, liveLink, color } = req.body;

  const project = await Project.findById(req.params.id);

  if (project) {
    project.title = title || project.title;
    project.description = description || project.description;
    if (tech) {
      project.tech = Array.isArray(tech) ? tech : tech.split(',').map((t: string) => t.trim());
    }
    project.githubLink = githubLink || project.githubLink;
    project.liveLink = liveLink || project.liveLink;
    project.color = color || project.color;

    if (req.file) {
      project.image = req.file.path;
    } else if (req.body.image) {
      project.image = req.body.image;
    }

    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    await project.deleteOne();
    res.json({ message: 'Project removed' });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

export { getProjects, getProjectById, createProject, updateProject, deleteProject };
