import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageProps {}

const Language: React.FC<LanguageProps> = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="text"
        sx={{ borderRadius: "50px", textTransform: "none", color: "#000" }}
        onClick={handleClick}
      >
        {i18n.language === "ru" ? (
          <>
            <img
              src="./images/ru.svg"
              style={{ width: "16px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>Русский</Typography>
          </>
        ) : i18n.language === "en" ? (
          <>
            <img
              src="./images/uk.svg"
              style={{ width: "16px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>English</Typography>
          </>
        ) : (
          <>
            <img
              src="./images/tm.png"
              style={{ width: "16px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>Türkmençe</Typography>
          </>
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => changeLanguage("ru")}>
          <>
            <img
              src="./images/ru.svg"
              style={{ width: "16px", marginRight: 10 }}
              alt="russian flag"
            />
            Русский
          </>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>
          <>
            <img
              src="./images/uk.svg"
              style={{ width: "16px", marginRight: 10 }}
              alt="english flag"
            />
            English
          </>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("tm")}>
          <>
            <img
              src="./images/tm.png"
              style={{ width: "16px", marginRight: 10 }}
              alt="turkmen flag"
            />
            Türkmençe
          </>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Language;
