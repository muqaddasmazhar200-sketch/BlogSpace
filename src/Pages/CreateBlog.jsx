
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import api from '../api/axios'

const CreateBlog = ({ blogs, setBlogs }) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')

   
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await api.post(
            '/blogs',
            {
                title,
                category,
                content
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        );

        alert(response.data.message);
        setTitle('')
        setCategory('')
        setContent('')

    } catch (error) {
        alert(error.response?.data?.message || 'Blog creation failed');
    }
};


  return (
    <Container fluid className="create-blog-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={8}>
            <div className="create-blog-card">
              <h2 className="fw-bold">Create New Blog</h2>
              <p className="text-secondary mb-4">
                Share your thoughts and stories with the world.
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Blog Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your blog title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Programming">Programming</option>
                    <option value="Education">Education</option>
                    <option value="Lifestyle">Lifestyle</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Blog Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    placeholder="Write your blog here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Publish Blog
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CreateBlog
