
import { Container, Row, Col, Card, Button , Form , Modal } from 'react-bootstrap'
import { Link } from 'react-router'
import { useState , useEffect } from 'react'
import api from '../api/axios'

const Dashboard = ({ blogs, setBlogs }) => {


 const [editId, setEditId] = useState(null)
const [editTitle, setEditTitle] = useState('')
const [editContent, setEditContent] = useState('')
const [editCategory, setEditCategory] = useState('')

 const handleEdit = (blog) => {
    setEditId(blog._id);
    setEditTitle(blog.title);
    setEditCategory(blog.category);
    setEditContent(blog.content);
};

 const handleUpdate = async () => {
    try {
        const response = await api.put(
            `/blogs/${editId}`,
            {
                title: editTitle,
                category: editCategory,
                content: editContent
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        );

        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog._id === editId ? response.data.blog : blog
            )
        );

        setEditId(null);
        setEditTitle('');
        setEditCategory('');
        setEditContent('');

        alert(response.data.message);

    } catch (error) {
        alert(error.response?.data?.message || 'Blog update failed');
    }
};
 const countPublished = blogs.filter((item) => item.status === 'Published' );
 const countDraft = blogs.filter((item) => item.status === 'Draft');
 
 const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
        'Are you sure you want to delete this blog?'
    );

    if (!confirmDelete) return;

    try {
        const response = await api.delete(`/blogs/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        setBlogs((prevBlogs) =>
            prevBlogs.filter((blog) => blog.id !== id)
        );

        alert(response.data.message);

    } catch (error) {
        alert(error.response?.data?.message || 'Delete failed');
    }
};

useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const response = await api.get('/blogs', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            setBlogs(response.data.blogs);

        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    fetchBlogs();
}, []);

  return (
    <>
    <Container fluid className="dashboard-section py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Dashboard</h2>
            <p className="text-secondary">
              Welcome back! Manage your blogs here.
            </p>
          </div>

          <Button as={Link} to="/create-blog" variant="primary">
            + Create Blog
          </Button>
        </div>

        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <h6 className="text-secondary">Total Blogs</h6>
                <h2 className="fw-bold">{blogs.length}</h2>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <h6 className="text-secondary">Published Blogs</h6>
                <h2 className="fw-bold">{countPublished.length}</h2>
              </Card.Body>
            
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <h6 className="text-secondary">Draft Blogs</h6>
                <h2 className="fw-bold">{countDraft.length}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
<Modal show={editId !== null} onHide={() => setEditId(null)} centered>
  <Modal.Header closeButton>
    <Modal.Title>Edit Blog</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <Form.Group className="mb-3">
  <Form.Label>Category</Form.Label>
  <Form.Select
    value={editCategory}
    onChange={(e) => setEditCategory(e.target.value)}
  >
    <option value="">Select Category</option>
    <option value="Technology">Technology</option>
    <option value="Programming">Programming</option>
    <option value="Education">Education</option>
    <option value="Lifestyle">Lifestyle</option>
  </Form.Select>
</Form.Group>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Blog Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
      </Form.Group>
    </Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() => setEditId(null)}>
      Cancel
    </Button>
    <Button onClick={handleUpdate}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>


        <h4 className="fw-bold mb-4">My Blogs</h4>
         
{blogs.length === 0 ? (
  <div className="text-center py-5">
    <h4 className="fw-bold">No Blogs Yet!</h4>
    <p className="text-secondary">
      You haven't created any blogs yet. Start writing today!
    </p>

    <Button as={Link} to="/create-blog" variant="primary">
      + Create Your First Blog
    </Button>
  </div>
) : (
  blogs.map((blog) => (
    <Card key={blog._id} className="dashboard-card mb-3">
      <Card.Body>
       <Card.Body>
      <div className="d-flex justify-content-between align-items-start">

       
        <div>
          <h5>{blog.title}</h5>
        <p className="text-primary mb-2">
         {blog.category}
         </p>

          <p className="text-secondary">
            {blog.content}
          </p>

          <span className="badge bg-success">{blog.status}</span>
        </div>

       
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={() => handleEdit(blog)}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => handleDelete(blog._id)}
          >
            Delete
          </Button>
          <Button
           as={Link}
           to={`/blog/${blog._id}`}
           variant="info"
>
           View Details
             </Button>
        </div>

      </div>
    </Card.Body>
      </Card.Body>
    </Card>
  ))
)}

        
      </Container>
    </Container>

   
    </>
  )
}

export default Dashboard
