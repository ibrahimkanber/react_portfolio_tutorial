import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import defaultimg from "../../defaultimg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import { CardImg } from "react-bootstrap";

const baseUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;

function MovieCard({ movie, favStatus, handleFav }) {
  const history = useHistory();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      PlayList
    </Tooltip>
  );
  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      LikeButton
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Details...
    </Tooltip>
  );
  const imgUrl = baseUrl + movie.poster_path;
  // console.log(imgUrl)

  return (
    <div>
      <Container style={{}}>
        <Card
          style={{
            width: 350,
            backgroundColor: "#f8961e",
            borderRadius: 10,
            marginBottom: 20,
          }}
          className="Card"
        >
          <CardImg
            style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            variant="top"
            src={movie.poster_path ? imgUrl : defaultimg}
            className="CardImg"
          />
          <Card.Body style={{ height: 41 }} className="Cardbody">
            {/* <Card.Title className= "Cardtitle">{movie.title}</Card.Title> */}
            {/* <Card.Text>{movie.overview.slice(0, 120)}...</Card.Text> */}
            <Row className="justify-content-center pt-1">
              {/* <Card.Title className= "Cardtitle">{movie.title}</Card.Title> */}
              <OverlayTrigger
                placement="top"
                delay={{ show: 150, hide: 300 }}
                overlay={renderTooltip2}
              >
                <Button
                  style={{
                    position: "relative",
                    bottom: 23.5,
                    marginTop: 4,
                    marginLeft: 5,
                    marginRight: 5.5,
                    backgroundColor: "#ffc300",
                    border: "none",
                  }}
                  onClick={() => history.push("/details/" + movie.id)}
                >
                  <FontAwesomeIcon icon={faEllipsisH} color="red" />
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 150, hide: 300 }}
                overlay={renderTooltip1}
              >
                <Button
                  variant="light"
                  style={{
                    position: "relative",
                    bottom: 23.5,
                    marginTop: 4,
                    marginLeft: 4.5,
                    marginRight: 4.5,
                    backgroundColor: "#ffc300",
                    border: "none",
                  }}
                  onClick={() => handleFav(movie.id)}
                >
                  <FontAwesomeIcon
                    icon={favStatus ? faHeart : farHeart}
                    color="red"
                  />
                </Button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 150, hide: 300 }}
                overlay={renderTooltip}
              >
                <Button
                  variant="light"
                  style={{
                    position: "relative",
                    bottom: 23.5,
                    marginTop: 4,
                    marginLeft: 5.5,
                    marginRight: 5,
                    backgroundColor: "#ffc300",
                    border: "none",
                  }}
                >
                  <FontAwesomeIcon icon={faList} color="red" />
                </Button>
              </OverlayTrigger>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  favStatus: PropTypes.bool,
  handleFav: PropTypes.func,
};

export { MovieCard };
