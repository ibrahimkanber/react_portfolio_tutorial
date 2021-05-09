import React,{useState} from "react";
import { MovieCard } from "../../components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPaginate from "react-paginate";
import Proptypes from "prop-types"

function Homepage(props) {


  return (
    <Container fluid="md">
        <ReactPaginate
        pageCount={Math.ceil(props.movieList.length / 5)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => props.searchMovie(data.selected + 1)}
        containerClassName="pagination"
      />
      <Row className="justify-content-md-center">
        {props.movieList.map((movie) => (
          <Col className="mt-5" key={movie.id}>
            <MovieCard movie={movie} favStatus={props.favlist.includes(movie.id)? true:false} handleFav={props.handleFav}/>
          </Col>
        ))}
      </Row>
      <ReactPaginate
        pageCount={Math.ceil(props.movieList.length / 5)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => props.searchMovie(data.selected + 1)}
        containerClassName="pagination"
      />
    </Container>
  );
}

Homepage.propTypes={
  favlist:Proptypes.array,
  handleFav:Proptypes.func,
  searchMovie:Proptypes.func,
  movieList:Proptypes.array,
}


export { Homepage };
