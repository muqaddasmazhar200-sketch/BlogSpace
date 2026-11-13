
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { FaUserCircle, FaEnvelope, FaUser } from 'react-icons/fa';
import api from '../api/axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await api.get('/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data.user);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getProfile();
    }, []);

    if (loading) {
        return <div className="text-center py-5"><Spinner /></div>;
    }

    if (!user) {
        return <p className="text-center py-5">Unable to load profile.</p>;
    }

    return (
        <div className="bg-light min-vh-100 py-5">
            <Container>
                <h2 className="fw-bold mb-2">My Profile</h2>
                <p className="text-secondary mb-4">
                    Manage your personal account information
                </p>

                <Row className="g-4">
                    <Col lg={4}>
                        <Card className="border-0 shadow-sm rounded-4 text-center p-4 h-100">
                            <div className="mb-3">
                                <FaUserCircle size={100} className="text-primary" />
                            </div>

                            <h4 className="fw-bold">{user.name}</h4>
                            <p className="text-secondary">{user.email}</p>

                            <span className="badge bg-primary-subtle text-primary px-3 py-2 mx-auto">
                                BlogSpace Member
                            </span>
                        </Card>
                    </Col>

                    <Col lg={8}>
                        <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
                            <h5 className="fw-bold mb-4">Personal Information</h5>

                            <div className="d-flex align-items-center gap-3 border-bottom pb-3 mb-3">
                                <FaUser className="text-primary" size={20} />
                                <div>
                                    <small className="text-secondary">Full Name</small>
                                    <h6 className="mb-0">{user.name}</h6>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <FaEnvelope className="text-primary" size={20} />
                                <div>
                                    <small className="text-secondary">Email Address</small>
                                    <h6 className="mb-0">{user.email}</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;
