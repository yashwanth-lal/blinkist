import { Typography } from "@mui/material";
import { styled } from "@mui/styles";

let MainContainer = styled("div")({
  textAlign:"center",
  width: 214,
  height: 200,
});

let Items = styled("div")({
  marginTop: 16,
});

export interface FooterNavProps {
  title: string;
  data: Array<string>;
}

export const FooterNav = (props: FooterNavProps) => {
  let {data, title} = props
  
  return (
    <MainContainer  data-testid="footernav">
      <Typography variant="body1" sx={{fontFamily: 'sans-serif', fontWeight: 700, fontSize: 16, color: '#03314B'}}>{title}</Typography>
      {data.map((text, key) => {
        return (
          <Items key={key}>
            <Typography variant="body2" sx={{color: '#6D787E', fontFamily: 'sans-serif', fontWeight: 400}}>{text}</Typography>
          </Items>
        );
      })}
    </MainContainer>
  );
};
