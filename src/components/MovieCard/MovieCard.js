import React, { useState,useEffect } from "react";
import Card from "react-bootstrap/Card";
import {useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
/* 
adult: false
backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg"
genre_ids: (3) [12, 28, 878]
id: 11
original_language: "en"
original_title: "Star Wars"
overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
popularity: 77.073
poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
release_date: "1977-05-25"
title: "Star Wars"
video: false
vote_average: 8.2
vote_count: 15475

*/

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
            style={{ marginLeft: 100 }}
            onClick={() => handleFav(movie.id)}
          >
            <FontAwesomeIcon icon={favStatus? faHeart:farHeart} color="red" />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export { MovieCard };
