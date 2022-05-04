import { Button, CircularProgress, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { allSectores, setSector, setVia } from '../../redux/Actions/api.action'
import { useTheme } from '@emotion/react';
import { addNewVia, editVia, getViasImage } from '../../services/api.services';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


function EditVia() {
  const theme = useTheme()
  const via = useSelector(state => state.sector.via)
  const sector = useSelector(state => state.sector.sector)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(via.name || "")
  const [grade, setGrade] = useState(via.grade || "")
  const [opener, setOpener] = useState(via.opener || "")
  const [climbingType, setClimbingType] = useState(via.climbingType || "")
  const [rockKind, setRockKind] = useState(via.rockKind || "")
  const [desc, setDesc] = useState(via.desc || "")
  const [preview, setPreview] = useState(via.preview || "")
  const [viaImages, setViaImages] = useState(via.images || [])
  const [images, setImages] = useState([])


  useEffect(() => {
    getViasImage().then((imgs) => {
      setImages(imgs)
    }).then(() => setLoading(false))
    console.log(viaImages);
  }, [])

  const handleImage = (url) => {
    const index = viaImages.indexOf(url)
    if (index == -1) {
      setViaImages((prevState) => [...prevState, url])
    } else {
      setViaImages((prevState) => prevState.filter((v, i) => i !== index))
    }
  }
  const addVia = async () => {
    const asking = withReactContent(Swal)
    asking.fire({
      icon: "question",
      title: "Nueva Via",
      text: "¿Está seguro de que quiere guardar los datos?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "red",
      confirmButtonText: 'Guardar',
      confirmButtonColor: theme.palette.secondary.contrastText
    }).then(async (ans) => {
      if (ans.isConfirmed) {
        const newVia = {
          sectorId: sector._id,
          name,
          opener,
          grade,
          climbingType,
          rockKind,
          desc,
          preview,
          images: viaImages
        }
        try {
          const chk = await addNewVia(newVia);
          console.log(chk);
          asking.fire({
            icon: "success",
            title: "Nueva Via",
            text: "La nueva via ha sido registrada con éxito.",
            confirmButtonColor: theme.palette.secondary.contrastText
          }).then(() => {
            dispatch(allSectores())
            dispatch(setSector({}))
            dispatch(setVia({}))
          })
        } catch (error) {
          throw new Error(error)
        }
      }
    }
    ).catch(() => asking.fire({
      icon: "error",
      title: "Error",
      text: "Lo sentimos hubo un error inesperado"
    }))
  }
  const edit = async () => {
    const asking = withReactContent(Swal)
    asking.fire({
      icon: "question",
      title: "Modificar Via",
      text: "¿Está seguro de que quiere guardar los cambios?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "red",
      confirmButtonText: 'Guardar',
      confirmButtonColor: theme.palette.secondary.contrastText
    }).then(async (ans) => {
      if (ans.isConfirmed) {
        const newVia = {
          sectorId: sector._id,
          name,
          opener,
          grade,
          climbingType,
          rockKind,
          desc,
          preview,
          images: viaImages
        }
        try {
          const chk = await editVia(via._id, newVia)
          console.log(chk);
          asking.fire({
            icon: "success",
            title: "Via Modificada",
            text: "La via ha sido modificada exitosamente.",
            confirmButtonColor: theme.palette.secondary.contrastText
          }).then(() => {
            dispatch(allSectores())
            dispatch(setSector({}))
            dispatch(setVia({}))
          })
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <IconButton color="error" onClick={() => dispatch(setVia({}))} sx={{ alignSelf: "flex-end" }}>
        <CloseIcon />
      </IconButton>
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid item sx={{ width: "100%" }}>
          <TextField id="upViaName" variant='standard' defaultValue={name} label="Nombre" onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid item sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
          <TextField id="upViaOpener" variant='standard' defaultValue={opener} label="Aperturista" onChange={(e) => setOpener(e.target.value)} />
          <TextField id="upViaGrade" variant='standard' defaultValue={grade} label="Grado" onChange={(e) => setGrade(e.target.value)} />
          <TextField id="upViaType" variant='standard' defaultValue={climbingType} label="Modalidad" onChange={(e) => setClimbingType(e.target.value)} />
          <TextField id="upViaRock" variant='standard' defaultValue={rockKind} label="Roca" onChange={(e) => setRockKind(e.target.value)} />

        </Grid>
        <Grid item sx={{ w: "100%" }}>
          <TextareaAutosize maxRows={4} aria-label="maximum height" placeholder="Descripción" defaultValue={desc} sx={{ w: "100%" }} onChange={(e) => setDesc(e.target.value)} />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Typography variant='subtitle1' sx={{ color: theme.palette.grey['700'] }}>Seleccione la Guía</Typography>
          {!loading ? preview == "" ?
            <ImageList sx={{ width: '100%', maxHeight: '60vh' }} cols={3} rowHeight={164}>
              {images.filter((element) => element.url.includes("Preview")).map((item) => (
                <ImageListItem key={item._id}>
                  <img
                    src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    onDoubleClick={() => { setPreview(item.url) }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            : <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                <Typography variant='caption' sx={{ color: theme.palette.primary.light }}>Guia Seleccionada</Typography>
                <RemoveIcon sx={{ color: theme.palette.primary.light }} onClick={() => setPreview("")} /></div>
              <img sx={{ width: '100%', maxHeight: '40vh' }} src={preview} />
            </div>
            : <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}><CircularProgress color="success" /></div>}
        </Grid>
        <Grid item sx={{ w: "100%" }}>
          <Typography variant='subtitle1' sx={{ color: theme.palette.grey['700'] }}>Seleccione Algunas Fotos</Typography>
          {!loading && <ImageList sx={{ width: '100%', maxHeight: '60vh' }} cols={3} rowHeight={256}>
            {images.filter((element) => !(element.url.includes("Preview"))).map((item) => (
              <ImageListItem key={item._id}>
                <img
                  style={{ container: { height: 164 } }}
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                  onDoubleClick={() => handleImage(item.url)}
                />
                <ImageListItemBar
                  actionIcon={viaImages.indexOf(item.url) != -1 ?
                    <CheckIcon sx={{ color: theme.palette.primary.light }} />
                    : <RemoveIcon sx={{ color: theme.palette.primary.light }} />}
                />
              </ImageListItem>
            ))}
          </ImageList>}
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          {via._id == 0
            ? <Button variant='contained' sx={{ width: "100%", color: theme.palette.primary.contrastText }} onClick={() => { addVia() }}>Nueva Via</Button>
            : <Button variant='contained' sx={{ width: "100%", backgroundColor: theme.palette.secondary.contrastText }} onClick={() => { edit() }}>Modificar Via</Button>}
        </Grid>
      </Grid>
    </div>
  )
}

export default EditVia