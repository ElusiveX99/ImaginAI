import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import imaginaiRoutes from './routes/imaginaiRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imaginai', imaginaiRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from ImaginAI!')
})

const startServer = async () => {
    try {
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
        connectDB(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
    }
}

startServer();