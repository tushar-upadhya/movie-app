import { createContext } from "react";


const initalMovieState:MovieState={

}

export const MovieContext= createContext<{state:MovieState, dispatch:React.Dispatch<MovieAction>}>(
    state:initalMovieState,
    dispatch:()=>()
)

// 50s