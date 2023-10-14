import { Box, Card, CardContent, Container, Grid, styled, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import Carre1 from "./../assets/Carre1.png"
import Carre2 from "./../assets/Carre2.png"
import Carre3 from "./../assets/Carre3.png"
import Footer1 from './Footer1'

const Formulaire = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
    }));

    const Img1 = styled(Box)(({ theme }) => ({
        display: "flex",
        width: "80%",
        [theme.breakpoints.down("lg")]: {
            width: "20%",
        },
        [theme.breakpoints.down("md")]: {
            width: "20%"
        },
    }));

    const Img2 = styled(Box)(({ theme }) => ({
        display: "flex",
        marginTop: "200px",
        width: "80%",
        [theme.breakpoints.down("lg")]: {
            width: "20%",
        },
        [theme.breakpoints.down("md")]: {
            width: "20%",
            marginTop: "150px",
        },
    }));

    const Img3 = styled(Box)(({ theme }) => ({
        display: "flex",
        zIndex: "2",
        marginTop: "-10px",
        marginLeft: "91%",
        width: "80%",
        [theme.breakpoints.down("lg")]: {
            width: "20%",
        },
        [theme.breakpoints.down("md")]: {
            width: "20%",
            marginLeft: "94%",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        display: "flex",
        fontSize: "60px",
        color: "#FFF",
        fontWeight: "800",
        width: "555px",
        margin: theme.spacing(15, 0, 0, 4),
        [theme.breakpoints.down("lg")]: {
          fontSize: "40px",
          width: "355px",
        },
    }));

  return <Box sx={{ backgroundColor: "#4F46BA", minHeight: "530px", mt: 10 }}>
        <Container>
            <CustomBox>
                <Box sx={{ flex: "1" }}>
                    <Img1>
                        <img src={Carre1} alt="Carre1" style={{ maxWidth: "90%" }}/>
                    </Img1>
                    <Title variant="h1">
                        We are here to help you grow your business
                    </Title>
                    <Img2>
                        <img src={Carre2} alt="Carre2" style={{ maxWidth: "90%" }}/>
                    </Img2>
                </Box>

                <Box sx={{flex: "1.25"}}>
                    <Card sx={{ mt: 10, width: "75%", height: "550px", backgroundColor: "#F6F9FF", borderRadius: "none" }}>
                        <Img3>
                            <img src={Carre3} alt="carre3" style={{ maxWidth: "90%" }} />
                        </Img3>
                        <CardContent>
                            <Grid container spacing={6} sx={{ mt: -11 }}>
                                <Grid xs={32} sm={16} item>
                                    <TextField label="Name :" placeholder='Full Name' variant="standard" color="secondary" fullWidth  />
                                </Grid>
                                <Grid xs={12} sm={16} item>
                                    <TextField type="email" label="Email :" placeholder="Your Email Address" variant='standard' color="secondary" fullWidth  />
                                </Grid>
                                <Grid xs={12} sm={16} item>
                                    <TextField type="number" label="Phone :" placeholder='Enter Your Phone' variant="standard" color="secondary" fullWidth  />
                                </Grid>
                                <Grid xs={12} sm={16} item>
                                    <TextField type="password" label="Password :" placeholder='****************' variant="standard" color="secondary" fullWidth  />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: "#000000", marginTop: "30px" }} >Sign Up</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </CustomBox>
        </Container>
        <Footer1 />
    </Box>
}

export default Formulaire