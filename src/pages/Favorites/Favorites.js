import React from 'react'
import {useSelector} from "react-redux"
import {useEffect,useState} from "react"
import axios from  "axios"
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { CardText, CardTitle, CardImg, Button} from 'reactstrap';
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {removeFromFavorites} from "../../redux/action-creators/actions"

const baseURL = "https://api.themoviedb.org/3/search/movie";

function Favorites({searchedValue,handleFav}) {
    const history=useHistory()
    const dispatch=useDispatch()
    const state = useSelector(state=> state)
    const [movie,setMovie]=useState([])
    console.log(searchedValue)

    const favmovies = (pageNum=1)=>{
            axios.get(baseURL,{
              params:{
                api_key:"2ab876e9698659187d8d9420ef4d232c",
                query:searchedValue,
                page:pageNum,
              },
            }).then(response=>{
        const newlist = state.map(item=>{
            const filterlist = response.data.results.filter(movieId=>movieId.id==item)
            return filterlist[0]
        })
        console.log(newlist)
        setMovie(newlist)

    })
    }

    console.log(state)
    useEffect(() => {
        favmovies();
    }, [state])
    
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {movie?.map(item=>
            <Container key={item? item.id:"NotFound"} style={{
                width: 350,
                borderRadius: 10,
                marginBottom: 20,
              }}>
                <Card>
                    <CardImg  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item? item.poster_path : "NotFound"}`}  style={{ borderRadius:10 }}/>
                    <CardTitle>{(item? item.title : "NotFound")}</CardTitle>
                    <CardText style={{height:80}}>{(item? item.overview.slice(0,100) : "NotFound")}</CardText>
                    <Button
                     onClick={() => {handleFav(item.id);dispatch(removeFromFavorites(item.id))}}>
                      Remove</Button>
                </Card>
            </Container>
            )}
        </div>
    )
}

export {Favorites}
    

    // const DelFav= (e)=> {
    //     if(state.includes(e)){
    //         const i = state.indexOf(e)
    //         return state.splice(i,1)
    //     }
        
    //     console.log(state)
    //     // state.splice(i,1)
        
    // }


    


    




    // console.log(response.data.results)
    //         const newlist = response.data.results.map(item=>{
    //             if(state.includes(item.id)){
    //                 return item
    //             }else{
    //                 return null
    //             }
                
    //         })
    //         console.log(newlist)



    // if(state.includes(action.payload.id)){
    //     const filtered=state.filter(movieId=>movieId!==action.payload.id)
    //     return filtered
    //   }else{
    //     return [...state,action.payload.id]}







    // const [movie,setMovie]=useState([])
    // let newlist = [...movie]

    // const favmovies = ()=> {state.map(id=>axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2ab876e9698659187d8d9420ef4d232c&language=en-US`)
    // .then(response=>{
    //     console.log(newlist)
    //     newlist.push(response.data)
    //     setMovie(newlist)
    // }))}
    // useEffect(() => {
    //     favmovies();
    // }, [state])
    // console.log(movie)
    // console.log(state)


