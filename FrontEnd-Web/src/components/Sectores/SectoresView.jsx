import React from 'react'
import { Grid, List, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material';
import Preview from './Preview';

export default function SectoresView() {
  const theme = useTheme();
  const sectores = useSelector(state => state.sector.sectores)
  console.log(sectores);
  return (
    <>
      <Grid>
        <Typography variant='h3' sx={{
          color: (theme) => theme.palette.mode === 'light'
            ? theme.palette.primary.contrastText
            : theme.palette.primary.dark,
        }}>Sectores de Escalada Deportiva</Typography>
      </Grid>
      <Grid sx={{ width: "100%", height: "76vh", display: "grid", overflowY: 'scroll' }}>

        {
          sectores.length > 0 ?
            sectores.map((element, index) => (<Preview sector={element} key={index} />))
            : <CircularProgress color="success" sx={{ justifySelf: 'center', alignSelf: 'center' }} />
        }

      </Grid>
    </>
  )

}
