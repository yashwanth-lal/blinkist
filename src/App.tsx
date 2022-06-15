import MyLibrary from "./pages/MyLibrary/mylibP";
import EntrepreneurshipPage from './pages/Entrepreneurship/enterpreneurshipP'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetailsPage from "./pages/BookDetails/bookdetailsP";
import './App.css';
import LoginButton from './loginbutton';
import {useAuth0} from '@auth0/auth0-react';

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
         <Router>
         <Routes>
           <Route path="/" element={<MyLibrary />} />
           <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
           <Route path="/bookdetails" element={<BookDetailsPage /> } />
         </Routes>
       </Router>
    }
    </>
  );
}
export default App;