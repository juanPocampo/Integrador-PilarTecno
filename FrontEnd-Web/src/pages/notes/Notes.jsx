import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TablenNotes from '../../components/TablenNotes';
import {setTitle} from '../../redux/appRedux';

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Notas'));
  })

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          <TablenNotes/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Notes