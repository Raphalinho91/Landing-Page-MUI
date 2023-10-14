import React from 'react'
import { Box, Typography, styled, Button, Divider } from '@mui/material'
import { Container } from '@mui/system'
import LOGO1 from "../assets/LOGO1.png"
import ICON1 from "../assets/ICON1.png"
import ICON2 from "../assets/ICON2.png"
import ICON3 from "../assets/ICON3.png"
import ICON4 from "../assets/ICON4.png"
import InputBase from '@mui/material/InputBase';

const Footer2 = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
          gap: theme.spacing(5),
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
    }));

    const CustomBox1 = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
    }));

    const CustomBox2 = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: theme.spacing(2),
        marginTop: "2rem",
    }));

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#F9F9F9",
        '&:hover': {
          backgroundColor: "#F9F9F9",
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(0)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
    }));

  return <Box sx={{ mt: 10 }}>
    <Container>
        <CustomBox>
            <CustomBox1>
                <img src={LOGO1} alt="" style={{ maxWidth: "50%"}}/>
                <Typography sx={{ width: "205px"}}>
                    Finance helps companies manage payments easily.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <img src={ICON1} alt="" style={{ cursor: "pointer" }} />
                    <img src={ICON2} alt="" style={{ cursor: "pointer" }} />
                    <img src={ICON3} alt="" style={{ cursor: "pointer" }} />
                    <img src={ICON4} alt="" style={{ cursor: "pointer" }} />
                </Box>
            </CustomBox1>
            <Box>
                <Typography variant='body1' sx={{fontWeight: 700, fontSize: "21px", lineHeight: "24px", color: "#181433"}}>Company</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433", mt: 1}}>About Us</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Careers</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Blog</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Pricing</Typography>
            </Box>
            <Box>
                <Typography variant='body1' sx={{fontWeight: 700, fontSize: "21px", lineHeight: "24px", color: "#181433"}}>Product</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433", mt: 1}}>Invoicing</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Contract</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Accounting</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Proposal</Typography>
            </Box>
            <Box>
                <Typography variant='body1' sx={{fontWeight: 700, fontSize: "21px", lineHeight: "24px", color: "#181433"}}>Resources</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433", mt: 1}}>Proposal Template</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Invoice Template</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>Tuturoial</Typography>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433"}}>How to write a contract</Typography>
            </Box>
            <CustomBox1>
                <Typography variant='body1' sx={{fontWeight: 700, fontSize: "21px", lineHeight: "24px", color: "#181433"}}>Join Our Newsletter</Typography>
                <Search>
                    <StyledInputBase placeholder="Your email address" inputProps={{ 'aria-label': 'search' }} />
                    <Button style={{ backgroundColor: "#00E1F0", color: "#FFF"}}>Search</Button>
                </Search>
                <Typography variant='body2' sx={{fontSize: "16px", lineHeight: "24px", color: "#181433", letterSpacing: "-0.02em", opacity: 0.3, width: "310px"}}>
                    *  Will send you weekly updates for your better finance management.
                </Typography>
            </CustomBox1>
        </CustomBox>
        <Divider variant="middle" sx={{ mt: 4 }} />
        <CustomBox2>
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>Twitter</Typography>
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>Dribbble</Typography>
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>Instagram</Typography>
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>YouTube</Typography>
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>Slack</Typography>
        </CustomBox2>
        <CustomBox2>
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>2023 All Rights Reserved</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>raphaeldealmeida91@gmail.com</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant='body2' sx={{fontSize: "14px", lineHeight: "24px", color: "#757095", letterSpacing: "-0.02em", fontWeight: "500"}}>+33 6 45 85 45 46</Typography>
        </CustomBox2>
    </Container>
  </Box>
}

export default Footer2