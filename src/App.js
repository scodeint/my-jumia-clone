import './App.css';
import Header from "./Components/Header";
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Sidebar />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
