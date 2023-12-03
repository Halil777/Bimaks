import { Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { navbarItems } from "./navbarItems";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Language from "../../language/Language";

const NavbarAfterScroll: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <Paper
        elevation={5}
        sx={{
          width: "90%",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 5,
          ml: "5%",
        }}
      >
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigation("")}
        >
          Bimaks
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          {navbarItems.map((item, i) => (
            <Typography
              key={`navbar_items_after_scroll_key${i}`}
              onClick={() => handleNavigation(item.path)}
              sx={{
                cursor: "pointer",
                textDecoration:
                  location.pathname === item.path ? "underline" : "none",
                color: location.pathname === item.title ? "red" : "#000",
              }}
            >
              {t(item.title)}
            </Typography>
          ))}
          <Language />
        </Stack>
      </Paper>
    </div>
  );
};

export default NavbarAfterScroll;
