import { FC, useEffect, useState } from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { navbarItems } from "./navbarItems";
import NavbarAfterScroll from "./NavbarAfterScroll";

const Navbar: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [showBeforeScroll, setShowBeforeScroll] = useState(true);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBeforeScroll(scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Box
        sx={{ position: "fixed", width: "100%", right: 0, left: 0, top: 100 }}
      >
        {showBeforeScroll ? (
          <Container>
            <Paper
              elevation={5}
              sx={{
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 5,
              }}
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
              </Stack>
            </Paper>
          </Container>
        ) : (
          <NavbarAfterScroll />
        )}
      </Box>
    </div>
  );
};

export default Navbar;
