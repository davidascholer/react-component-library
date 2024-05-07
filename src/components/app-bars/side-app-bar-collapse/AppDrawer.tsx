import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RandomIcon from "@mui/icons-material/TwoWheeler";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import TopAppBar from "./TopAppBar";
import { Typography } from "@mui/material";

const PATHS = {
  HOME: "/",
  OPTION1: "/test/option1",
  OPTION2: "/test/option2",
  OPTION3: "/test/option3",
};

interface AppDrawerProps {
  appDrawerOpen: boolean;
  toggleAppDrawer: { (dir: boolean | null): void };
  minimal?: boolean;
}

const styles = {
  link: {
    textDecoration: "none",
    width: "100%",
    color: "inherit",
  },
};

const AppDrawer = ({
  appDrawerOpen,
  toggleAppDrawer,
  minimal = false,
}: AppDrawerProps) => {
  const list = () => (
    <Box
      sx={minimal ? { width: 60 } : { width: 250 }}
      role="presentation"
      onClick={() => toggleAppDrawer(false)}
    >
      <TopAppBar toggleAppDrawer={toggleAppDrawer} showName={!minimal} />
      <List>
        <ListItem disablePadding>
          <Link style={styles.link} to={PATHS.HOME}>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>
                <Typography>Home</Typography>
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link style={styles.link} to={PATHS.OPTION1}>
            <ListItemButton>
              <ListItemIcon>
                <RandomIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>OPTION1</Typography>
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link style={styles.link} to={PATHS.OPTION2}>
            <ListItemButton>
              <ListItemIcon>
                <RandomIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>OPTION2</Typography>
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <Link style={styles.link} to={PATHS.OPTION3}>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>Account Stuff</Typography>
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={"left"}
        open={appDrawerOpen}
        onClose={() => toggleAppDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default AppDrawer;
