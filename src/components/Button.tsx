import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import styles from '../styles/styles';

interface Props{
  onPress:()=>void,
  type:"left"|"right",
  text:string
}
export default function Button({onPress,type,text}:Props) {
  return (
    <TouchableHighlight onPress={onPress} 
        style={type == "left"?{...styles.button,...styles.buttonLeft}:{...styles.button,...styles.buttonRight}}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  )
}
