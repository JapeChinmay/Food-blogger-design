import "./latestArticle.css";
import constants from "../constants/constants";

import Col from "react-bootstrap/Col";
import React, { useState } from "react";

import { Card, Image, Button } from "react-bootstrap";
import { Fragment } from "react";

function LatestArticle() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = constants.slice(firstCardIndex, lastCardIndex);
  const totalPages = Math.ceil(constants.length / cardsPerPage);

  return (
    <Fragment className="article-container">
      <h3
        className="Heading-article-section"
        style={{
          fontFamily: "Source Sans Pro",
          weight: "600",
          lineHeight: "42px",
          letterSpacing: "4%",
          fontSize: "40px",
          color: "#0E2368",
        }}
      >
        Latest Articles
      </h3>
      <Fragment className="col-container">
        <Col className="container-card">
          {currentCards.map((article, idx) => {
            return (
              <Card
                className="text-center"
                style={{
                  height: "70vh",
                  borderRadius: "20px",
                }}
              >
                <Image
                  src={require("../assets/tomatos.png")}
                  alt=""
                  rounded
                  style={{
                    borderRadius: "10px",
                    width: "80%",
                    height: "50%",
                    marginTop: "27px",
                    marginLeft: "27px",
                    marginRight: "27px",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    key={idx}
                    style={{
                      fontFamily: "Source  Sans Pro",
                      fontStyle: "normal",
                      fontSize: "20px",
                      color: "#0E2368",
                      fontWeight: "700",
                      lineHeight: "27px",
                      marginBottom: "1rem",
                    }}
                  >
                    {article.heading}
                  </Card.Title>
                  <Card.Text
                    key={idx}
                    style={{
                      fontFamily: "Open Sans",
                      weight: "400",
                      fontStyle: "normal",
                      fontSize: "15px",
                    }}
                  >
                    {article.content}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      borderRadius: "25px",
                      border: "2px solid black",
                      padding: "10px 20px",
                      background: "white",
                      color: "black",
                      left: "20px",
                      bottom: "20px",
                      position: "absolute",
                    }}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <p
            style={{ marginRight: "20px" }}
          >{`${currentPage}/${totalPages}`}</p>
          {currentPage !== 1 && (
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              style={{ marginRight: "20px" }}
            >
              Previous
            </Button>
          )}
          {currentPage !== totalPages && (
            <Button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </Button>
          )}
        </div>
      </Fragment>
    </Fragment>
  );
}

export default LatestArticle;
