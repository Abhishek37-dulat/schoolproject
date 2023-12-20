import { Box, Typography, styled } from "@mui/material";
import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
const TopMostBarBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "90%",
  height: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px 0px",
}));
const LogoBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "40%",
  height: "max-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  "&>p:nth-of-type(1)": {
    fontWeight: "900",
    fontSize: "38px",
    padding: "0",
    lineHeight: "1",
    textTransform: "uppercase",
  },
  "&>p:nth-of-type(2)": {
    fontWeight: "700",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
}));
const RightItems = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "60%",
  height: "max-content",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
}));
const ItemBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  height: "max-content",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  "&>button": {
    backgroundColor: theme.palette.buttoncolor.main,
    color: theme.palette.plain.main,
    border: "none",
    outline: "none",
    fontSize: "18px",
    padding: "10px 20px",
    boxShadow: "0px 0px 3px rgba(0,0,0,0.2)",
  },
  "&>div:nth-of-type(2)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "10px",
    "&>p:nth-of-type(1)": {
      fontWeight: "600",
      fontSize: "18px",
      padding: "0",
      lineHeight: "1",
    },
    "&>p:nth-of-type(2)": {
      fontWeight: "400",
      fontSize: "16px",
    },
  },
}));
const TopMostBar = () => {
  return (
    <TopMostBarBox>
      <LogoBox>
        <p>FOX.</p>
        <p>UNIVERSITY</p>
      </LogoBox>
      <RightItems>
        <ItemBox>
          <Box>
            <SendRoundedIcon
              color="buttoncolor"
              style={{
                transform: "rotate(-45deg)",
                color: "buttoncolor",
                fontSize: "24px",
              }}
            />
          </Box>
          <Box>
            <Typography>Email</Typography>
            <Typography>youremail@email.com</Typography>
          </Box>
        </ItemBox>
        <ItemBox>
          <Box>
            <CallRoundedIcon
              color="buttoncolor"
              style={{
                color: "buttoncolor",
                fontSize: "24px",
              }}
            />
          </Box>
          <Box>
            <Typography>Call</Typography>
            <Typography>Call Us: +123 2355 98</Typography>
          </Box>
        </ItemBox>
        <ItemBox>
          <button>Apply now</button>
        </ItemBox>
      </RightItems>
    </TopMostBarBox>
  );
};

export default TopMostBar;
