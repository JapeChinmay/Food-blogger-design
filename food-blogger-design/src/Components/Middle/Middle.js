import React from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Middle() {
  return (
    <Container
      fluid
      style={{
        height: "80vh",
        marginTop: "8rem",
        background:
          " linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
      }}
    >
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Col xs={12} sm={6}>
          <Image
            src={require("../assets/food-image.png")}
            alt="About Us"
            fluid
            style={{
              width: "60vh",
              height: "70vh",
              position: "relative",
              left: "210px",
            }}
          />
        </Col>
        <Col xs={12} sm={6}>
          <h2
            style={{
              color: "#0E2368",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontSize: "45px",
              lineHeight: "27px",
              fontWeight: "600",
              marginTop: "10rem",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontFamily: "Open Sans",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the 1500s, when an unknown <br />
            printer took a galley of type
            <br />
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <Button
            style={{
              fontFamily: "SOurce Sans Pro",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "36px",
              letterSpacing: "3%",
              backgroundColor: "#E23744",
              padding: "3px 26px",
              gap: "10px",
              borderRadius: "22px",
            }}
          >
            read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Middle;
