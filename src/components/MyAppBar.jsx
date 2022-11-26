import React, { useState } from "react";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export default function MyAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLink = (link) => {
    setMenuOpen(false);
    window.open(link);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DM Demo UI
        </Typography>

        <Button color="inherit" onClick={(e) => setMenuOpen(true)}>
          Links
        </Button>
        <Icons>
          <SettingsIcon fontSize="large" />
          <HelpCenterIcon fontSize="large" />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuOpen}
        onClose={(e) => setMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={(e) => handleLink("https://www.ibm.com/docs/en/ibamoe")}
        >
          IBM Docs
        </MenuItem>
        <MenuItem onClick={(e) => handleLink("https://blog.kie.org/")}>
          KIE Blog
        </MenuItem>
        <MenuItem onClick={(e) => handleLink("https://kogito.kie.org/")}>
          Kogito
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
