import PropTypes from "prop-types";

const MovieCard = ({ myData }) => {
  const { title, body, id } = myData;
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{id}</p>
        <p className="text-white">{body.substr(0, 150)}</p>
        <h2 className="text-white">{title.substr(0, 15)}</h2>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  myData: PropTypes.object,
};

export default MovieCard;
