import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

function MovieDetails() {
    const {id}=useParams()
    
    const getMovieDetails=()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2ab876e9698659187d8d9420ef4d232c&language=en-US`).then(console.log)
    }


    useEffect(()=>{
        getMovieDetails()
    },[])
    

    return (
        <div>
           {id}
        </div>
    )
}


export {MovieDetails}
