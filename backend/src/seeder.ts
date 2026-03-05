import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db';
import User from './models/userModel';
import Project from './models/projectModel';
import Skill from './models/skillModel';
import Message from './models/messageModel';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // 1. Clear existing data
    await User.deleteMany();
    await Project.deleteMany();
    await Skill.deleteMany();
    await Message.deleteMany();

    // 2. Insert Default Admin
    const createdUsers = await User.create([
      {
        name: 'Admin User',
        email: 'admin@portfolio.com',
        password: 'password123', // Will be hashed by pre-save middleware
        role: 'admin',
      },
    ]);

    const adminUserId = createdUsers[0]._id;

    // 3. Insert Sample Skills
    const sampleSkills = [
      { name: 'React', level: 95, color: '#00f0ff', category: 'Frontend' },
      { name: 'Node.js', level: 85, color: '#68a063', category: 'Backend' },
      { name: 'MongoDB', level: 80, color: '#4DB33D', category: 'Database' },
      { name: 'TypeScript', level: 90, color: '#3178c6', category: 'Language' },
    ];
    await Skill.insertMany(sampleSkills);

    // 4. Insert Sample Projects
    const sampleProjects = [
      {
        title: 'Cyber E-Commerce',
        description: 'A fully functional futuristic e-commerce platform built with Next.js and Stripe.',
        tech: ['Next.js', 'Tailwind', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        githubLink: 'https://github.com',
        liveLink: 'https://vercel.com',
        color: '#00f0ff'
      },
      {
        title: 'Neon Server Monitor',
        description: 'Real-time data visualization dashboard for server metrics.',
        tech: ['React', 'D3.js', 'Socket.io', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        githubLink: 'https://github.com',
        liveLink: 'https://vercel.com',
        color: '#b026ff'
      }
    ];
    await Project.insertMany(sampleProjects);

    // 5. Insert Sample Messages
    const sampleMessages = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hey, I saw your portfolio and loved the cyberpunk aesthetic. Are you available for freelance work?',
        isRead: false,
      },
      {
        name: 'Jane Smith',
        email: 'jane@techcorp.com',
        message: 'We are looking for a skilled React developer. Let us know if you are interested in a full-time position.',
        isRead: true,
      }
    ];
    await Message.insertMany(sampleMessages);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Project.deleteMany();
    await Skill.deleteMany();
    await Message.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error destroying data: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
