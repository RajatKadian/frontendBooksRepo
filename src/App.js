import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBook from "./components/createBook"; // Updated import
import ShowBook from "./components/showBook.js";

function App() {
  return (
    <div className="App">
      
       <Router>
          <Routes>
            <Route path="/" element={<ShowBook />} />
            <Route path="/create-book" element={<CreateBook />} /> {/* Updated usage */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
