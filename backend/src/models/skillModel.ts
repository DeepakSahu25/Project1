import mongoose, { Document, Schema } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  level: number;
  color: string;
  category: string;
}

const skillSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, required: true, min: 0, max: 100 },
    color: { type: String, default: '#00f0ff' },
    category: { type: String, default: 'Frontend' },
  },
  { timestamps: true }
);

export default mongoose.model<ISkill>('Skill', skillSchema);
