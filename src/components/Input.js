import React from 'react'
import { StyleSheet, Dimensions, TextInput } from 'react-native'
import { colors, fonts, metrics } from '../styles'

const Input = ({ ...props }) => (
  <TextInput
    {...props}
    style={styles.inputText}
  />
)

const styles = StyleSheet.create({
  inputText: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 14,
    borderRadius: 7,
    borderBottomColor: colors.lighter,
    borderWidth: 1,
    paddingHorizontal: metrics.paddingHorizontal,
    paddingVertical: 5,
    backgroundColor: colors.white,
    marginBottom: 15,
    fontSize: fonts.littleBig,
    fontWeight: '800',
    color: colors.dark
  }
})

export { Input }
