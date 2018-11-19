import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

export const IMAGE_HEIGHT = Dimensions.get('window').width / 5
export const IMAGE_HEIGHT_SMALL = Dimensions.get('window').width / 10

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    flex: 1,  
  },
  containerKeyboard: {
    // flex: 10,
  },
  containerLogo: {
    marginTop: -75,
    alignItems: 'center',
    marginBottom: 50,
  },
  containerFooter: {
    position: 'absolute',
    bottom: 0,
    // flex: 1,
    width: Dimensions.get('window').width,
    borderTopWidth: 2,
    borderTopColor: colors.white,
    alignItems: 'center'
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  footerText: {
    position: 'relative',
    bottom: 0,
    color: colors.dark,
    padding: 10,
    fontSize: fonts.littleBig,
    fontWeight: 'bold',
  }
})
