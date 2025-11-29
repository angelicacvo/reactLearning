import { useState } from 'react';
import './TeamPage.css';

export const TeamPage = () => {
  const [members] = useState([
    {
      id: 1,
      name: 'María García',
      role: 'Product Designer',
      email: 'maria.garcia@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=667eea&color=fff',
      status: 'active',
      projects: 3,
      tasks: 12,
      completedTasks: 8,
      department: 'Diseño'
    },
    {
      id: 2,
      name: 'Juan Pérez',
      role: 'Senior Developer',
      email: 'juan.perez@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Juan+Perez&background=10b981&color=fff',
      status: 'active',
      projects: 5,
      tasks: 18,
      completedTasks: 15,
      department: 'Desarrollo'
    },
    {
      id: 3,
      name: 'Ana López',
      role: 'Project Manager',
      email: 'ana.lopez@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Ana+Lopez&background=f59e0b&color=fff',
      status: 'active',
      projects: 8,
      tasks: 25,
      completedTasks: 20,
      department: 'Gestión'
    },
    {
      id: 4,
      name: 'Carlos Ruiz',
      role: 'Lead Developer',
      email: 'carlos.ruiz@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Carlos+Ruiz&background=ef4444&color=fff',
      status: 'active',
      projects: 4,
      tasks: 16,
      completedTasks: 12,
      department: 'Desarrollo'
    },
    {
      id: 5,
      name: 'Laura Martín',
      role: 'Backend Developer',
      email: 'laura.martin@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Laura+Martin&background=8b5cf6&color=fff',
      status: 'away',
      projects: 2,
      tasks: 10,
      completedTasks: 7,
      department: 'Desarrollo'
    },
    {
      id: 6,
      name: 'Pedro Sánchez',
      role: 'Data Engineer',
      email: 'pedro.sanchez@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Pedro+Sanchez&background=06b6d4&color=fff',
      status: 'active',
      projects: 3,
      tasks: 14,
      completedTasks: 11,
      department: 'Data'
    },
    {
      id: 7,
      name: 'Isabel Torres',
      role: 'Frontend Developer',
      email: 'isabel.torres@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Isabel+Torres&background=ec4899&color=fff',
      status: 'active',
      projects: 4,
      tasks: 15,
      completedTasks: 13,
      department: 'Desarrollo'
    },
    {
      id: 8,
      name: 'Roberto Díaz',
      role: 'System Architect',
      email: 'roberto.diaz@empresa.com',
      avatar: 'https://ui-avatars.com/api/?name=Roberto+Diaz&background=f97316&color=fff',
      status: 'active',
      projects: 6,
      tasks: 20,
      completedTasks: 17,
      department: 'Arquitectura'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredMembers = filter === 'all' 
    ? members 
    : members.filter(m => m.department.toLowerCase() === filter.toLowerCase());

  return (
    <div className="team-page">
      <div className="page-header">
        <div>
          <h1>Equipo de Trabajo</h1>
          <p>Gestiona y colabora con los miembros de tu equipo</p>
        </div>
        <button className="btn-primary">+ Invitar Miembro</button>
      </div>

      <div className="team-stats">
        <div className="stat">
          <span className="stat-number">{members.length}</span>
          <span className="stat-label">Total Miembros</span>
        </div>
        <div className="stat">
          <span className="stat-number">{members.filter(m => m.status === 'active').length}</span>
          <span className="stat-label">Activos</span>
        </div>
        <div className="stat">
          <span className="stat-number">{members.reduce((acc, m) => acc + m.projects, 0)}</span>
          <span className="stat-label">Proyectos Totales</span>
        </div>
        <div className="stat">
          <span className="stat-number">{members.reduce((acc, m) => acc + m.tasks, 0)}</span>
          <span className="stat-label">Tareas Asignadas</span>
        </div>
      </div>

      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          Todos
        </button>
        <button className={filter === 'desarrollo' ? 'active' : ''} onClick={() => setFilter('desarrollo')}>
          Desarrollo
        </button>
        <button className={filter === 'diseño' ? 'active' : ''} onClick={() => setFilter('diseño')}>
          Diseño
        </button>
        <button className={filter === 'gestión' ? 'active' : ''} onClick={() => setFilter('gestión')}>
          Gestión
        </button>
      </div>

      <div className="team-grid">
        {filteredMembers.map(member => (
          <div key={member.id} className="member-card">
            <div className="member-header">
              <img src={member.avatar} alt={member.name} className="member-avatar" />
              <span className={`status-indicator ${member.status}`}></span>
            </div>

            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-email">{member.email}</p>

            <div className="member-department">
              <span>📁 {member.department}</span>
            </div>

            <div className="member-stats">
              <div className="stat-item">
                <span className="stat-value">{member.projects}</span>
                <span className="stat-label">Proyectos</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{member.tasks}</span>
                <span className="stat-label">Tareas</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{Math.round((member.completedTasks / member.tasks) * 100)}%</span>
                <span className="stat-label">Completado</span>
              </div>
            </div>

            <div className="member-actions">
              <button className="btn-action">💬 Mensaje</button>
              <button className="btn-action">📧 Email</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
