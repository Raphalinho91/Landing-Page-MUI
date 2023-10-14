import React from 'react'
import { Box, styled } from "@mui/material";
import Vecteur2 from "../assets/Vecteur2.png";

const Rond2 = ({backgroundColor, color, marginTop}) => {
    const Rond2 = styled(Box)(({ theme }) => ({
        backgroundColor: backgroundColor,
        color: color,
        fontSize: "14px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        padding: "0.70rem 0.70rem",
        marginTop: marginTop,
      }));
  return <Rond2>
    <img src={Vecteur2} alt="" />
  </Rond2>;
}

export default Rond2