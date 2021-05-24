import React, { useState, useEffect } from "react";
import "./App.css";
import { Navi } from "./components";
import { Route, Switch } from "react-router-dom";
import { Homepage, MovieDetails,SignIn,Favorites } from "./pages";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/search/movie";

const Router = () => {

  const [favlist,setFavlist]=useState([])


  const [searchedValue,setSearchedValue]=useState("matrix")
  const [movieList,setMovieList]=useState([])

  const searchMovie=(pageNum=1)=>{
      axios.get(baseURL,{
        params:{
          api_key:"2ab876e9698659187d8d9420ef4d232c",
          query:searchedValue,
          page:pageNum,
        },
    
       
      }).then(res=>setMovieList(res?.data?.results))
  }
  // console.log(movieList);

  const handleFav=(id)=>{
    if(favlist.includes(id)){
      const filtered=favlist.filter(movieId=>movieId!==id)
      setFavlist(filtered)
    }else{
      setFavlist(state=>[...state,id])
    }
}

  useEffect(()=>{
      searchMovie()
  },[searchedValue])


  return (
    <div>
      <Navi setSearchedValue={setSearchedValue} />
      <Switch>
        <Route exact path="/">
          <Homepage movieList={movieList} searchMovie={searchMovie} handleFav={handleFav} favlist={favlist}/>
        </Route>
        <Route path="/details/:id" component={MovieDetails}/>
        <Route path="/signin" component={SignIn}/>
        <Route exact path="/favorites">
          <Favorites searchedValue={searchedValue} handleFav={handleFav}/>
        </Route>
        
      </Switch>
      {console.log(searchedValue)}
    </div>
  );
};

export default Router;
