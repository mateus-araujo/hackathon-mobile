import React, { Component } from 'react'
import { Alert, Animated, Keyboard, View, ScrollView, Text, TextInput } from 'react-native'

// import { Button as ButtonRNE } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';

import { Header } from '../../components'
import axios from 'axios'

import { Button, Spinner } from '../../components'
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles'
import { colors } from '../../styles'

class Opinion extends Component {
  state = {
    text: '',
    loading: false
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
    this.setState({ footer: true })

    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: IMAGE_HEIGHT,
    }).start()
  }

  sendOpinion = async () => {
    const { text } = this.state

    this.setState({ loading: true })

    if (text.length)
      Alert.alert(
        'Sugestão',
        'Sua sugestão foi enviada',
        [
          { text: 'Ok', onPress: () => this.setState(this.baseState) },
        ],
        { cancelable: false }
      )
    else
      Alert.alert(
        'Erro',
        'Nenhum texto digitado',
        [
          { text: 'Ok', onPress: () => this.setState(this.baseState) },
        ],
        { cancelable: false }
      )

    this.setState({ loading: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Deixe sua opinião"
          iconButton="arrow-back"
          onPressButton={() => navigation.goBack()}
        />
        <ScrollView contentContainerStyle={styles.containerForm}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.inputText}
            placeholder="Sugestão"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            autoCorrect={false}
          />

          <Button onPress={this.sendOpinion.bind(this)}>
            {this.state.loading ?
              <Spinner size="small" color={colors.primary} />
              : 'SALVAR'
            }
          </Button>
        </ScrollView>
      </View>
    )
  }
}


export { Opinion }
