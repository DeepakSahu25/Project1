import mongoose, { Document, Schema } from 'mongoose';

export interface IExperience extends Document {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experienceSchema: Schema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    period: { type: String, required: true },
    description: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IExperience>('Experience', experienceSchema);
