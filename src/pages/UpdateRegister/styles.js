import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts, metrics } from '../../styles'

export const IMAGE_HEIGHT = Dimensions.get('window').width / 5
export const IMAGE_HEIGHT_SMALL = Dimensions.get('window').width / 10

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighter,
    flex: 1,
  },
  containerForm: {
    marginHorizontal: 20,
    paddingBottom: 50
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
  picker: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 14,
    borderRadius: 7,
    borderBottomColor: colors.lighter,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    marginBottom: 15,
    fontSize: fonts.littleBig,
    fontWeight: '800',
    color: colors.dark,
    justifyContent: 'center'
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
