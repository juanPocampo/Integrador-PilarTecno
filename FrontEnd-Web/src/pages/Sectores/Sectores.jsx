import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { setTitle } from '../../redux/appRedux';
import SectoresView from "../../components/Sectores/SectoresView";
import SectorView from "../../components/Sectores/SectorView";
import { useTheme } from "@mui/material";


const Sectores = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const sector = useSelector(state => state.sector.sector)
  useEffect(() => {
    dispatch(setTitle('Escaladores La Rioja'));
  })
  return (
    <Grid container spacing={3} >
      <Grid item xs={12} >
        <Paper sx={{ backgroundColor: theme.palette.secondary.light, display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center" }}>
          {sector ? <SectoresView /> : <SectorView sector={sector} />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Sectores;
