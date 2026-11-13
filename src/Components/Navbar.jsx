
import { Container, Button, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isLoggedIn = Boolean(localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
    };

    return (
      
        <BsNavbar expand="lg" className="blog-navbar">
            <Container>
                <BsNavbar.Brand as={Link} to="/" className="brand-name">
                    BlogSpace<span>.</span>
                </BsNavbar.Brand>

                <BsNavbar.Toggle aria-controls="blog-navbar-nav" />

                <BsNavbar.Collapse id="blog-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/dashboard">
                            Explore Blogs
                        </Nav.Link>

                        {isLoggedIn ? (
                            <>
                                <Nav.Link as={Link} to="/create-blog">
                                    Create Blog
                                </Nav.Link>

                                
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>

                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>

                    {isLoggedIn && (
                           <div className="d-flex gap-2">
        <Button variant="primary" as={Link} to="/create-blog">
            Write a Blog
        </Button>
           <Button variant="outline-dark" as={Link} to="/profile">
             My Profile
            </Button>
        <Button variant="outline-secondary" onClick={handleLogout}>
            Logout
        </Button>
    </div>
                    )}
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
        
    );
};

export default Navbar;
