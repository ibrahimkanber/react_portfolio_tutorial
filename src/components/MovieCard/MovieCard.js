import React, { useState,useEffect } from "react";
import Card from "react-bootstrap/Card";
import {useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import PropTypes from 'prop-types';
import { CardImg } from "react-bootstrap";

const baseUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;

function MovieCard({ movie,favStatus,handleFav }) {
  const history=useHistory()
  


  return (
    <div>
      <Container style={{}}>
      <Card style={{width:450,backgroundColor:"#f8961e"}}  className="mb-4">
        <CardImg style={{height:600}} variant="top" src={baseUrl + movie.poster_path} /> 
        <Card.Body style={{height:260}}>
          <Card.Title className= "text-center">{movie.title}</Card.Title>
          <Card.Text>{movie.overview.slice(0, 200)}...</Card.Text>
          <Col>
          <Row className= "justify-content-center">
          <Button variant="success" onClick={()=>history.push("/details/"+movie.id)}>Details</Button>
          <Button
            
            variant="light"
            style={{position:"absolute",right:0,backgroundColor:"#ffc300",border:"none"}}
            onClick={() => handleFav(movie.id)}
          >
            <FontAwesomeIcon icon={favStatus? faHeart:farHeart} color="red" />
          </Button>
          </Row>
         
          <Row  className="mt-1">
          <Button
            
            variant="light"
            style={{position:"absolute",right:0,backgroundColor:"#ffc300",border:"none"}}
          >
            <FontAwesomeIcon icon={faList} color="red" />
          </Button>
          </Row>
          </Col>
          
          
        </Card.Body>
      </Card>
      </Container>
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
