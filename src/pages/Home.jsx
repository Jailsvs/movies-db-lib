import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY; 

import './MoviesGrid.css';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className='container'>
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length == 0 && <p>Carregando...</p>}
        {topMovies.length > 0 
         && topMovies.map((item) => 
                        <MovieCard 
                          key={item.id}
                          movie={item}/>)}
      </div>
    </div>
  )
}

export default Home