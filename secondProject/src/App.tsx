import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';
import { AdminPage } from './pages/AdminPage';
import { Layout } from './components/Layout/Layout';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          user ? <Navigate to="/dashboard" /> : <LoginPage onLogin={setUser} />
        } />
        
        <Route path="/" element={
          user ? <Layout user={user} onLogout={() => setUser(null)} /> : <Navigate to="/login" />
        }>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage user={user} />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="team" element={<TeamPage />} />
          {user?.role === 'admin' && <Route path="admin" element={<AdminPage />} />}
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
