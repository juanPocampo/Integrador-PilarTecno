import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SectoresTable from '../../components/SectoresTable';
import { setTitle } from '../../redux/appRedux';
import EditSector from "../../components/Sectores/EditSector";
import EditVia from "../../components/Vias/EditVia";

const Administracion = () => {
  const dispatch = useDispatch();
  const sector = useSelector(state => state.sector.sector)
  const via = useSelector(state => state.sector.via)
  useEffect(() => {
    dispatch(setTitle('Administración'));
  }, [sector])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          {
            via.hasOwnProperty('_id') ? <EditVia /> :
              sector.hasOwnProperty('_id') ? <EditSector /> : <SectoresTable editable={true} />}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Administracion