import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "./header.css";
function Header() {
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Col sm={10}>
        <Image
          src={require("../assets/logofooter.png")}
          style={{
            width: "20vh",

            marginBottom: "10rem",
          }}
        />
        <h1
          className="heading-header"
          style={{
            color: "#0E2368",
            width: "100%",
            fontSize: "5rem",
            lineHeight: "70px",
            fontWeight: 700,
            fontStyle: "normal",
            marginBottom: "3px",
          }}
        >
          Discover the
          <br />
          <span style={{ color: "#E23744" }}>Best</span> Food <br />
          and Drinks
        </h1>

        <Col
          style={{
            fontFamily: "Open Sans ",
            fontWeight: "400",
            fontSize: "17px",
            lineHeight: "28px",
            margin: "1rem",
          }}
        >
          Naturally made Healthcare Products for the <br />
          better care & support of your body.
        </Col>
        <Col xs={2} sm={1}>
          <Button
            variant="primary"
            style={{
              fontFamily: "Open Sans",
              fontWeight: "700",
              fontSize: "18px",

              width: "190px",
              height: "70px",
              backgroundColor: "#E23744",
              color: "white",
              borderRadius: "34px",

              Padding: "14px, 34px, 14px, 34px",
            }}
          >
            Explore Now!
          </Button>
        </Col>
      </Col>

      <Col xs={2} sm={1}>
        <Image
          src={require("../assets/Pizza.png")}
          alt="pizza image"
          style={{
            width: "600px",
            height: "706px",
            marginTop: "10px",

            borderRadius: "0px 0px 0px 198.902px",
          }}
        />
        <Image
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          src={require("../assets/getintouch.png")}
        ></Image>
      </Col>
    </Row>
  );
}

export default Header;
