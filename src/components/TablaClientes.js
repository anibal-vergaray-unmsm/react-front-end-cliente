import React,{useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getClientes } from '../services/clienteApiService';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});

export default function TablaClientes() {

  const classes = useStyles();    
  const [clientes,setClientes]=useState([]);

  useEffect(() => {
      refreshClientes();
  }, [])

  const refreshClientes = async()=>{
      const newClientes = await getClientes();
      setClientes(newClientes);
      //console.log(newClientes);
  }

  return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Nombres</StyledTableCell>
              <StyledTableCell align="right">Apellidos</StyledTableCell>
              <StyledTableCell align="right">Fecha de Nacimiento</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <StyledTableRow key={cliente.clienteid}>
                <StyledTableCell component="th" scope="row">
                  {cliente.clienteid}
                </StyledTableCell>
                <StyledTableCell align="right">{cliente.nombre}</StyledTableCell>
                <StyledTableCell align="right">{cliente.apellido}</StyledTableCell>
                <StyledTableCell align="right">{cliente.fechadenacimiento}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}