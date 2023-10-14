import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";

import Image2 from "../assets/Image2.png";
import Rond1 from './Rond1';
import Rond2 from './Rond2';
import Rond3 from './Rond3';
import Content3 from './Content3';

const Content2 = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            alignItems: "left",
            textAlign: "left",
            width: "400px",
          },
      }));

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

  return <Box sx={{ mt: 10 }}>
  <Container>
    <CustomBoxs>
      <Box sx={{flex: "1"}}>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#3734A9", textTransform: "uppercase", fontWeight: "500", mt: 10, mb: 4 }}>
            Why Choose Us            
        </Typography>
        <Title variant="h1" sx={{ fontSize: "40px", letterSpacing: "-0.03em" }}>
            Specialist  aiding clients on financial challenges
        </Title>
        <Typography variant="body2" sx={{ fontSize: "18px", color: "#757095", letterSpacing: "-0.02em", my: 4 }}>
          End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
        </Typography>
          <CustomBox sx={{ gap: "10px", width: "400px" }} >
            <Box>
                <Rond1 backgroundColor="#FF7F5C" color="#FFF" marginTop="10px" />
                <Rond2 backgroundColor="#3734A9" color="#FFF" marginTop="30px" />
                <Rond3 backgroundColor="#00E1F0" color="#FFF" marginTop="40px" />
            </Box>

            <Box>
                <Typography variant="h6" sx={{ fontSize: "20px", color: "#1B1C31", letterSpacing: "-0.02em" }}>
                    First Working Process
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "14px", color: "#757095", letterSpacing: "-0.02em" }}>
                    End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "20px", color: "#1B1C31", letterSpacing: "-0.02em", mt: 3 }}>
                    Dedicated Team
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "14px", color: "#757095", letterSpacing: "-0.02em" }}>
                    End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "20px", color: "#1B1C31", letterSpacing: "-0.02em", mt: 3 }}>
                    24/7 Hours Support
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "14px", color: "#757095", letterSpacing: "-0.02em" }}>
                    End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                </Typography>
            </Box>
          </CustomBox>
      </Box>

      <Box sx={{flex: "1.25", mt: 10, mr: 2 }}>
        <Img1>
          <img src={Image2} alt="Image2" style={{ maxWidth: "100%" }}/>
        </Img1>
      </Box>
    </CustomBoxs> 
  </Container>
  <Content3 />
</Box>
}

export default Content2