import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Language from "../../language/Language";

const Header: FC = () => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const scrollY = window.scrollY;

      setShowHeader(scrollY <= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showHeader && (
        <Box sx={{ position: "fixed", top: 30, width: "100%" }}>
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              height={50}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CallIcon sx={{ color: "blue", fontSize: 12 }} />
                  <Typography sx={{ color: "blue", fontSize: 12 }}>
                    +993 63 000000
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <EmailIcon sx={{ color: "blue", fontSize: 12 }} />
                  <Typography sx={{ color: "blue", fontSize: 12 }}>
                    info@bimakskimya.com
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton>
                  <FacebookIcon sx={{ color: "blue", fontSize: 16 }} />
                </IconButton>
                <IconButton>
                  <TwitterIcon sx={{ color: "blue", fontSize: 16 }} />
                </IconButton>
                <IconButton>
                  <InstagramIcon sx={{ color: "blue", fontSize: 16 }} />
                </IconButton>
                <IconButton>
                  <LinkedInIcon sx={{ color: "blue", fontSize: 16 }} />
                </IconButton>
                <Language />
              </Stack>
            </Stack>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default Header;
