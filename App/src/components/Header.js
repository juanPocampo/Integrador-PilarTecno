import { View, Text } from 'react-native'
import LogoEscaladores from '../assets/images/LogoEscaladores.png'
import React from 'react'

export default function Header() {
  return (
    <View>
      <Image src={LogoEscaladores} alt="Escaladores La Rioja"/>
    </View>
  )
}