// models/project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ['accepted', 'in-progress', 'pending', 'done'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
