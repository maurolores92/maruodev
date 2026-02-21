import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const AIToolsPage: React.FC = () => {

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex justify-center">
      <Container maxWidth="md" sx={{ py: 6 }}>

        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
            AI Lab
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.8, mb: 2 }}>
            Proyectos experimentales con Inteligencia Artificial
          </Typography>

          <Typography variant="body1" sx={{ mx: 'auto'}}>
            Este espacio reúne algunas de las herramientas y productos en los que estoy trabajando.
            Los publico para que puedas probarlos y explorar cómo aplico IA en soluciones reales.
          </Typography>
        </Box>

        {/* Tools Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card
              elevation={0}
              sx={{
                borderRadius: '20px',
                border: '1px solid rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                },
              }}
            >
              <CardActionArea >
                <CardContent sx={{ p: 4}}>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    Post Generator
                  </Typography>

                  <Typography variant="body2" color={"black"} sx={{ opacity: 0.7, mb: 3 }}>
                    Generador de publicaciones optimizadas para LinkedIn utilizando IA.
                    Permite definir tema, tono y longitud del contenido.
                  </Typography>

                <a href="/post-generator"><Button
                    variant="contained"
                    sx={{
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    Probar herramienta
                  </Button> </a>
                  
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </main>
  );
};

export default AIToolsPage;