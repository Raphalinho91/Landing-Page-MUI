import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomButton1 from "./CustomButton1";
import Image3 from "../assets/Image3.png";
import Formulaire from './Formulaire';

const content4 = () => {
    const CustomBoxs = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: "-6rem",
        [theme.breakpoints.down("lg")]: {
          marginTop: "0rem",
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "-3rem",
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
          width: "120%",
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

  return <Box sx={{ mt: 15 }}>
    <Container>
        <CustomBoxs>
            <Box sx={{flex: "1", mt: 5, mr: 2 }}>
                <Img1>
                    <img src={Image3} alt="Image3" style={{ maxWidth: "100%" }}/>
                </Img1>
            </Box>

            <Box sx={{ flex: "1.25"}}>
                <Typography variant="body2" sx={{ fontSize: "14px", color: "#3734A9", textTransform: "uppercase", fontWeight: "500", mt: 10, mb: 4 }}>
                    Our Feature          
                </Typography>
                    <Title variant="h1" sx={{ fontSize: "40px", letterSpacing: "-0.03em" }}>
                    Receive payments quickly from anywhere
                    </Title>
                    <Typography variant="body2" sx={{ fontSize: "18px", color: "#757095", letterSpacing: "-0.02em", my: 4 }}>
                      End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                    </Typography>
                <CustomButton1 backgroundColor="#4F46BA" color="#FFFFFF" buttonText="Get Started" />
            </Box>
        </CustomBoxs>
    </Container>
    <Formulaire />
  </Box>
}

export default content4