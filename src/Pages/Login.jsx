
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import api from '../api/axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await api.post('/auth/login', {
            email,
            password
        });

        alert(response.data.message);
        
        localStorage.setItem('token', response.data.token);
        setEmail('')
        setPassword('')
      

    } catch (error) {
        alert(
            error.response?.data?.message || 'Login failed'
        );
    }
}

  return (
    <Container fluid className="auth-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="auth-card">
              <h2 className="text-center fw-bold">Welcome Back!</h2>

              <p className="text-center text-secondary mb-4">
                Login to continue to BlogSpace
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Login
                </Button>
              </Form>

              <p className="text-center mt-4 mb-0">
                Don't have an account?{' '}
                <Link to="/register">Register here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Login
