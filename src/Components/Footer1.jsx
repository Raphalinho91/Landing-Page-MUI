import { Box, Typography, styled, Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Footer2 from './Footer2';

const Footer1 = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }));

  const CustomBox1 = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "1rem",
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#3734A9",
    color: "#FFFFFF",
    fontWeight: "700px",
    fontSize: "14px",
    width: "20%",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "10px",
    textTransform: "none",
    flexDirection: "row",
    border: "2px solid transparent",
    margin: theme.spacing(0, 1, 3, 1),
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#3734A9",
      borderColor: "#FFFFFF"
    },
  }));

  const CustomButton1 = styled(Button)(({ theme }) => ({
    backgroundColor: "#FF7F5C",
    color: "#FFFFFF",
    fontWeight: "700px",
    fontSize: "14px",
    width: "20%",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "10px",
    textTransform: "none",
    flexDirection: "row",
    border: "2px solid transparent",
    margin: theme.spacing(0, 1, 3, 1),
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#FF7F5C",
      borderColor: "#FFFFFF"
    },
  }));

  return <Box sx={{ backgroundColor: "#FFF", mt: 10 }}>
    <Container>
      <CustomBox>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "#3734A9", textTransform: "uppercase", fontWeight: "500", mt: 10, mb: 4 }}>
          Project Management App                
        </Typography>
        <Title variant="h1" sx={{ fontSize: "40px", letterSpacing: "-0.03em" }}>
          Download our free project management app for clients                    
        </Title>
        <Typography variant="body2" sx={{ fontSize: "18px", color: "#757095", letterSpacing: "-0.02em", my: 4 }}>
          End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
        </Typography>
      </CustomBox>

      <CustomBox1>
        <CustomButton>Playstore</CustomButton>
        <CustomButton1>Google Play</CustomButton1>
      </CustomBox1>
    </Container>
    <Footer2 />
  </Box>
}

export default Footer1