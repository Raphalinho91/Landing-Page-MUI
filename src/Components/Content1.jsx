import React from 'react'
import { Box, Divider, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image1 from "../assets/Image1.png";
import Valide from "../assets/Valide.png";
import Content2 from './Content2';

const Content1 = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginTop: "-8rem",
      gap: theme.spacing(0),
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  })); 

  const Img1 = styled(Box)(({ theme }) => ({
    marginLeft: "-12rem", 
    marginBottom: "2rem", 
    [theme.breakpoints.down("xl")]: {
      width: "130%",
      marginLeft: "-7rem",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "-5rem",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "-1rem",
      width: "100%"
    },
  }));
  return <Box sx={{ mt: 10 }}>
      <Container>
        <CustomBox>
          <Box sx={{flex: "1"}}>
            <Img1>
              <img src={Image1} alt="Image1" style={{ maxWidth: "100%" }}/>
            </Img1>
          </Box>

          <Box sx={{flex: "1.25"}}>
            <Typography variant="body2" sx={{ fontSize: "14px", color: "#3734A9", textTransform: "uppercase", fontWeight: "500", mt: 10, mb: 4 }}>
              Why Choose Us            
            </Typography>
            <Title variant="h1" sx={{ fontSize: "50px", letterSpacing: "-0.03em" }}>
              Track your crytpo portfolio on the best way possible
            </Title>
            <Typography variant="body2" sx={{ fontSize: "18px", color: "#757095", letterSpacing: "-0.02em", my: 4 }}>
              End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
            </Typography>
            <Divider variant="middle" sx={{ color: "#E6E6E6" }}/>
            <Typography variant='body2' sx={{ fontSize: "19px", letterSpacing: "-0.02em", color:"#505887",  mt: 3}}>
              <img src={Valide} alt="Valide" style={{ width: "15px" }}/>  Get Overview at a glance
            </Typography>
            <Typography variant='body2' sx={{ fontSize: "19px", letterSpacing: "-0.02em", color:"#505887", mt: 2}}>
              <img src={Valide} alt="Valide" style={{ width: "15px" }}/>  Deoposit funds easily, securlity
            </Typography>
            <Typography variant='body2' sx={{ fontSize: "19px", letterSpacing: "-0.02em", color:"#505887", mt: 2}}>
              <img src={Valide} alt="Valide" style={{ width: "15px" }}/>  Get Live Support
            </Typography>
          </Box>
        </CustomBox> 
      </Container>
      <Content2 />
  </Box>
}

export default Content1