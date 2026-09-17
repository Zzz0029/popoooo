import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import Achievements from './pages/admin/Achievements';
import Projects from './pages/admin/Projects';
import Certifications from './pages/admin/Certifications';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
