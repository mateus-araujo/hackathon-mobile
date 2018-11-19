import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts, metrics } from '../styles'

const Button = ({ color, textColor, children, ...props }) => (
  <TouchableOpacity
    style={[styles.button,
    color ?
      { backgroundColor: color }
      : null]
    }
    {...props}
  >
    {typeof children === "string" ?
      <Text
        style={[styles.buttonText,
        textColor ?
          { color: textColor }
          : null]
        }
      >
        {children}
      </Text>
      : children
    }
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 14,
    borderRadius: 7,
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold'
  }
})

export { Button }