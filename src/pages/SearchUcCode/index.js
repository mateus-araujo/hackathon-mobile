import React, { Component } from 'react'
import { Alert, Animated, Keyboard, KeyboardAvoidingView, View } from 'react-native'
import validator from 'validator'

import api from '../../services/api'
import { Button, Input, Spinner } from '../../components'
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles'
import { colors } from '../../styles'

const logoTransparent = require('../../images/logo-transparent.png')

class SearchUcCode extends Component {
  state = {
    cpf_cnpj: '',
    name: '',
    email: '',
    password: '',
    r_password: '',
    loading: '',
    error: ''
  }

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    navigation = props.navigation
    this.baseState = this.state
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
    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: IMAGE_HEIGHT,
    }).start()
  }

  validate = ({ cpf_cnpj, name }) => {
    let error = ''
    let isError = false

    if (validator.isEmpty(cpf_cnpj)) {
      error = error + "- CPF ou CNPJ vazio \n"
      isError = true
    }

    if (validator.isEmpty(name)) {
      error = error + "- Nome vazio \n"
      isError = true
    }

    return { error, isError }
  }

  onCreateAccount = async () => {
    const { cpf_cnpj, name } = this.state

    const { error, isError } = this.validate(this.state)

    if (isError)
      this.setState({ error })
    else {
      this.setState({ loading: true })

      await api.post('/auth/register', {
        cpf_cnpj,
        name
      })
        .then(response => {
          const { user } = response.data
          console.log(user)

          Alert.alert(
            'Busca',
            `Seu código: ${user.uc_code}`,
            [
              { text: 'Ok' },
            ],
            { cancelable: false }
          )

          this.setState(this.baseState)
        })
        .catch(({ response }) => {
          const { error } = response.data

          if (error === 'User already exists')
            this.setState({ error: 'Já existe um usuário com esse email' })
          else if (error === 'Registration failed')
            this.setState({ error: 'Erro ao cadastrar, verifique os dados e tente novamente' })
        })
        .finally(() => {
          this.setState({ loading: false })
        })
    }

    if (this.state.error.length)
      Alert.alert(
        'Erro',
        this.state.error,
        [
          { text: 'Ok' },
        ],
        { cancelable: false }
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.containerKeyboard}
          behavior='padding'
        >
          <View style={styles.containerLogo}>
            <Animated.Image
              style={[styles.logo, { height: this.imageHeight }]}
              source={logoTransparent}
            />
          </View>

          <View style={styles.containerForm}>
            <Input
              placeholder="CPF ou CNPJ"
              value={this.state.cpf_cnpj}
              onChangeText={cpf_cnpj => this.setState({ cpf_cnpj })}
              onTouchStart={() => this.setState({ footer: false })}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />

            <Input
              placeholder="Primeiro nome do titular"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              autoCorrect={false}
            />

            <Button onPress={this.onCreateAccount.bind(this)}>
              {this.state.loading ?
                <Spinner size="small" color={colors.primary} />
                : 'CONSULTAR'
              }
            </Button>
            <Button
              onPress={() => navigation.goBack()}
              color="#eee"
              textColor="#5A6978"
            >
              VOLTAR
            </Button>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export { SearchUcCode }
