import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

type BottomAppBarProps = {
  handleDrawerClick: () => void;
  handleAddClick: () => void;
  handleSearchClick: () => void;
  handleKebabClick: () => void;
  displayName?: string;
};

export default function BottomAppBar({
  handleDrawerClick,
  handleAddClick,
  handleSearchClick,
  handleKebabClick,
  displayName,
}: BottomAppBarProps) {
  // const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  // const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  // const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Typography>{displayName}</Typography>

      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              handleDrawerClick();
              // setDrawerOpen((d) => !d);
            }}
          >
            <MenuIcon />
          </IconButton>
          <StyledFab
            color="secondary"
            aria-label="add"
            onClick={handleAddClick}
          >
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleKebabClick}>
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
