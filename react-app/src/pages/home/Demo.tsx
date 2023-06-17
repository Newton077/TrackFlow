import { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <>
    <CardContent>
      <Typography variant="h5" component="div">
      Transformando la gestión de la cadena de suministro utilizando tokens no fungibles. certificado único para un producto, que establece un registro inmutable de su origen, proceso de fabricación, transporte y almacenamiento.
      </Typography>
    </CardContent>
    <CardActions>
      <Button href="/custom/supplychain" size="small">Comenzar</Button>
    </CardActions>
  </>
);

function Demo() {
  return (<div>
    <CssBaseline />
    <Container maxWidth="md" sx={{ m: '4rem' }}>
      <Typography sx={{ fontSize: 40 }} color="white" gutterBottom>
        Trackflow
      </Typography>
      <Grid container spacing={2}>
        <Box sx={{ minWidth: 275, maxWidth: 300 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </Grid>
      <Box sx={{ height: '100vh' }} />
    </Container>
  </div>);
}

function SupplyChain() {
  return (<div>
    <h3>DemoChildren page</h3>
  </div>);
}

export { Demo, SupplyChain };
