import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

export const IMAGE_HEIGHT = Dimensions.get('window').width / 5
export const IMAGE_HEIGHT_SMALL = Dimensions.get('window').width / 10

export const FONT_SIZE = fonts.bigger
export const FONT_SIZE_SMALL = fonts.big

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
  },
  containerKeyboard: {
    flex: 10,
  },
  containerLogo: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  logoText: {
    marginTop: 5,
    fontSize: FONT_SIZE,
    fontWeight: 'bold',
    color: '#353B48'
  }
})
