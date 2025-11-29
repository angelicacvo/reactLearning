import { 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Box,
  Chip,
  Avatar,
  IconButton,
  LinearProgress
} from '@mui/material';
import { 
  TrendingUp, 
  Assignment, 
  People, 
  CalendarToday,
  Add,
  MoreVert,
  CheckCircle
} from '@mui/icons-material';
import './DashboardPage.css';

interface DashboardPageProps {
  user: any;
}

export function DashboardPage({ user }: DashboardPageProps) {
  const stats = [
    { icon: <Assignment />, value: 12, label: 'Proyectos Activos', color: '#1976d2', trend: '+8%' },
    { icon: <CheckCircle />, value: 89, label: 'Tareas Completadas', color: '#2e7d32', trend: '+12%' },
    { icon: <People />, value: 24, label: 'Miembros del Equipo', color: '#9c27b0', trend: '+3' },
    { icon: <CalendarToday />, value: 5, label: 'Deadlines Próximos', color: '#ed6c02', trend: '2 días' },
  ];

  const projects = [
    { name: 'Plataforma E-commerce', progress: 75, status: 'En Progreso', priority: 'Alta', team: 8, deadline: '15 Dic' },
    { name: 'App Móvil iOS', progress: 45, status: 'En Progreso', priority: 'Media', team: 5, deadline: '22 Dic' },
    { name: 'Sistema CRM', progress: 90, status: 'Revisión', priority: 'Alta', team: 6, deadline: '10 Dic' },
  ];

  return (
    <Box className="dashboard">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937', mb: 1 }}>
            Bienvenido, {user?.name} 👋
          </Typography>
          <Typography variant="body1" sx={{ color: '#6b7280' }}>
            Aquí está un resumen de tus proyectos y actividades
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
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            '&:hover': {
              boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
            }
          }}
        >
          Nuevo Proyecto
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 4 }}>
        {stats.map((stat, index) => (
          <Card key={index} 
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ 
                    bgcolor: `${stat.color}15`, 
                    color: stat.color, 
                    p: 1.5, 
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {stat.icon}
                  </Box>
                  <Chip 
                    label={stat.trend} 
                    size="small" 
                    sx={{ 
                      bgcolor: '#d1fae5', 
                      color: '#065f46',
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }} 
                    icon={<TrendingUp sx={{ fontSize: 16 }} />}
                  />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937', mt: 2, mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b7280' }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937', mb: 2 }}>
            Proyectos Recientes
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {projects.map((project, index) => (
              <Card 
                key={index}
                sx={{ 
                  borderRadius: 3,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937' }}>
                        {project.name}
                      </Typography>
                      <Chip 
                        label={project.status} 
                        size="small"
                        sx={{ 
                          bgcolor: '#dbeafe', 
                          color: '#1e40af',
                          fontWeight: 600
                        }}
                      />
                      <Chip 
                        label={project.priority} 
                        size="small"
                        color={project.priority === 'Alta' ? 'error' : 'default'}
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        Progreso
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                        {project.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={project.progress} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        bgcolor: '#e5e7eb',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                        }
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <People sx={{ fontSize: 18, color: '#6b7280' }} />
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        {project.team} miembros
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarToday sx={{ fontSize: 18, color: '#6b7280' }} />
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        Entrega: {project.deadline}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937', mb: 2 }}>
            Actividad Reciente
          </Typography>
          <Card sx={{ borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <CardContent>
              <Box className="activity-feed">
                {[
                  { user: 'Ana García', action: 'completó la tarea', task: 'Diseño de UI', time: 'Hace 5 min', avatar: 'AG' },
                  { user: 'Carlos López', action: 'comentó en', task: 'Backend API', time: 'Hace 15 min', avatar: 'CL' },
                  { user: 'María Rodríguez', action: 'creó un nuevo', task: 'Sprint Planning', time: 'Hace 1 hora', avatar: 'MR' },
                  { user: 'Juan Pérez', action: 'actualizó el estado de', task: 'Database Migration', time: 'Hace 2 horas', avatar: 'JP' },
                ].map((activity, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 2, mb: 3, '&:last-child': { mb: 0 } }}>
                    <Avatar 
                      sx={{ 
                        width: 40, 
                        height: 40,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        fontWeight: 600
                      }}
                    >
                      {activity.avatar}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ color: '#1f2937', mb: 0.5 }}>
                        <strong>{activity.user}</strong> {activity.action} <strong>{activity.task}</strong>
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#6b7280' }}>
                        {activity.time}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
