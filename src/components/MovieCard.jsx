import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa';
const moviesImgURL = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY; 

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie-card'>
      <img src={`${moviesImgURL}${movie.poster_path}`} 
          alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar/> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard