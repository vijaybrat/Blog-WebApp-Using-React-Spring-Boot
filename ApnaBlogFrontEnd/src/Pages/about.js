import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
      <Row style={{ marginTop: "100px" }}>
        <Col xs={12} lg={6}>
          <img
            className="img-fluid rounded"
            loading="lazy"
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp"
            alt=""
          />
        </Col>
        <Col xs={12} lg={6}>
          <h2 className="h1 mb-3">About Our Apna Blog</h2>
          <p className="lead fs-4 text-secondary mb-3">
            Welcome to our blogging platform, where creativity meets community.
            We empower writers to share their stories, insights, and expertise,
            while readers engage in meaningful discussions and discover new
            perspectives.
          </p>
          <p className="mb-5">
            Whether you're a seasoned blogger or just starting your journey, our
            platform provides the tools and support you need to thrive. Join us
            in building a vibrant community of passionate writers and curious
            readers.
          </p>
          <div className="row gy-4 gy-md-0 gx-xxl-5X">
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="me-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-gear-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-3">Easy To Use</h4>
                  <p className="text-secondary mb-0">
                  We are building this website for users to easily read all the articles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="me-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-fire"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-3">Best platform</h4>
                  <p className="text-secondary mb-0">
                    We believe in innovation by merging primary with elaborate
                    ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
