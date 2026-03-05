import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  color?: string;
}

const projectSchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: [{ type: String }],
    image: { type: String, required: true },
    githubLink: { type: String },
    liveLink: { type: String },
    color: { type: String, default: '#00f0ff' },
  },
  { timestamps: true }
);

export default mongoose.model<IProject>('Project', projectSchema);
