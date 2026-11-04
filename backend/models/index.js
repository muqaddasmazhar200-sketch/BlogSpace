import User from './User.js';
import Blog from './Blog.js';

// One User can have many Blogs
User.hasMany(Blog, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

// Each Blog belongs to one User
Blog.belongsTo(User, {
    foreignKey: 'userId'
});

export { User, Blog };