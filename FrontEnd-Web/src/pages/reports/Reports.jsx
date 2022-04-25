import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from "../../components/Chart";
import {setTitle} from '../../redux/appRedux';

const Reports = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Reportes'));
  })

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          <Chart/>          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Reports