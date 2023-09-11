import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/styles'
import Button from '../components/Button'
import { useCounter } from '../hooks/useCounter'

export default function ContadorScreen() {
  const {contador,SetContador} = useCounter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Button onPress={()=>SetContador(1)} type="left" text="+1"/>
      <Button onPress={()=>SetContador(-1)} type="right" text="-1"/>
    </View>
  )
}
