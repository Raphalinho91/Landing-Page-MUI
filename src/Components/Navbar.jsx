import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import { Container } from "@mui/system";
import CustomButton1 from "./CustomButton1";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open })
  };
  
  const list = (anchor) => (
    <Box 
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }} 
      role="presentation" 
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Product", "Template", "Blog", "Pricing"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <ListAltIcon />}
                  {index === 3 && <CreditCardIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  )

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#4F46BA",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "240px",
    marginRight: "180px",
    gap: theme.spacing(4),
    [theme.breakpoints.down("lg")]: {
      marginLeft: "120px",
      marginRight: "70px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRigth: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled(Typography)(({ theme }) => ({
    cursor: "pointer",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return <NavbarContainer>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CustomMenuIcon onClick={toggleDrawer("left", true)} />
        <Drawer anchor="left" open={mobileMenu["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
        <NavbarLogo>
          <Typography>Raphael</Typography>
        </NavbarLogo>
      </Box>

      <NavbarLinksBox>
        <NavLink variant="body2">Product</NavLink>
        <NavLink variant="body2">Template</NavLink>
        <NavLink variant="body2">Blog</NavLink>
        <NavLink variant="body2">Pricing</NavLink>
      </NavbarLinksBox>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem"}}>
      <NavLink variant="body2" sx={{ width: "25%" }}>SignIn</NavLink>
      <CustomButton1 backgroundColor="#4F46BA" color="#FFFFFF" buttonText="Start Free" />
    </Box>
  </NavbarContainer>;
};

export default Navbar;