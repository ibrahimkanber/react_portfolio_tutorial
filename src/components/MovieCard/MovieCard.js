import React, { useState,useEffect } from "react";
import Card from "react-bootstrap/Card";
import {useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import PropTypes from 'prop-types';

const baseUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;

function MovieCard({ movie,favStatus,handleFav }) {
  const history=useHistory()
  


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={baseUrl + movie.poster_path} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview.slice(0, 100)}...</Card.Text>
          <Button variant="primary" onClick={()=>history.push("/details/"+movie.id)}>Details</Button>
          <Button
            variant="light"
            style={{ marginLeft: 105 }}
            onClick={() => handleFav(movie.id)}
          >
            <FontAwesomeIcon icon={favStatus? faHeart:farHeart} color="red" />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

MovieCard.propTypes={
  movie:PropTypes.shape({
    title:PropTypes.string,
    id:PropTypes.number,
    overview:PropTypes.string,
    poster_path:PropTypes.string

  }),
  favStatus:PropTypes.bool,
  handleFav:PropTypes.func,
  
}

export { MovieCard };
