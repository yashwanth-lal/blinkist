import React from 'react';
import './App.css';
import LoginButton from './loginbutton';
import {useAuth0} from '@auth0/auth0-react';
import Router from './router';
function App() {
  const { isLoading,isAuthenticated} = useAuth0();
  if(isLoading 
  ){
    return <div>Loading...wait</div>
  }
  return (
   <>
   {(!isAuthenticated)? <LoginButton />: null}
        {isAuthenticated &&
         <Router />
    }
    </>
  );
}
export default App;