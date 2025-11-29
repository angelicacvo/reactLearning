import { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Chip,
  Avatar,
  AvatarGroup,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { 
  Search, 
  Add, 
  MoreVert, 
  FilterList,
  TrendingUp,
  AttachMoney
} from '@mui/icons-material';
import './ProjectsPage.css';

export function ProjectsPage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    { 
      id: 1,
      name: 'Plataforma E-commerce', 
      description: 'Sistema completo de venta online con carrito y pagos',
      progress: 75, 
      status: 'En Progreso', 
      priority: 'Alta', 
      budget: '$85,000',
      team: ['MG', 'JP', 'AL'], 
      deadline: '15 Dic',
      category: 'Desarrollo Web'
    },
    { 
      id: 2,
      name: 'App Móvil iOS', 
      description: 'Aplicación nativa para gestión de tareas empresariales',
      progress: 45, 
      status: 'En Progreso', 
      priority: 'Media', 
      budget: '$62,000',
      team: ['CR', 'LM'], 
      deadline: '22 Dic',
      category: 'Mobile'
    },
    { 
      id: 3,
      name: 'Sistema CRM', 
      description: 'CRM personalizado para gestión de clientes y ventas',
      progress: 90, 
      status: 'Revisión', 
      priority: 'Alta', 
      budget: '$120,000',
      team: ['PS', 'IT', 'MG'], 
      deadline: '10 Dic',
      category: 'Software Empresarial'
    },
    { 
      id: 4,
      name: 'Dashboard Analytics', 
      description: 'Panel de control con métricas y visualizaciones en tiempo real',
      progress: 30, 
      status: 'Planificación', 
      priority: 'Media', 
      budget: '$45,000',
      team: ['JP', 'CR'], 
      deadline: '5 Ene',
      category: 'Data Analytics'
    },
    { 
      id: 5,
      name: 'API REST v2', 
      description: 'Actualización completa de la API con nuevas funcionalidades',
      progress: 60, 
      status: 'En Progreso', 
      priority: 'Alta', 
      budget: '$55,000',
      team: ['AL', 'PS', 'LM'], 
      deadline: '28 Dic',
      category: 'Backend'
    },
    { 
      id: 6,
      name: 'Rediseño UX/UI', 
      description: 'Renovación completa del diseño de la plataforma principal',
      progress: 85, 
      status: 'Revisión', 
      priority: 'Media', 
      budget: '$38,000',
      team: ['IT', 'MG'], 
      deadline: '12 Dic',
      category: 'Diseño'
    },
  ];

  const getPriorityColor = (priority: string) => {
    return priority === 'Alta' ? 'error' : priority === 'Media' ? 'warning' : 'success';
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'En Progreso': return '#dbeafe';
      case 'Revisión': return '#fef3c7';
      case 'Planificación': return '#e9d5ff';
      default: return '#d1fae5';
    }
  };

  return (
    <Box className="projects-page">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937', mb: 1 }}>
            Gestión de Proyectos
          </Typography>
          <Typography variant="body1" sx={{ color: '#6b7280' }}>
            Administra y monitorea todos tus proyectos activos
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Add />}
          sx={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            px: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
          }}
        >
          Crear Proyecto
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar proyectos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1, bgcolor: 'white', borderRadius: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button 
          variant="outlined" 
          startIcon={<FilterList />}
          sx={{ 
            borderRadius: 2,
            textTransform: 'none',
            px: 3
          }}
        >
          Filtros
        </Button>
      </Box>

      <div className="stats-cards">
        <div className="stat-card-mini">
          <div className="stat-icon-mini" style={{ background: '#dbeafe' }}>
            <TrendingUp style={{ color: '#1976d2' }} />
          </div>
          <div>
            <div className="stat-value-mini">6</div>
            <div className="stat-label-mini">Proyectos Activos</div>
          </div>
        </div>
        <div className="stat-card-mini">
          <div className="stat-icon-mini" style={{ background: '#d1fae5' }}>
            <AttachMoney style={{ color: '#2e7d32' }} />
          </div>
          <div>
            <div className="stat-value-mini">$405K</div>
            <div className="stat-label-mini">Presupuesto Total</div>
          </div>
        </div>
        <div className="stat-card-mini">
          <div className="stat-icon-mini" style={{ background: '#fef3c7' }}>
            📊
          </div>
          <div>
            <div className="stat-value-mini">64%</div>
            <div className="stat-label-mini">Progreso Promedio</div>
          </div>
        </div>
      </div>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
        {projects.map((project) => (
          <Card key={project.id} 
              sx={{ 
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 1 }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', mb: 2, minHeight: 40 }}>
                      {project.description}
                    </Typography>
                  </Box>
                  <IconButton 
                    size="small"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                  >
                    <MoreVert />
                  </IconButton>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip 
                    label={project.status} 
                    size="small"
                    sx={{ 
                      bgcolor: getStatusColor(project.status), 
                      color: '#1f2937',
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}
                  />
                  <Chip 
                    label={project.priority} 
                    size="small"
                    color={getPriorityColor(project.priority)}
                    sx={{ fontWeight: 600, fontSize: '0.75rem' }}
                  />
                  <Chip 
                    label={project.category} 
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: '0.75rem' }}
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Progreso
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#1f2937' }}>
                      {project.progress}%
                    </Typography>
                  </Box>
                  <div className="progress-bar-custom">
                    <div 
                      className="progress-fill-custom" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: '1px solid #e5e7eb' }}>
                  <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, fontSize: '0.875rem' } }}>
                    {project.team.map((member, idx) => (
                      <Avatar 
                        key={idx}
                        sx={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          fontSize: '0.75rem'
                        }}
                      >
                        {member}
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="caption" sx={{ color: '#6b7280', display: 'block' }}>
                      {project.budget}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      📅 {project.deadline}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
        ))}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>Ver Detalles</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Editar</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Archivar</MenuItem>
      </Menu>
    </Box>
  );
}
