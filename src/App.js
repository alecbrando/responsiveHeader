import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
    </Router>
  );
}

export default App;
