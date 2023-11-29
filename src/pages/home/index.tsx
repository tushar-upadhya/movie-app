import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import Layout from "../../layout";
import { SetStateAction, useState } from "react";
import searchIcon from "../../assets/icons/icon-search.svg";
import TrendingList from "../../components/TrendingList";
import RecommendedList from "../../components/RecommendedList";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Searching"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img src={searchIcon} alt="searchIcon" width={20} height={20} />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={2}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <TrendingList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For you
              </Typography>
              <RecommendedList recommendedList={recommendedList} />
            </Box>
          </Box>
        ) : (
          <Box width={100}>
            <Typography>Found</Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
