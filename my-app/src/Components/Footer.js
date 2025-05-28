import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-light py-4 mt-auto bg-[#1A404E]">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5 className="text-info mb-4">CodeMind Learning</h5>
            <p className='pb-3'>
              Empowering future developers through structured learning and mentorship.
            </p>
            <p className='pb-3'>
                Guiding aspiring developers with real-world skills and expert support.
            </p>
            <p className='pb-3'>
                Master coding skills with hands-on projects and community-driven mentorship.
            </p>
          </Col>

          {/* Navigation Links */}
          <Col md={4} className="mb-3">
            <h6 className="text-info mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-decoration-none mb-5">About</a></li>
              <li><a href="/courses" className="text-decoration-none mb-5">Courses</a></li>
              <li><a href="/blog" className="text-decoration-none mb-5">Blog</a></li>
              <li><a href="/contact" className="text-decoration-none mb-5">Contact</a></li>
            </ul>
          </Col>

          {/* Social Links */}
          <Col md={4} className="mb-3">
            <h6 className="text-info mb-4">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="/" className="text-light"><FaFacebook size={20} /></a>
              <a href="/" className="text-light"><FaTwitter size={20} /></a>
              <a href="/" className="text-light"><FaLinkedin size={20} /></a>
              <a href="/" className="text-light"><FaGithub size={20} /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            © {new Date().getFullYear()} CodeMind Learning. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;