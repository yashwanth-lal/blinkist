import MyLibrary from "./pages/MyLibrary/mylibP";
import EntrepreneurshipPage from './pages/Entrepreneurship/enterpreneurshipP'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetailsPage from "./pages/BookDetails/bookdetailsP";
import { makeStyles } from "@mui/styles";

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MyLibrary />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
          <Route path="/bookdetails" element={<BookDetailsPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
