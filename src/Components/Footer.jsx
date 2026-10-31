import { Container , Col , Row } from "react-bootstrap";
import { Link } from "react-router";

const Footer = () => {
    return(
     <>
      <footer className="blog-footer">
      <Container>
        <Row className="gy-4">
          <Col md={6}>
            <h3 className="footer-brand">
              BlogSpace<span>.</span>
            </h3>
            <p className="footer-text">
              A place to share your ideas, discover stories,
              and inspire the world through writing.
            </p>
          </Col>

          <Col md={3}>
            <h5>Quick Links</h5>
            <Link to="/">Home</Link>
             <Link to="/dashboard">Explore Blogs</Link>
              <Link to="/create-blog">Create Blog</Link>
          </Col>

          <Col md={3}>
            <h5>Account</h5>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
           
          </Col>
        </Row>

        <hr />

        <p className="copyright">
          © {new Date().getFullYear()} BlogSpace. All rights reserved.
        </p>
      </Container>
    </footer>
     </>

    )
}

export default Footer