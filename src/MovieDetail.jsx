import PropTypes from 'prop-types';

const MovieDetail = ({ movie, onClose }) => {
  const { Title, Poster, Year, Plot, Genre, Director, Actors } = movie;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-xl">
        <img src={Poster} alt={Title} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{Title}</div>
          <p className="text-gray-400 text-base">Year: {Year}</p>
          <p className="text-gray-400 text-base">Genre: {Genre}</p>
          <p className="text-gray-400 text-base">Director: {Director}</p>
          <p className="text-gray-400 text-base">Actors: {Actors}</p>
          <p className="text-gray-400 text-base">{Plot}</p>
        </div>
        <div className="px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string,
      Poster: PropTypes.string,
      Year: PropTypes.string,
      Plot: PropTypes.string,
      Genre: PropTypes.string,
      Director: PropTypes.string,
      Actors: PropTypes.string
    }).isRequired,
    onClose: PropTypes.func.isRequired
  };

export default MovieDetail;
