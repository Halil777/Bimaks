import { FC } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { navbarItems } from "./navbarItems";

const Navbar: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => handleNavigation("")}
          >
            Bimaks
          </Typography>

          <Stack direction="row" spacing={2}>
            {navbarItems.map((item, i) => (
              <Typography
                key={`navbar_items_key${i}`}
                onClick={() => handleNavigation(item.path)}
                sx={{ cursor: "pointer" }}
              >
                {t(item.title)}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
