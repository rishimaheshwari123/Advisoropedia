import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

MovieComponent.propTypes = {
  movieInfo: PropTypes.array,
};



export default MovieComponent;
