import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

let useStyles = makeStyles({
  logoutStyle: {
    position: "absolute",
    left: 1520,
    top: -6,
    backgroundColor:"red",
   
  }
})

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const styles = useStyles()
  return (
    <React.Fragment>
      {isAuthenticated &&
        <Button onClick={() => logout()} variant="outlined" className={styles.logoutStyle}>
          Log Out 
        </Button>
      }
    </React.Fragment>
  )
};

export default LogoutButton;