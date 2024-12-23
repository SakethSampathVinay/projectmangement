// routes/projectRoutes.js
import express from 'express';
import { getAllProjects, createProject, updateProject, deleteProject, calculateCompletionScore } from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects', getAllProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/completion-score', calculateCompletionScore);

export default router;
