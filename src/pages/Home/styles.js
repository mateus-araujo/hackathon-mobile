import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

export default styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.lighter
  },
  title: {
    color: colors.dark,
    fontSize: fonts.bigger,
    fontWeight: '600',    
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15
  }
})