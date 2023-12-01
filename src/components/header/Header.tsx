import { Container, IconButton, Stack, Typography } from "@mui/material";
import { FC } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Language from "../../language/Language";

const Header: FC = () => {
  return (
    <div>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CallIcon />
              <Typography>+993 63 000000</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <EmailIcon />
              <Typography>info@bimakskimya.com</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <Language />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Header;
