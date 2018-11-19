import React, { Component } from 'react'
import { Animated, Keyboard, Picker, View, ScrollView, Text } from 'react-native'

// import { Button as ButtonRNE } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';

import { Header } from '../../components'
import axios from 'axios'

import { Button, Input, Spinner } from '../../components'
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles'
import { colors } from '../../styles'
import cities from '../../services/cities'

class UpdateRegister extends Component {
  state = {
    classess: [
      { id: 1, label: 'Residencial', value: 'Residencial' },
      { id: 2, label: 'Rural', value: 'Rural' },
      { id: 3, label: 'Comercial', value: 'Comercial' },
      { id: 4, label: 'Industrial', value: 'Industrial' },
    ],
    class: 'Residencial',
    name: '',
    cpf_cnpj: '',
    email: '',
    state: 'CE',
    cities: cities[0].cidades,
    city: ''
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

  onUpdateRegister() {
    const { email, password } = this.props

    this.props.UpdateRegisterUser({ email, password })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Cadastro e atualização"
          iconButton="arrow-back"
          onPressButton={() => navigation.goBack()}
        />
        
        <ScrollView contentContainerStyle={styles.containerForm}>
          <View style={[styles.picker, { marginTop: 30 }]}>
            <Picker
              selectedValue={this.state.class}
              onValueChange={itemValue => this.setState({ class: itemValue })}
              mode="dropdown"
            >
              {this.state.classess.map(item =>
                <Picker.Item key={item.id} label={item.label} value={item.value} />
              )}
            </Picker>
          </View>

          <Input
            placeholder="Nome"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            autoCorrect={false}
          />

          <Input
            placeholder="CPF ou CNPJ"
            value={this.state.cpf_cnpj}
            onChangeText={cpf_cnpj => this.setState({ cpf_cnpj })}
            autoCorrect={false}
            keyboardType="numeric"
          />

          <Input
            placeholder="Telefone"
            value={this.state.telephone}
            onChangeText={telephone => this.setState({ telephone })}
            autoCorrect={false}
            keyboardType="phone-pad"
          />

          <Input
            placeholder="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />

          <Input
            placeholder="CEP"
            value={this.state.cep}
            onChangeText={cep => this.setState({ cep })}
            autoCorrect={false}
            keyboardType="numeric"
          />
          
          <Text style={{ marginLeft: 5 }}>Estado</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.state}
              onValueChange={(value, position) => this.setState({
                state: value,
                cities: cities[position].cidades,
                city: cities[position].cidades[0]
              })}
              mode="dialog"
            >
              {cities.map(item =>
                <Picker.Item key={item.sigla} label={item.nome} value={item.sigla} />
              )}
            </Picker>
          </View>
          
          <Text style={{ marginLeft: 5 }}>Cidade</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.city}
              onValueChange={itemValue => this.setState({ city: itemValue })}
              mode="dialog"
            >
              {this.state.cities.map((item, position) =>
                <Picker.Item key={position} label={item} value={item} />
              )}
            </Picker>
          </View>

          <Input
            placeholder="Bairro"
            value={this.state.bairro}
            onChangeText={bairro => this.setState({ bairro })}
            autoCorrect={false}
          />

          <Input
            placeholder="Logradouro (rua, avenida)"
            value={this.state.logradouro}
            onChangeText={logradouro => this.setState({ logradouro })}
            autoCorrect={false}
          />

          <Input
            placeholder="Número"
            value={this.state.numero}
            onChangeText={numero => this.setState({ numero })}
            autoCorrect={false}
          />

          <Button onPress={this.onUpdateRegister.bind(this)}>
            {this.props.loading ?
              <Spinner size="small" color={colors.primary} />
              : 'SALVAR'
            }
          </Button>
        </ScrollView>
      </View>
    )
  }
}

export { UpdateRegister }
