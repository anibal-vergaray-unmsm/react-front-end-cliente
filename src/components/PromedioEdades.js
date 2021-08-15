import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { getPromedioEdades } from '../services/clienteApiService';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function PromedioEdades() {
  const classes = useStyles();
  const [promedioEdades,setPromedioEdades] = useState(null);
  const today = new Date();
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  useEffect(() => {
    refreshPromedioEdades();
  }, []);

  const refreshPromedioEdades = async () => {
      const promedioEdades = await getPromedioEdades();
      setPromedioEdades(promedioEdades[0].promedio.toFixed(2));
      //console.log(promedioEdades[0].promedio);
  }
  return (
    <React.Fragment>
      <Title>Promedio de Edades</Title>
      <Typography component="p" variant="h4">
        {promedioEdades}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {today.toLocaleDateString(undefined, optionsDate)}
      </Typography>
    </React.Fragment>
  );
}
