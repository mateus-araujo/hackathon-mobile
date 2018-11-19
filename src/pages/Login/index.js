import React, { Component } from 'react'
import { AsyncStorage, Animated, Keyboard, KeyboardAvoidingView, View } from 'react-native'

// import { Button as ButtonRNE } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Input, Spinner } from '../../components'
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles'
import { colors } from '../../styles'
import NavigationService from '../../services/NavigationService'

const logoTransparent = require('../../images/logo-transparent.png')

class Login extends Component {
  state = {
    uc_code: '',
    cpf_cnpj: '',
    loading: false
  }

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    navigation = props.navigation
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT)
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardWillShow = () => {
    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start()
  }

  keyboardWillHide = () => {
    this.setState({ footer: true })

    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: IMAGE_HEIGHT,
    }).start()
  }

  onLogin() {
    const { uc_code, cpf_cnpj } = this.state

    if (!uc_code.length || !cpf_cnpj.length) {
      const error = 'Preencha os dados corretamente'

      Alert.alert(
        'Entrar',
        error,
        [
          { text: 'Ok' },
        ],
        { cancelable: false }
      )
    } else {
      this.setState({ loading: false })

      setTimeout(() => {
        AsyncStorage.setItem('@Enel:user', 'Robson Mateus Araujo')
        AsyncStorage.setItem('@Enel:token', 'token')

        NavigationService.resetAction('AuthLoading')
      }, 2000)
      
      this.setState({ loading: true })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.containerKeyboard}
          behavior='height'
        >
          <View style={styles.containerLogo}>
            <Animated.Image
              style={[styles.logo, { height: this.imageHeight }]}
              source={logoTransparent}
            />
          </View>

          <View style={styles.containerForm}>
            <Input
              placeholder="Número do cliente (sem o dígito)"
              value={this.state.uc_code}
              onChangeText={uc_code => this.setState({ uc_code })}
              onTouchStart={() => this.setState({ footer: false })}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />

            <Input
              placeholder="CPF ou CNPJ"
              value={this.state.cpf_cnpj}
              onChangeText={cpf_cnpj => this.setState({ cpf_cnpj })}
              onTouchStart={() => this.setState({ footer: false })}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />

            <Button onPress={this.onLogin.bind(this)}>
              {this.state.loading ?
                <Spinner size="small" color={colors.primary} />
                : 'ENTRAR'
              }
            </Button>

            <Button
              color="transparent"
              textColor={colors.dark}
              onPress={() => navigation.navigate('SearchUcCode')}
            >
              CONSULTAR NÚMERO DE CLIENTE
            </Button>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export { Login }
