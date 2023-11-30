import { ReactNode, createContext, useReducer } from "react";
import { MovieDataType, moviesData } from "../data/data";
import movieReducer from "./movieReducer";

interface IMovieContextProps {
  children: ReactNode;
}

interface MovieState {
  movies: MovieDataType[];
}

interface MovieAction {
  type: string;
  id: string;
}

const MovieList: MovieDataType[] = moviesData;

const initialMovieState: MovieState = {
  movies: MovieList,
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: initialMovieState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }: IMovieContextProps) => {
  const [state, dispatch] = useReducer(movieReducer, initialMovieState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
