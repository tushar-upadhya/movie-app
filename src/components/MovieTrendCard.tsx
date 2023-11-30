import { useContext } from "react";
import { MovieDataType } from "../data/data";
import { MovieContext } from "../context/movieContext";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import movieIcon from "../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../assets/icons/icon-category-tv.svg";
import BookmarkIcon from "../assets/icons/icon-bookmark-full.svg";
// import BookmarkEmptyIcon from "../assets/icons/icon-bookmark-full.svg";

interface ITrendMovieCardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: ITrendMovieCardProps) => {
  const { dispatch } = useContext(MovieContext);

  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOGGLE BOOKMARK", id });
  };
  return (
    <Card
      elevation={0}
      key={movie.id}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor={"rgba(0,0,0,0.6)"}
          borderRadius={"8px"}
        />

        <Stack
          mt="6"
          spacing={0}
          position={"absolute"}
          bottom={0}
          left={0}
          p={4}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography
                fontSize={10}
                color={"#e0e0e0"}
                aria-label="year of movie"
              >
                {movie.year}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#e0e0e0",
                  borderRadius: "full",
                }}
              />
            </Grid>

            <Grid item>
              <img
                src={movie.category === "Movies" ? movieIcon : tvSeriesIcon}
                alt={movie.category}
                width={16}
                height={16}
              />
            </Grid>

            <Grid item>
              <Typography
                fontSize={10}
                color={"#e0e0e0"}
                aria-label="Movie Category"
              >
                {movie.category}
              </Typography>
            </Grid>

            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#e0e0e0",
                  borderRadius: "full",
                }}
              />
            </Grid>

            <Grid item>
              <Typography
                fontSize={10}
                color={"#e0e0e0"}
                aria-label="Movie rating"
              >
                {movie.rating}
              </Typography>
            </Grid>
            <Typography
              padding={"0"}
              color={"#e0e0e0"}
              aria-label="Movie title"
            >
              {movie.title}
            </Typography>
          </Grid>
        </Stack>

        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              p: "rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&: hover": { opacity: 0.8 },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? <BookmarkIcon /> : ""}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
