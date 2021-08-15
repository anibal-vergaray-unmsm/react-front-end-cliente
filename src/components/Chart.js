import React,{useState, useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer, Legend } from 'recharts';
import Title from './Title';
import { getGruposPorEdad } from '../services/clienteApiService';

// Grafico
export default function Chart() {
  const [gruposXEdad, setGruposXEdad] = useState([]);
  const theme = useTheme();

  useEffect(()=>{
    refreshGruposXEdad();
  },[]);

  const refreshGruposXEdad = async () => {
      const gruposXEdad = await getGruposPorEdad();
      setGruposXEdad(gruposXEdad);
      console.log(gruposXEdad);
  }

  return (
    <React.Fragment>
      <Title>Grafico de cantidad de clientes por edad</Title>
      <ResponsiveContainer>
        <BarChart
          data={gruposXEdad}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="edad" stroke={theme.palette.text.secondary} >
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Cantidad
            </Label>
          </YAxis>
          <Legend/>
          <Bar type="monotone" dataKey="cantidad" stroke={theme.palette.primary.main} dot={false} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
