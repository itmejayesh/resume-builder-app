"use client";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const drawerWidth = 240;
const mobileNavItems = [
  {
    id: 1,
    name: "Resume Template",
    path: "/",
  },
  {
    id: 2,
    name: "My Resume",
    path: "/preview",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
  },
];

function Navbar() {
  //handle navigation on tab click
  const router = useRouter();
  const handleTabClick = (path) => {
    router.push(path);
  };
  const indicatorStyles = {
    display: "none",
  };

  //mobile menu toggle function to toggle

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    e.stopPropagation();
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      mb={2}
      height={80}
    >
      <Typography sx={{ my: 2 }}>Resume Builder</Typography>
      <Divider />
      <List>
        {mobileNavItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "left", pl: 6 }}>
              <ListItemText
                onClick={() => handleTabClick(item.path)}
                primary={item.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }} mb={2} height={80}>
      <AppBar component="nav" color="inherit">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              align="left"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { sm: "block" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                color: "GrayText",
              }}
            >
              Resume Builder
            </Typography>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "block", md: "none" },
                marginLeft: "auto",
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Tabs
              sx={{ marginLeft: "auto", display: { xs: "none", md: "block" } }}
              value={0}
              indicatorColor="primary"
              TabIndicatorProps={{ style: indicatorStyles }}
            >
              <Tab
                label="Resume Templates"
                sx={{ color: "black" }}
                onClick={() => handleTabClick("/")}
              />
              <Tab
                label="My Resume"
                sx={{ color: "black" }}
                onClick={() => handleTabClick("/preview")}
              />
              <Tab
                label="About Us"
                sx={{ color: "black" }}
                onClick={() => handleTabClick("/about-us")}
              />
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
