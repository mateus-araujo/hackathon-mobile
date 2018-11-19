import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import IconA from 'react-native-vector-icons/AntDesign'
import IconF from 'react-native-vector-icons/Feather'
import IconM from 'react-native-vector-icons/MaterialIcons'

import { Header, CardPost } from '../../components'
import styles from './styles'
import { colors } from '../../styles'

class Home extends Component {
  state = {
    feed: [
      {
        id: 1,
        title: 'Cadastro',
        description: 'Cadastro realizado com sucesso',
        date: 'Ontem',
        status: 'Você acumulou 10 pontos',
        statusColor: 'green',
        icon: 'form',
      },
      {
        id: 2,
        title: 'Cadastro',
        description: 'Atualize novamente para ganhar pontos',
        date: 'Há 4 meses',
        status: 'Necessita atualização',
        statusColor: 'red',
        icon: 'form',
      },
      {
        id: 3,
        title: 'Aviso',
        description: 'Desligamento previsto na sua área',
        date: 'Próxima semana',
        status: 'Aguardando realização',
        statusColor: 'blue',
        icon: 'warning'
      },
      {
        id: 4,
        title: 'Solicitação',
        description: 'Conserto de queda de energia na residência',
        date: 'Semana passada',
        status: 'Bem sucedida',
        statusColor: 'green',
        icon: 'target'
      }
    ]
  }

  constructor(props) {
    super(props)

    navigation = props.navigation
  }

  renderIcon(icon) {
    switch (icon) {
      case 'form':
        return <IconA name={icon} size={35} color={colors.darker} />
      case 'target':
        return <IconF name={icon} size={35} color={colors.darker} />
      case 'warning':
        return <IconM name={icon} size={35} color={colors.darker} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Visão geral"
          iconButton="menu"
          onPressButton={() => navigation.toggleDrawer()}
        />

        <Text style={styles.title}>Histórico</Text>

        <ScrollView>
          {this.state.feed.map(update =>
            <CardPost
              key={update.id}
              title={update.title}
              details={update.description}
              date={update.date}
              status={update.status}
              statusColor={update.statusColor}
            >
              {this.renderIcon(update.icon)}
            </CardPost>
          )}
        </ScrollView>
      </View>
    )
  }
}

export { Home }
