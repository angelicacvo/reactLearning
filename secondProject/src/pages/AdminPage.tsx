import { useState } from 'react';
import './AdminPage.css';

export const AdminPage = () => {
  const [analytics] = useState({
    totalUsers: 156,
    activeProjects: 24,
    pendingTasks: 189,
    completedToday: 45,
    serverStatus: 'online',
    apiCalls: '1.2M',
    avgResponseTime: '120ms',
    errorRate: '0.02%'
  });

  const [recentUsers] = useState([
    { id: 1, name: 'Nuevo Usuario', email: 'nuevo@empresa.com', date: '2025-11-28', status: 'pending' },
    { id: 2, name: 'Test User', email: 'test@empresa.com', date: '2025-11-27', status: 'active' },
    { id: 3, name: 'Demo Account', email: 'demo@empresa.com', date: '2025-11-26', status: 'inactive' }
  ]);

  const [systemLogs] = useState([
    { id: 1, level: 'info', message: 'Sistema iniciado correctamente', time: '10:30:45' },
    { id: 2, level: 'success', message: 'Backup completado exitosamente', time: '09:15:22' },
    { id: 3, level: 'warning', message: 'Uso de memoria al 75%', time: '08:45:10' },
    { id: 4, level: 'error', message: 'Error en API externa (timeout)', time: '07:20:33' }
  ]);

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>⚙️ Panel de Administración</h1>
          <p>Gestiona usuarios, configuración y monitorea el sistema</p>
        </div>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <div className="card-header">
            <h3>📊 Analytics General</h3>
            <span className="refresh-btn">🔄</span>
          </div>
          <div className="analytics-grid">
            <div className="metric">
              <span className="metric-label">Total Usuarios</span>
              <span className="metric-value">{analytics.totalUsers}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Proyectos Activos</span>
              <span className="metric-value">{analytics.activeProjects}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Tareas Pendientes</span>
              <span className="metric-value">{analytics.pendingTasks}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Completadas Hoy</span>
              <span className="metric-value success">{analytics.completedToday}</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h3>🖥️ Estado del Sistema</h3>
            <span className={`status-badge ${analytics.serverStatus}`}>
              {analytics.serverStatus === 'online' ? '🟢 Online' : '🔴 Offline'}
            </span>
          </div>
          <div className="system-metrics">
            <div className="system-metric">
              <span className="metric-icon">📡</span>
              <div>
                <span className="metric-label">API Calls (24h)</span>
                <span className="metric-value">{analytics.apiCalls}</span>
              </div>
            </div>
            <div className="system-metric">
              <span className="metric-icon">⚡</span>
              <div>
                <span className="metric-label">Avg Response Time</span>
                <span className="metric-value">{analytics.avgResponseTime}</span>
              </div>
            </div>
            <div className="system-metric">
              <span className="metric-icon">⚠️</span>
              <div>
                <span className="metric-label">Error Rate</span>
                <span className="metric-value">{analytics.errorRate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h3>👥 Usuarios Recientes</h3>
            <button className="btn-small">Ver Todos</button>
          </div>
          <div className="users-list">
            {recentUsers.map(user => (
              <div key={user.id} className="user-item">
                <div className="user-info">
                  <div className="user-avatar">{user.name.charAt(0)}</div>
                  <div>
                    <p className="user-name">{user.name}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
                <span className={`status-pill ${user.status}`}>
                  {user.status === 'active' ? 'Activo' : user.status === 'pending' ? 'Pendiente' : 'Inactivo'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h3>📝 Logs del Sistema</h3>
            <button className="btn-small">Limpiar</button>
          </div>
          <div className="logs-list">
            {systemLogs.map(log => (
              <div key={log.id} className={`log-item ${log.level}`}>
                <span className="log-time">{log.time}</span>
                <span className="log-level">{log.level.toUpperCase()}</span>
                <span className="log-message">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="admin-actions">
        <button className="action-btn danger">🗑️ Limpiar Caché</button>
        <button className="action-btn warning">🔄 Reiniciar Servicios</button>
        <button className="action-btn primary">💾 Backup Manual</button>
        <button className="action-btn secondary">⚙️ Configuración Avanzada</button>
      </div>
    </div>
  );
};
