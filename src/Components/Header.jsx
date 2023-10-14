import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Navbar";

import illustration1 from "../assets/Illustration1.png";
import illustration2 from "../assets/Illustration2.png";
import illustration3 from "../assets/Illustration3.png";
import CustomButton from './CustomButton';
import Fond from '../assets/Fond.png';
import Logos from '../assets/Logos.png';
import Features1 from './Features1';

const Header = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        alignItems: "center",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }));
    
      const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(-10, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
          fontSize: "40px",
          margin: theme.spacing(-5, 0, 4, 0),
        },
      }));

      const ImgBox = styled(Box)(({ theme }) => ({
        display: "flex",
        marginTop: "-200px",
        marginLeft: "-100px",
        gap: theme.spacing(80),
        [theme.breakpoints.down("xl")]: {
          gap: theme.spacing(66),
          marginLeft: "0px",
        },
        [theme.breakpoints.down("lg")]: {
          gap: theme.spacing(20),
          justifyContent: "center",
          marginTop: "0",
          maxWidth: "100%"
        },
        [theme.breakpoints.down("md")]: {
          gap: theme.spacing(20),
          justifyContent: "center",
          marginTop: "0",
          maxWidth: "100%"
        },
      }));

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "90vh" }}>
      <Box 
        sx={{ 
          backgroundImage: `url(${Fond})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 400,
          width: "100%",
        }}
      >
        <Container>
            <Navbar />  
              <CustomBox>
                <Box>
                  <img src={illustration2} alt="illustration2" style={{ maxWidth: "52%" }} />
                    <Title variant='h1'>
                      Managing freelance payments has never been easier
                    </Title>
                    <Typography variant="body2" sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}>
                      End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                    </Typography>
                    <CustomButton backgroundColor="#4F46BA" color="#fff" buttonText="Get Started" heroBtn={true} />
                    <CustomButton backgroundColor="#F7F9FB" color="#3734A9" buttonText="Request Demo" heroBtn={true} />
                    <ImgBox>
                      <img src={illustration1} alt="illustration1" style={{ maxWidth: "28%"}} />
                      <img src={illustration3} alt="illustration3" style={{ maxWidth: "28%"}} />
                    </ImgBox>
                    <Typography variant="body1" sx={{ fontSize: "18px", color: "#000000", my: -3 }}>
                      Over 32k+ software businesses growing with Ar Shakir.
                    </Typography>
                    <img src={Logos} alt="Logos" style={{ display: "flex", marginTop: "70px", width: "100%", height: "auto" }} />
                </Box>
              </CustomBox>
        </Container>
        <Features1 />
      </Box>
    </Box>
  )
}

export default Header