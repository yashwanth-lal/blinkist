
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const Bg = styled("div")({
  
  backgroundImage:"url("+"https://wallpaperaccess.com/full/2314983.jpg"+")",
  backgroundSize:"cover",
  height:"100vh",
  paddingLeft:70
})

const useStyles= makeStyles({
login:{
positon:"relative",
top:34,
marginLeft:"700px",
},
text:{
  marginRight:400,
  color:"red"
}
})
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const classes= useStyles()
  return (
      <>

      <Bg data-testid="background">
     <br /><br /><br /><br /><br /><br />
     <br />
     <br />
     <br />
     
           <img style={{marginLeft:650,padding:20,borderRadius:40,marginBottom:20}} src="data:image/png;base64,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" alt="Paris" />

     
  <div className={classes.login} >
  <Button style={{
          maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "300px",
          minHeight: "70px",
          marginLeft:20
        }}
         className="classes.login"
          variant ="contained" 
          size="large" 
          onClick={() => loginWithRedirect()} 
          color='primary'>Log In </Button>
  
  </div>

  <h1 style={{color:"white",width:800,marginLeft:530,marginTop:50}}>PLEASE LOGIN TO ENTER THE BLINKIST APP</h1>
  </Bg>
  </>
  )
};

export default LoginButton;