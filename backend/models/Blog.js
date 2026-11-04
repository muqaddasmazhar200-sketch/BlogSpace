import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Published', 'Draft'),
        defaultValue: 'Published'
    }
});

export default Blog;