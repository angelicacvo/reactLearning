import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  user: any;
  onLogout: () => void;
}

export const Layout = ({ user, onLogout }: LayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
          </svg>
          <span>Project Manager</span>
        </div>

        <div className="nav-links">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            <span>📊</span> Dashboard
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            <span>📁</span> Proyectos
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''}>
            <span>👥</span> Equipo
          </NavLink>
          {user?.role === 'admin' && (
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>
              <span>⚙️</span> Admin
            </NavLink>
          )}
        </div>

        <div className="nav-user">
          <img src={user?.avatar} alt={user?.name} />
          <div className="user-info">
            <span className="user-name">{user?.name}</span>
            <span className="user-role">{user?.role === 'admin' ? 'Administrador' : 'Usuario'}</span>
          </div>
          <button onClick={handleLogout} className="btn-logout">
            Salir
          </button>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
