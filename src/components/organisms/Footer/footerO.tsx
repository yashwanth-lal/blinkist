import { makeStyles, styled } from "@mui/styles";
import BlinkistLogo from "../../../images/blinkistlogo.svg";
import { Typography } from "@mui/material";
import { FooterNav } from "../../molecules/FooterNav/footernavM";
import { FooterNavData as data } from "../../../data/FooterNavData";
import { Constants } from "../../../data/Constants";
import { Icons } from "../../atoms/Icon/iconA";

let MainContainer = styled("div")({
  
  width: "100%",
  height: 370,
  backgroundColor: "#F1F6F4",

});

let WrapContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    marginLeft:100
});

let LeftContainer = styled("div")({
  marginTop:50,
  top: 38,
  left: 244,
  width: 378,
  height: "128px !important",
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

let RightContainer = styled("div")({
  marginTop:50,
  top: 38,
  left: 310,
  display: "flex",
});

let useStyles = makeStyles({
  blinkistLogo: {
    width: 99.1,
    height: 24,
  },
  subtitle1: {
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 32,
  },
});

let BottomContainer = styled("div")({
  
  textAlign:"center",
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "sans-serif",
  color: "#6D787E",
  marginTop:45
});

export const Footer = () => {
  let styles = useStyles();

  return (
    <MainContainer 
    data-testid="footer">
      <WrapContainer>
        <LeftContainer>
          <Icons source={BlinkistLogo} className={styles.blinkistLogo} />
          <Typography   
            variant="subtitle2"
            sx={{
              color: "#0365F2",
              fontFamily: "sans-serif",
              fontWeight: 500,
              width:1000,
              fontSize: 24,
            }}
          >
            Big ideas in small packages<br></br>
            Start learning now
          </Typography>
        </LeftContainer>
        <RightContainer>
          <FooterNav title={data.Editorial.title} data={data.Editorial.data} />
          <FooterNav title={data.UsefulLinks.title} data={data.UsefulLinks.data}/>
          <FooterNav title={data.Company.title} data={data.Company.data} />
        </RightContainer>
        </WrapContainer>
        <BottomContainer>{Constants.footer.footerCopyright}</BottomContainer>
     
    </MainContainer>
  );
};
