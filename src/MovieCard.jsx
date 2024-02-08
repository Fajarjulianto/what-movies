import PropTypes from 'prop-types';

const MovieCard = ({movie,}) => {
return (
    <div className="w-[400] h-[400] rounded overflow-hidden shadow-lg bg-gray-900 text-white">
    <img 
    src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster} 
    alt={movie.Title} 
    className="w-full object-cover"
    />
    <div className="px-6 py-4 overflow-hidden w-[200] h-[92]">
      <div className="font-bold text-xl mb-2">{movie.Title}</div>
      <p className="text-gray-400 text-base">{movie.Type} | {movie.Year}</p>
    </div>
  </div>
  )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
    }).isRequired,
  };

export default MovieCard