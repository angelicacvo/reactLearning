import { useState } from 'react';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: (user: any) => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const user = {
        id: 1,
        name: email.includes('admin') ? 'Admin User' : 'Regular User',
        email: email,
        role: email.includes('admin') ? 'admin' : 'user',
        avatar: `https://ui-avatars.com/api/?name=${email}&background=667eea&color=fff`
      };
      
      onLogin(user);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="logo">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#grad1)"/>
              <path d="M2 17L12 22L22 17" stroke="url(#grad1)" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="url(#grad1)" strokeWidth="2"/>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea"/>
                  <stop offset="100%" stopColor="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1>Project Manager Pro</h1>
          <p>Gestiona tus proyectos con inteligencia</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@empresa.com"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>

          <div className="login-hints">
            <p>💡 <strong>Demo:</strong></p>
            <p>Usuario: <code>user@empresa.com</code></p>
            <p>Admin: <code>admin@empresa.com</code></p>
            <p>Contraseña: cualquiera</p>
          </div>
        </form>
      </div>
    </div>
  );
};
