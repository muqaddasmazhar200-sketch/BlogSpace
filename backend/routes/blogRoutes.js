import express from 'express';
import { createBlog , getBlogs , updateBlog , deleteBlog} from '../controller/blogController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createBlog);
router.get('/', verifyToken, getBlogs);
router.put('/:id', verifyToken, updateBlog);
router.delete('/:id', verifyToken, deleteBlog);

export default router;