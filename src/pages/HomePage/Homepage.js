import React,{useState} from "react";
import { MovieCard } from "../../components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPaginate from "react-paginate";

function Homepage(props) {
 const [favlist,setFavlist]=useState([])

 const handleFav=(id)=>{
      if(favlist.includes(id)){
        const filtered=favlist.filter(movieId=>movieId!==id)
        setFavlist(filtered)
      }else{
        setFavlist(state=>[...state,id])
      }
 }


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
          <Col className="mt-5">
            <MovieCard movie={movie} favStatus={favlist.includes(movie.id)? true:false} handleFav={handleFav}/>
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

export { Homepage };
