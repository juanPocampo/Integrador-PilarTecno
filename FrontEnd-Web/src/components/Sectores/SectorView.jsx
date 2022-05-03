import React from 'react'
import { useSelector } from 'react-redux'

export default function SectorView() {
  const sector = useSelector(state => state.sector.sector)
  return (
    <div>{sector.name}</div>
  )
}
