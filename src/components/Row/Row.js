import React, {useState, useEffect} from 'react'
import "./Row.css";
import axios from "axios";

const base_url = "http://image.tmdb.org/t/p/original"; 

const Row = ({title, fetchUrl, isLargeRow}) => {
     const [movies, setMovies] = useState([]);
     useEffect(() => {
        const fetchData = async () =>{
             const respons = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
             setMovies(respons.data.results);
             return respons;
        };
        fetchData();
     },[])
    //  console.log("movies",movies);
    const handleClick = () => {}
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
                {movies && movies.map((movie) => (
                    <img 
                      onClick={()=>handleClick(movie)}
                      key={movie.id}
                      className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                      alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
