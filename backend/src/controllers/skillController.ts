import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Skill from '../models/skillModel';

// @desc    Fetch all skills
// @route   GET /api/skills
// @access  Public
const getSkills = asyncHandler(async (req: Request, res: Response) => {
  const skills = await Skill.find({}).sort({ level: -1 });
  res.json(skills);
});

// @desc    Create a skill
// @route   POST /api/skills
// @access  Private/Admin
const createSkill = asyncHandler(async (req: Request, res: Response) => {
  const { name, level, color, category } = req.body;
  const skill = await Skill.create({ name, level, color, category });
  res.status(201).json(skill);
});

// @desc    Update a skill
// @route   PUT /api/skills/:id
// @access  Private/Admin
const updateSkill = asyncHandler(async (req: Request, res: Response) => {
  const { name, level, color, category } = req.body;
  const skill = await Skill.findById(req.params.id);

  if (skill) {
    skill.name = name || skill.name;
    skill.level = level !== undefined ? level : skill.level;
    skill.color = color || skill.color;
    skill.category = category || skill.category;

    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } else {
    res.status(404);
    throw new Error('Skill not found');
  }
});

// @desc    Delete a skill
// @route   DELETE /api/skills/:id
// @access  Private/Admin
const deleteSkill = asyncHandler(async (req: Request, res: Response) => {
  const skill = await Skill.findById(req.params.id);

  if (skill) {
    await skill.deleteOne();
    res.json({ message: 'Skill removed' });
  } else {
    res.status(404);
    throw new Error('Skill not found');
  }
});

export { getSkills, createSkill, updateSkill, deleteSkill };
