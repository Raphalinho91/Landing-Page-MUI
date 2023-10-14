import React from 'react'
import { Box, Container, styled, Typography } from "@mui/material";
import Rectangle8 from "../assets/Rectangle8.png";
import Rectangle9 from "../assets/Rectangle9.png";
import Rectangle10 from "../assets/Rectangle10.png";
import Content4 from './Content4';

const Content3 = () => {
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

    const Custom2Box = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: theme.spacing(10),
        [theme.breakpoints.down("md")]: {
          width: "100%",
          alignItems: "center",
        },
    }));
    
    const CustomBox = styled(Box)(({ theme }) => ({
      width: "100%",
      [theme.breakpoints.down("lg")]: {
          width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(5),
        width: "55%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
  }));

  const Boxs = styled(Typography)(({ theme }) => ({
      marginTop: "-320px",
      [theme.breakpoints.down("lg")]: {
        marginTop: "-270px",
        marginLeft: "-5px",
        width: "90%",
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(10),
      },
  }));

    const Title = styled(Typography)(({ theme }) => ({
        display: "flex",
        fontSize: "44px",
        justifyContent: "center",
        textAlign: "center",
        color: "#000000",
        fontWeight: "bold",
        marginTop: "-120px",
        [theme.breakpoints.down("lg")]: {
          marginTop: "60px",
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "-50px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "30px",
        },
    }));
    const Title2 = styled(Typography)(({ theme }) => ({
        display: "flex",
        fontSize: "14px",
        justifyContent: "center",
        textAlign: "center",
        color: "#757095",
        marginTop: "40px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "14px",
        },
    }));
    
  return <Box>
        <Title variant="h3">Features that blows mind</Title>
        <Title2 variant="body2">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</Title2>
        <CustomContainer>
          <CustomBox>
            <img src={Rectangle8} alt="logo" style={{ width: "100%" }}/>
            <Boxs>
                <img src={Rectangle10} alt="logo" style={{ width: "15%",  marginLeft: "35px"}}/>
                <Typography variant="body1" sx={{ color: "#000000", fontSize: "28px", fontWeight: "bold", mt: 0,  marginLeft: "35px"}}>
                    Connect wallets & exchanges
                </Typography>
                <Typography variant="body2" sx={{ color: "#757095", fontSize: "14px", width: "75%", fontWeight: "bold", mt: 1,  marginLeft: "35px"}}>
                    End-to-end payments and financial management in a single solution. Meet the right platform.
                </Typography>
            </Boxs>
          </CustomBox>
    
          <CustomBox>
            <img src={Rectangle8} alt="" style={{ width: "100%" }}/>
            <Boxs>
            <img src={Rectangle10} alt="stars" style={{ width: "15%", marginLeft: "35px"}} />
            <Typography variant="body1" sx={{ color: "#000000", fontSize: "28px", fontWeight: "bold", mt: 0,  marginLeft: "35px"}}>
                Connect wallets & exchanges
            </Typography>
            <Typography variant="body2" sx={{ color: "#757095", width: "75%", fontSize: "14px", fontWeight: "bold", mt: 1,  marginLeft: "35px"}}>
                End-to-end payments and financial management in a single solution. Meet the right platform.
            </Typography>
            </Boxs>
          </CustomBox>

          <Custom2Box>
          <CustomBox>
            <img src={Rectangle9} alt="" style={{ width: "100%"}}/>
            <Box sx={{ mt: -18}}>
            <Typography variant="body1" sx={{ color: "#000000", fontSize: "25px", width: "80%", fontWeight: "bold", mt: 0,  marginLeft: "35px"}}>
                Save money year-round
            </Typography>
            </Box>
            </CustomBox>

          <CustomBox>
            <img src={Rectangle9} alt="" style={{ width: "100%"}}/>
            <Box sx={{ mt: -20}}>
            <Typography variant="body1" sx={{ color: "#000000", fontSize: "25px", fontWeight: "bold", mt: 0,  marginLeft: "35px"}}>
                100+ Apps Powerful integrations
            </Typography>
            </Box>
          </CustomBox>
          </Custom2Box>
        </CustomContainer>
        <Content4 />
      </Box>;
    };
export default Content3