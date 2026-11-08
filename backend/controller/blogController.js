import { Blog } from '../models/index.js';

export const createBlog = async (req, res) => {
    try {
        const { title, category, content } = req.body;

        if (!title || !category || !content) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const blog = await Blog.create({
            title,
            category,
            content,
            userId: req.user.id
        });

        res.status(201).json({
            message: 'Blog created successfully',
            blog
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({
            userId: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({ blogs });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 export const updateBlog = async (req, res) => {
    try {
        const { title, category, content } = req.body;
        const { id } = req.params;

        const blog = await Blog.findOne({
            _id: id,
            userId: req.user.id
        });

        if (!blog) {
            return res.status(404).json({
                message: 'Blog not found'
            });
        }

        blog.title = title;
        blog.category = category;
        blog.content = content;

        await blog.save();

        res.status(200).json({
            message: 'Blog updated successfully',
            blog
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findOneAndDelete({
            _id: id,
            userId: req.user.id
        });

        if (!blog) {
            return res.status(404).json({
                message: 'Blog not found'
            });
        }

        res.status(200).json({
            message: 'Blog deleted successfully'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!blog) {
            return res.status(404).json({
                message: 'Blog not found'
            });
        }

        res.status(200).json({ blog });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};