import { Box, Grid, Paper } from "@mui/material";
import { MovieDataType } from "../data/data";
import MovieTrendCard from "./MovieTrendCard";

interface ITrendingListProps {
  trendingList: MovieDataType[];
}

const TrendingList = ({ trendingList }: ITrendingListProps) => {
  // console.log("trendingList:", trendingList);
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {trendingList.map((movie) => {
        return (
          <Grid item key={movie.id}>
            <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
              <MovieTrendCard movie={movie} />
            </Paper>
          </Grid>
        );
      })}
    </Box>
  );
};

export default TrendingList;
