import React,{useState} from "react";
import { MovieCard } from "../../components";
import Container from "react-bootstrap/Container";
import ReactPaginate from "react-paginate";
import Proptypes from "prop-types"

function Homepage(props) {


  return (
    <div style={{backgroundColor:"#003049"}}>
    
    <Container className="mb-2 pt-2">
        <ReactPaginate
        pageCount={Math.ceil(props.movieList.length / 5)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => props.searchMovie(data.selected + 1)}
        containerClassName="pagination"
      /></Container>
       <div style={{flexWrap:"wrap",display:"flex",justifyContent:"center"}}  >
        {props.movieList.map((movie) => (
          
            <MovieCard movie={movie} favStatus={props.favlist.includes(movie.id)? true:false} handleFav={props.handleFav} key={movie.id}/>
          
        ))}
        </div>
      
      <Container className="pb-4">
      <ReactPaginate
        pageCount={Math.ceil(props.movieList.length / 5)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => props.searchMovie(data.selected + 1)}
        containerClassName="pagination"
      /></Container >
    
    </div>
  );
}

Homepage.propTypes={
  favlist:Proptypes.array,
  handleFav:Proptypes.func,
  searchMovie:Proptypes.func,
  movieList:Proptypes.array,
}


export { Homepage };
