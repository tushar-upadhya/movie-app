import { Box, Grid, Paper } from "@mui/material";
import MovieTrendCard from "./MovieTrendCard";
import { MovieDataType } from "../data/data";
import MovieCard from "./MovieCard";

interface IRecommendedListProps {
  recommendedList: MovieDataType[];
}

const RecommendedList = ({ recommendedList }: IRecommendedListProps) => {
  // console.log("recommendedList:", recommendedList);

  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {recommendedList.map((movie) => {
        return (
          <Grid item key={movie.id}>
            <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
              <MovieCard movie={movie} />
            </Paper>
          </Grid>
        );
      })}
    </Box>
  );
};

export default RecommendedList;
