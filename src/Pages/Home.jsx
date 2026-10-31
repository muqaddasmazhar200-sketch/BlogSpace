import {Container , Col , Row , Button} from 'react-bootstrap'
import { Link } from 'react-router'

const Home = () => {

    return(
        <>
        
      
<Container fluid>
  <Container>
    <Row className="align-items-center py-5 home-hero">
      <Col md={7}>
        <h1 className="display-4 fw-bold">
          Share Your Stories with the World
        </h1>

        <p className="lead text-secondary mt-3">
          Discover interesting blogs, share your ideas, and inspire others.
        </p>

        <Button variant="primary" size="lg">
          Explore Blogs
        </Button>
      </Col>

      <Col md={5}>
        <div className="hero-card text-center">
          <h2>📝</h2>
          <h3>Your Story Matters</h3>
          <p className="text-secondary">
            Read, Write and Inspire.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</Container>
      
      <Container fluid className="latest-section py-5">
  <Container>
    <Row>
      <Col className="text-center">
        <h2>Explore Latest Blogs</h2>
        <p>Discover fresh ideas, useful tips, and inspiring stories.</p>
      </Col>
    </Row>

    <Row className="g-4">
      <Col md={4}>
        <div className="blog-card h-100">
          <div className="blog-image image-one">
            <span>💻</span>
          </div>
          <div className="p-4">
            <span className="blog-category">Technology</span>
            <h4 className="mt-3">Getting Started with React</h4>
            <p className="text-secondary">
              Discover how React helps you create modern user interfaces.
            </p>
            <Button variant="link" className="p-0 text-decoration-none">
              Read More →
            </Button>
          </div>
        </div>
      </Col>
        <Col md={4}>
        <div className="blog-card h-100">
          <div className="blog-image image-two">
            <span>🚀</span>
          </div>
          <div className="p-4">
            <span className="blog-category">Development</span>
            <h4 className="mt-3">Your Web Development Journey</h4>
            <p className="text-secondary">
              Learn the essential skills for building amazing websites.
            </p>
            <Button variant="link" className="p-0 text-decoration-none">
              Read More →
            </Button>
          </div>
        </div>
      </Col>
       <Col md={4}>
        <div className="blog-card h-100">
          <div className="blog-image image-three">
            <span>✍️</span>
          </div>
          <div className="p-4">
            <span className="blog-category">Writing</span>
            <h4 className="mt-3">The Art of Sharing Ideas</h4>
            <p className="text-secondary">
              Turn your thoughts into stories that people love to read.
            </p>
            <Button variant="link" className="p-0 text-decoration-none">
              Read More →
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</Container>


<Container fluid className="cta-section py-5">
  <Container>
    <Row className="justify-content-center text-center">
      <Col md={8}>
        <h2 className="fw-bold">
          Have a Story to Share?
        </h2>

        <p className="mt-3">
          Start writing today and share your thoughts with the world.
        </p>

       <Button
  as={Link}
  to="/create-blog"
  variant="light"
  size="lg"
  className="mt-3"
>
  Start Writing
</Button>
      </Col>
    </Row>
  </Container>
</Container>

        
        </>
    )
}

export default Home