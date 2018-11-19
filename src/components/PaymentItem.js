import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors, fonts } from '../styles';

const PaymentItem = ({ title, children }) => (
  <TouchableOpacity style={styles.container}>
    {children}
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    borderColor: colors.light,
    borderBottomWidth: 2,
    flexDirection: 'row'
  },
  text: {
    fontSize: fonts.littleBig,
    fontWeight: 'bold'
  }
})

export { PaymentItem }
