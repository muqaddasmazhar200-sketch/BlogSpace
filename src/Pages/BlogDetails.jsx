import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../api/axios';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await api.get(`/blogs/${id}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

setBlog(response.data.blog);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

   
    if (loading) return <p>Loading...</p>;
    if (!blog) return <p>Blog not found.</p>;

    return (
        <>
        <div className="container mt-5 pb-5">
            <h2>{blog.title}</h2>
            <p>{blog.category}</p>
            <p>{blog.content}</p>
            <small>{blog.status}</small>
        </div>

       
  </>
    );
};

export default BlogDetails;