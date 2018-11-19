import React, { Component } from 'react'
import { Alert, AsyncStorage, Image, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconF5 from 'react-native-vector-icons/FontAwesome5'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconO from 'react-native-vector-icons/Octicons'
import { connect } from 'react-redux'

import { logoutUser } from '../store/actions'
import { colors, fonts, metrics } from '../styles'

const youngManAvatar = require('../images/young-man-avatar.png')

const SideBarItem = ({ children, text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.item}>
      {children}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

class SideBar extends Component {
  state = {
    user: '',
    points: 96,
    logout: false
  }

  constructor(props) {
    super(props)

    navigation = props.navigation
  }

  async componentWillMount() {
    const user = await AsyncStorage.getItem('@Enel:user')
    this.setState({ user })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerUser} onTouchEnd={() => navigation.navigate('Home')}>
          <View style={styles.containerAvatar}>
            <Image
              style={styles.avatar}
              source={youngManAvatar}
            />
            <View>
              <Text style={styles.textAvatar}>Olá, {this.state.user}</Text>
              <Text style={styles.points}>Pontuação: {this.state.points} pontos</Text>
              <View style={styles.mainBar}>
                <View style={styles.completedBar} />
              </View>
            </View>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.containerItens}>
          <SideBarItem text="Cadastro e atualização" onPress={() => navigation.navigate('UpdateRegister')}>
            <IconF style={styles.icon} name="edit" size={25} color={colors.primary} />
          </SideBarItem>

          <SideBarItem text="Pagamentos" onPress={() => navigation.navigate('Payments')}>
            <IconF5 style={styles.icon} name="money-bill" size={25} color={colors.primary} />
          </SideBarItem>

          <SideBarItem text="Serviços e operações" onPress={() => navigation.navigate('Reminders')}>
            <IconM style={styles.icon} name="settings" size={25} color={colors.primary} />
          </SideBarItem>

          <SideBarItem text="Acompanhamento de consumo" onPress={() => navigation.navigate('Reminders')}>
            <IconO style={styles.icon} name="graph" size={25} color={colors.primary} />
          </SideBarItem>

          <SideBarItem text="Nos dê sua opinião" onPress={() => navigation.navigate('Opinion')}>
            <IconM style={styles.icon} name="chat" size={25} color={colors.primary} />
          </SideBarItem>

          <SideBarItem text="Sair" onPress={() => this.setState({ logout: true })}>
            <IconF style={styles.icon} name="power-off" size={25} color={colors.primary} />
          </SideBarItem>
        </ScrollView>

        {this.state.logout ?
          Alert.alert(
            'Deseja mesmo sair?',
            'Se você sair precisará fazer login novamente',
            [
              {
                text: 'Cancelar',
                onPress: () => this.setState({ logout: false }),
                style: 'cancel'
              },
              {
                text: 'Sair',
                onPress: () => this.props.logoutUser()
              },
            ],
            { cancelable: false }
          )
          : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2D3E",
  },
  containerItens: {
    paddingHorizontal: metrics.paddingHorizontal,
    paddingBottom: 30,
  },
  containerUser: {
    height: 180,
    backgroundColor: '#263445',
    justifyContent: 'center',
  },
  containerAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    margin: 15
  },
  textAvatar: {
    color: colors.white,
    fontSize: fonts.littleBig,
    width: 135,
    textAlign: 'justify'
  },
  points: {
    marginTop: 10,
    color: colors.white,
    fontSize: fonts.regular
  },
  mainBar: {
    marginTop: 2,
    // padding: 3,
    borderRadius: 5,
    backgroundColor: colors.lighter
  },
  completedBar: {
    padding: 3,
    width: 70,
    width: 130,
    borderRadius: 2,
    backgroundColor: 'green'
  },
  editIcon: {
    alignSelf: 'flex-end',
    width: 25,
    marginRight: 20
  },
  button: {
    padding: 10,
    marginVertical: 1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 25,
    width: 25
  },
  icon: {
    width: 25
  },
  text: {
    marginLeft: 20,
    color: colors.white,
    fontSize: fonts.regular,
    alignSelf: 'center'
  }
})

const mapStateToProps = ({ auth }) => {
  const { user } = auth

  return { user }
}

const _SideBar = connect(mapStateToProps, { logoutUser })(SideBar)

export { _SideBar as SideBar }
