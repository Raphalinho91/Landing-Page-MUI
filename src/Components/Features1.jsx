import { Title } from "@mui/icons-material";
import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle6 from "../assets/Rectangle6.png";
import Rectangle7 from "../assets/Rectangle7.png";
import Content1 from "./Content1";

const Features1 = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-Between",
        marginTop: "90px",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          marginBottom: theme.spacing(4),
        },
    }));
    
    const CustomBox = styled(Box)(({ theme }) => ({
        width: "300px",
        [theme.breakpoints.down("lg")]: {
            width: "280px",
        },
        [theme.breakpoints.down("md")]: {
          marginBottom: theme.spacing(15),
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        display: "flex",
        fontSize: "44px",
        justifyContent: "center",
        textAlign: "center",
        color: "#000000",
        fontWeight: "bold",
        marginTop: "40px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "30px",
        },
    }));
    
    return <Box sx={{ mt: 10 }}>
        <Typography sx={{ display: "flex", justifyContent: "center", color:"#3734A9", textTransform:"uppercase", fontWeight:"bold"}}>Why Financy</Typography>
        <Title variant="h3">Specially designed for payments</Title>
        <CustomContainer>
          <CustomBox>
            <img src={Rectangle1} alt="logp" style={{ width: "100%" }}/>
            <Box sx={{ mt: -25 }}>
                <img src={Rectangle2} alt="logo" style={{ width: "20%", marginTop: "-30px",  marginLeft: "30px"}}/>
                <img src={Rectangle5} alt="logo" style={{ width: "10%", marginBottom: "20px",  marginLeft: "-45px"}}/>
                <Typography variant="body1" sx={{ color: "#000000", fontSize: "16px", fontWeight: "bold", mt: 2,  marginLeft: "30px"}}>
                    Modern Cards
                </Typography>
                <Typography variant="body2" sx={{ color: "#757095", fontSize: "14px", fontWeight: "bold", mt: 2,  marginLeft: "30px"}}>
                    End-to-end payments and financial management in a single solution. Meet the right platform.
                </Typography>
            </Box>
          </CustomBox>
    
          <CustomBox>
          <img src={Rectangle1} alt="" style={{ width: "100%" }}/>
            <Box sx={{ mt: -25}} >
            <img src={Rectangle3} alt="stars" style={{ width: "20%", marginTop: "-30px", marginLeft: "30px"}} />
            <img src={Rectangle6} alt="logo" style={{ width: "10%", marginBottom: "20px",  marginLeft: "-45px"}}/>
            <Typography variant="body1" sx={{ color: "#000000", fontSize: "16px", fontWeight: "bold", mt: 2,  marginLeft: "30px"}}>
                No Extra Fee
            </Typography>
            <Typography variant="body2" sx={{ color: "#757095", fontSize: "14px", fontWeight: "bold", mt: 2,  marginLeft: "30px"}}>
                End-to-end payments and financial management in a single solution. Meet the right platform.
            </Typography>
            </Box>
          </CustomBox>

          <CustomBox>
            <img src={Rectangle1} alt="" style={{ width: "100%"}}/>
            <Box sx={{ mt: -25}}>
            <img src={Rectangle4} alt="Rectangle4" style={{ width: "20%", marginTop: "-30px", marginLeft: "30px"}} />
            <img src={Rectangle7} alt="logo" style={{ width: "10%", marginBottom: "20px",  marginLeft: "-45px"}}/>
            <Typography variant="body1" sx={{ color: "#000000", fontSize: "16px", fontWeight: "bold", mt: 2,  marginLeft: "30px"}}>
                Super Secure
            </Typography>
            <Typography variant="body2" sx={{ color: "#757095", fontSize: "14px", fontWeight: "bold", mt: 2,  marginLeft: "30px"}}>
                End-to-end payments and financial management in a single solution. Meet the right platform.
            </Typography>
            </Box>
          </CustomBox>
        </CustomContainer>
        <Content1 />
      </Box>;
    };

export default Features1