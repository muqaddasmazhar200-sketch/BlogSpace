import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import './models/index.js'
import blogRoutes from './routes/blogRoutes.js'

dotenv.config()


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth' , authRoutes)
app.use('/api/blogs', blogRoutes);

app.get("/", (req, res) => {
  res.send("BlogSpace Backend is Running!");
});

const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL Database Connected');

        await sequelize.sync({ alter: true });
        console.log('Database Tables Created');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Database Connection Failed:', error);
    }
};

startServer();