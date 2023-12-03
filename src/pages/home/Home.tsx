import { FC } from "react";
import { Box, Container } from "@mui/material";

const Home: FC = () => {
  return (
    <Box
      sx={{
        background: "url(./images/home.jpg)",
        width: "100%",
        height: "100vh",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container></Container>
    </Box>
  );
};

export default Home;
