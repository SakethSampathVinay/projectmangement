import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes.js';
import connectToDB from './config/db.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express(); // Middleware 
app.use(bodyParser.json()); 
app.use(cors());
app.use(helmet());

// connect to the database 
connectToDB();

app.use("/api", projectRoutes);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);


app.listen(5000, () => {
    console.log('Server started on port 5000');
});
