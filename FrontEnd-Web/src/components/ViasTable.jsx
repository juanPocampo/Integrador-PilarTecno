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
import { getAllVias } from '../services/api.services';
import { useTheme } from '@emotion/react';
import { setVia } from '../redux/Actions/api.action';

const ViasTable = (props) => {
  const theme = useTheme()
  const { editable } = props
  const sector = useSelector(state => state.sector.sector)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [vias, setVias] = useState(sector.vias || [])
  useEffect(() => {
    if (sector.hasOwnProperty('vias')) {
      setLoading(true)
      getAllVias().then((data) => setVias(data)).then(setLoading(false))
    }
  }, [])
  const addVia = () => {
    dispatch(setVia({ _id: "0" }))
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
              <EditIcon color="success" onClick={() => { alert(row._id) }} />
              <DeleteOutlineIcon color="error" onClick={() => { alert(row._id) }} />
            </div></TableCell>
          </TableRow>
        ))}
        {editable && <TableRow><TableCell colSpan={5} align="center" onClick={() => { addVia() }}><AddIcon color="primary" /></TableCell></TableRow>}
      </TableBody>
    </Table>
  )
}

export default ViasTable