import { MovieDataType } from "../data/data";

interface IMovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  return <div>MovieCard</div>;
};

export default MovieCard;
