import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';
import { setSector } from '../redux/Actions/api.action'
import { addNewSector } from '../services/api.services';

// Generate Order Data


const SectoresTable = (props) => {
  const { editable } = props
  const sectores = useSelector(state => state.sector.sectores)
  const dispatch = useDispatch()
  const edit = id => {
    dispatch(setSector(id))
  }
  const addSector = () => {
    dispatch(setSector({ _id: "0" }))
  }
  return (
    <Table >
      <TableHead>
        <TableRow>
          <TableCell >Nombre</TableCell>
          <TableCell >Vias</TableCell>
          <TableCell align="right" width={90}>Operaciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sectores?.map((row) => (
          <TableRow key={row._id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.vias.length}</TableCell>
            <TableCell align="right">
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <EditIcon color="success" onClick={() => { edit(row) }} />
                <DeleteOutlineIcon color="error" onClick={() => { alert(row) }} />
              </div>
            </TableCell>
          </TableRow>
        ))}
        {editable ? <TableRow><TableCell colSpan={3} align="center" onClick={() => { addSector() }}><AddIcon color="primary" /></TableCell></TableRow> : <></>}
      </TableBody>
    </Table>
  )
}

export default SectoresTable