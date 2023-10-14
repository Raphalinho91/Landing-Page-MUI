import React from 'react'
import { Box, styled } from "@mui/material";
import Vecteur3 from "../assets/Vecteur3.png";

const Rond3 = ({backgroundColor, color, marginTop}) => {
    const Rond3 = styled(Box)(({ theme }) => ({
        backgroundColor: backgroundColor,
        color: color,
        fontSize: "14px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        padding: "0.60rem 0.65rem",
        marginTop: marginTop,
      }));
  return <Rond3>
    <img src={Vecteur3} alt="" />
  </Rond3>;
}

export default Rond3