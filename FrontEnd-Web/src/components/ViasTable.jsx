import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVia, getAllVias } from '../services/api.services';
import { useTheme } from '@emotion/react';
import { allSectores, setSector, setVia } from '../redux/Actions/api.action';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const ViasTable = (props) => {
  const theme = useTheme()
  const { editable } = props
  const sector = useSelector(state => state.sector.sector)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [vias, setVias] = useState(sector.vias || [])
  useEffect(() => {
    if (vias.length == 0) {
      setLoading(true)
      getAllVias().then((data) => setVias(data)).then(setLoading(false))
    }
  }, [])
  const addVia = () => {
    dispatch(setVia({ _id: "0" }))
  }
  const delVia = async (via) => {
    const asking = withReactContent(Swal)
    asking.fire({
      icon: "warning",
      title: "Nuevo Sector",
      text: "¿Está seguro de que quiere ELIMINAR los datos?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "red",
      confirmButtonText: 'Eliminar',
      confirmButtonColor: theme.palette.primary.light
    }).then(async (ans) => {
      if (ans.isConfirmed) {
        const oldVia = {
          sectorId: sector._id,
          id: via._id,
        }
        try {
          const chk = await deleteVia(oldVia.id, oldVia.sectorId)
          console.log(chk);
          asking.fire({
            icon: "success",
            title: "Via Borrada",
            text: "La Vía ha sido borrada con éxito.",
            confirmButtonColor: theme.palette.secondary.contrastText
          }).then(() => {
            dispatch(allSectores())
            dispatch(setSector({}))
            dispatch(setVia({}))
          })
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
  return (
    <Table width={"100%"}>
      <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
        <TableRow >
          <TableCell sx={{ color: theme.palette.primary.contrastText }}>Nombre</TableCell>
          <TableCell sx={{ color: theme.palette.primary.contrastText }}>Grado</TableCell>
          <TableCell sx={{ color: theme.palette.primary.contrastText }}>Sector</TableCell>
          <TableCell sx={{ color: theme.palette.primary.contrastText }}> Tipo</TableCell>
          <TableCell width={90} align="right" sx={{ color: theme.palette.primary.contrastText }}>Operaciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vias.map((row) => (
          <TableRow key={row._id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.grade}</TableCell>
            <TableCell>{row.sectorId?.name}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell align="right"><div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <EditIcon color="success" onClick={() => { dispatch(setVia(row)) }} />
              <DeleteOutlineIcon color="error" onClick={() => { delVia(row) }} />
            </div></TableCell>
          </TableRow>
        ))}
        {editable && <TableRow><TableCell colSpan={5} align="center" onClick={() => { addVia() }}><AddIcon color="primary" /></TableCell></TableRow>}
      </TableBody>
    </Table>
  )
}

export default ViasTable