import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, metrics, fonts } from '../styles'

const Header = ({ title, iconButton, onPressButton }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={onPressButton}
      >
        <Icon name={iconButton} size={25} color={colors.dark} />
      </TouchableHighlight>

      {title ?
        <Text style={styles.title}>{title}</Text>
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    minHeight: metrics.headerHeight,
  },
  button: {
    padding: 15,
    marginEnd: 5
  },
  title: {
    fontSize: fonts.big,
    fontWeight: '500',
    color: colors.dark,
  }
})

export { Header }
