import { useTheme } from '@emotion/react'
import { CardHeader, } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Typography } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'

export default function Preview({ sector }) {
    const sec = sector
    const theme = useTheme()
    return (
        <Card sx={{ height: '25vh', width: '100%', marginY: 3, borderRadius: '0' }}>
            <CardHeader>
                <Typography color={theme.palette.primary.light}>{sec.name}</Typography>
            </CardHeader>
            <CardMedia src={sec.map} alt='Lo siento'></CardMedia>
        </Card>
    )
}
