import { styled } from "@mui/styles";

export interface BookDetailsProps {
  header: React.ReactNode;
  footer?: React.ReactNode;
  body?: React.ReactNode;
}

let BodyComponent = styled("div")({
  position: "relative",
  marginLeft:400,
  padding:15,
  width:500,
  minHeight:500
});

let FooterComponent = styled("div")({
    position: 'relative',
    top: 177
})
let Whole = styled("div")({
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  overflowX: "hidden",
  maxHeight:"auto"
})
let head = styled("div")({
  position:"relative"
})

export const BookDetails = (props: BookDetailsProps) => {
  let { header, footer, body } = props;
  return (
    
    <Whole>
      <div style={{position:"relative",right:240}}>
      {header}
      </div>
      <BodyComponent>{body}</BodyComponent>
      <FooterComponent>{footer}</FooterComponent>
    </Whole>
    
  );
};
