import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton1 = ({backgroundColor, color, buttonText, heroBtn, guideBtn, getStartedBtn}) => {
  const CustomButton1 = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700px",
    fontSize: "14px",
    width: "60%",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "10px",
    textTransform: "none",
    flexDirection: "row",
    border: "2px solid transparent",
    margin: theme.spacing(0, 2, 0, 2),
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, 1, 3, 1),
      width: (heroBtn || getStartedBtn) && "25%",
      fontSize: (heroBtn || getStartedBtn) && "12px"
    },
    [theme.breakpoints.down("sm")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, 1, 3, 1),
      width: (heroBtn || getStartedBtn) && "25%",
      fontSize: (heroBtn || getStartedBtn) && "12px"
    },
    [theme.breakpoints.down("sx")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%"
    },
  }));

  return <CustomButton1>{buttonText}</CustomButton1>;
};

export default CustomButton1;