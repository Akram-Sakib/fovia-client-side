import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import your route components too
import logo from "./../../Images/logo.png";

const drawerWidth = 200;

function DashBoardMain(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin} = useAuth();

  const arr = [
    {
      id: 1,
      pathName: "/appointment",
      name: "Appointment",
      icon: <BookOnlineIcon />,
    },
    {
      id: 2,
      pathName: "/dashboard",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      id: 3,
      pathName: "/dashboard/makeadmin",
      name: "Make Admin",
      icon: <AdminPanelSettingsIcon />,
      role: "admin",
    },
    {
      id: 4,
      pathName: "/dashboard/addDoctor",
      name: "Add Doctor",
      icon: <LocalHospitalOutlinedIcon />,
      role: "admin",
    },
    {
      id: 5,
      pathName: "/dashboard/doctorslist",
      name: "Doctorslist",
      icon: <LocalHospitalIcon />,
      role: "admin",
    },
    {
      id: 6,
      pathName: "/dashboard/addfeedback",
      name: "Add Feedback",
      icon: <FeedbackOutlinedIcon />,
    },
    {
      id: 7,
      pathName: "/dashboard/allFeedBack",
      name: "All Feedback",
      icon: <InsertCommentOutlinedIcon />,
      role: "admin",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const filter = arr.filter(role => role.role === arr.role);

  const drawer = (
    <div>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {admin
          ? arr.map((menu) => (
              <Link to={menu.pathName}>
                <ListItem button key={menu.id}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText secondary={menu.name} />
                </ListItem>
              </Link>
            ))
          : filter.map((menu) => (
              <Link to={menu.pathName}>
                <ListItem button key={menu.id}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText secondary={menu.name} />
                </ListItem>
              </Link>
            ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex",overflowX:'auto' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% -  ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

DashBoardMain.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoardMain;
