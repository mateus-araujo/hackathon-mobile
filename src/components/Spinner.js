import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Spinner = ({ size, ...props }) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator {...props} size={size || 'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { Spinner }