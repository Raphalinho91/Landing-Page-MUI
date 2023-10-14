import React from 'react'
import { Box, styled } from "@mui/material";
import Vecteur1 from "../assets/Vecteur1.png";

const Rond1 = ({backgroundColor, color, marginTop}) => {
    const Rond1 = styled(Box)(({ theme }) => ({
        backgroundColor: backgroundColor,
        color: color,
        fontSize: "14px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        padding: "1.10rem 1.05rem",
        marginTop: marginTop,
      }));
  return <Rond1>
    <img src={Vecteur1} alt="" />
  </Rond1>;
}

export default Rond1