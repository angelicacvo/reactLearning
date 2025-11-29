# Guía Rápida: Material-UI en React

## Instalación
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Componentes Principales

### 1. Layout Components (Box, Grid, Container)

```tsx
import { Box, Grid, Container } from '@mui/material';

// Box - Contenedor flexible con sistema de props
<Box sx={{ padding: 2, backgroundColor: '#fff' }}>
  Contenido
</Box>

// Grid - Sistema de rejilla responsive
<Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    Columna 1
  </Grid>
  <Grid item xs={12} md={6}>
    Columna 2
  </Grid>
</Grid>
```

### 2. Inputs (TextField, Button)

```tsx
import { TextField, Button } from '@mui/material';
import { Search, Add } from '@mui/icons-material';

// TextField con icono
<TextField
  placeholder="Buscar..."
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    ),
  }}
/>

// Button con gradiente personalizado
<Button 
  variant="contained" 
  startIcon={<Add />}
  sx={{ 
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    px: 3,
    py: 1.5,
    borderRadius: 2,
  }}
>
  Crear
</Button>
```

### 3. Data Display (Card, Typography, Chip)

```tsx
import { Card, CardContent, Typography, Chip } from '@mui/material';

<Card sx={{ borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
  <CardContent>
    <Typography variant="h6" sx={{ fontWeight: 600 }}>
      Título
    </Typography>
    <Typography variant="body2" sx={{ color: '#6b7280' }}>
      Descripción
    </Typography>
    <Chip label="Estado" color="primary" size="small" />
  </CardContent>
</Card>
```

### 4. Icons

```tsx
import { 
  TrendingUp, 
  Assignment, 
  People, 
  CalendarToday,
  MoreVert 
} from '@mui/icons-material';

<TrendingUp />  // Icono simple
<Assignment sx={{ fontSize: 24, color: '#1976d2' }} />  // Con estilos
```

### 5. Progress (LinearProgress)

```tsx
import { LinearProgress } from '@mui/material';

<LinearProgress 
  variant="determinate" 
  value={75} 
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
```

### 6. Avatar & AvatarGroup

```tsx
import { Avatar, AvatarGroup } from '@mui/material';

// Avatar simple
<Avatar sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
  MG
</Avatar>

// Grupo de avatares
<AvatarGroup max={3}>
  <Avatar>MG</Avatar>
  <Avatar>JP</Avatar>
  <Avatar>AL</Avatar>
</AvatarGroup>
```

## Sistema sx Props

El prop `sx` permite estilos inline con acceso al tema:

```tsx
<Box 
  sx={{ 
    padding: 3,              // 3 * 8px = 24px
    margin: { xs: 1, md: 2 }, // Responsive
    bgcolor: 'primary.main',  // Color del tema
    borderRadius: 2,          // 2 * 4px = 8px
    boxShadow: 3,            // Sombra predefinida
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {             // Pseudo-selectores
      bgcolor: 'primary.dark'
    }
  }}
>
  Contenido
</Box>
```

## Mezclando Material-UI con CSS Manual

### Ejemplo 1: Card de MUI + Barra de progreso manual

```tsx
// Component
<Card sx={{ borderRadius: 3 }}>
  <CardContent>
    <Typography variant="h6">Proyecto</Typography>
    <div className="progress-bar-custom">
      <div className="progress-fill-custom" style={{ width: '75%' }} />
    </div>
  </CardContent>
</Card>

// CSS manual
.progress-bar-custom {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
}

.progress-fill-custom {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}
```

### Ejemplo 2: Grid de MUI + Cards manuales

```tsx
// MUI Grid
<Grid container spacing={3}>
  {items.map(item => (
    <Grid item xs={12} md={6} key={item.id}>
      {/* Card manual con clase CSS */}
      <div className="custom-card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </Grid>
  ))}
</Grid>
```

## Responsive Design

```tsx
// Breakpoints: xs, sm, md, lg, xl
<Box 
  sx={{ 
    width: { xs: '100%', md: '50%' },      // 100% en mobile, 50% en desktop
    padding: { xs: 2, sm: 3, md: 4 },      // Padding progresivo
    display: { xs: 'block', md: 'flex' }   // Layout diferente según tamaño
  }}
/>

// Grid responsive
<Grid container spacing={3}>
  <Grid item xs={12} sm={6} md={4} lg={3}>  {/* 1 col mobile, 2 tablet, 3 desktop, 4 xl */}
    Card
  </Grid>
</Grid>
```

## Happy Paths

### Dashboard con estadísticas
```tsx
<Grid container spacing={3}>
  {stats.map(stat => (
    <Grid item xs={12} sm={6} md={3} key={stat.label}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ bgcolor: `${stat.color}15`, p: 1.5, borderRadius: 2 }}>
              {stat.icon}
            </Box>
            <Chip label={stat.trend} size="small" icon={<TrendingUp />} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 2 }}>
            {stat.value}
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280' }}>
            {stat.label}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
```

### Lista de proyectos con acciones
```tsx
<Grid container spacing={3}>
  {projects.map(project => (
    <Grid item xs={12} md={6} lg={4} key={project.id}>
      <Card sx={{ borderRadius: 3, '&:hover': { boxShadow: 6 } }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">{project.name}</Typography>
            <IconButton size="small">
              <MoreVert />
            </IconButton>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1, my: 2 }}>
            <Chip label={project.status} size="small" />
            <Chip label={project.priority} color="error" size="small" />
          </Box>
          
          <LinearProgress variant="determinate" value={project.progress} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <AvatarGroup max={3}>
              {project.team.map((member, idx) => (
                <Avatar key={idx}>{member}</Avatar>
              ))}
            </AvatarGroup>
            <Typography variant="caption">{project.deadline}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
```

## Recursos

- Documentación oficial: https://mui.com/
- Componentes: https://mui.com/material-ui/all-components/
- Iconos: https://mui.com/material-ui/material-icons/
- Sistema de Grid: https://mui.com/material-ui/react-grid/
- sx props: https://mui.com/system/getting-started/the-sx-prop/
