import { Container , Button , Nav , Navbar as BsNavbar  } from "react-bootstrap"
import { Link } from "react-router"


const Navbar = () => {
    return(
        <>
         <BsNavbar expand="lg" className="blog-navbar">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="brand-name">
          BlogSpace<span>.</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="blog-navbar-nav" />

        <BsNavbar.Collapse id="blog-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
           <Nav.Link as={Link} to="/dashboard">Explore Blogs</Nav.Link>

  
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/create-blog"> Create Blog</Nav.Link>
          </Nav>

          <Button variant="primary" as={Link} to="/create-blog">
            Write a Blog
          </Button>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
        
        </>
    )
}

export default Navbar