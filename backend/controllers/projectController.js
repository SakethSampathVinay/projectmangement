// controllers/projectController.js
import Project from '../models/project.js';

// Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Create new project
export const createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json(newProject);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update project
export const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete project
export const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Calculate completion score
export const calculateCompletionScore = async (req, res) => {
    try {
        const totalProjects = await Project.countDocuments();
        const completedProjects = await Project.countDocuments({ status: 'done' });

        const completionScore = (completedProjects / totalProjects) * 100;
        res.json({ completionScore });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
