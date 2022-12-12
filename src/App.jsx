import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SideNavbar from './Components/SideNavbar';
import Leads from './Components/Leads';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import ProjectTracking from './Components/ProjectTracking';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Leads />} />
          <Route path="/projecttracking" element={<ProjectTracking />} />
        </Routes>
      </Router>
      <SideNavbar />
    </>
  );
}

export default App;
