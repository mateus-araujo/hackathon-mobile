import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { Header, PaymentItem } from '../../components'
import styles from './styles'
import { colors } from '../../styles'

class Payments extends Component {
  state = {
    feed: [
      {
        id: 1,
        title: 'Comunicação de pagamento'
      },
      {
        id: 2,
        title: 'Segunda via',
      },
      {
        id: 3,
        title: 'Débito automático',
      },
      {
        id: 4,
        title: 'Débito online',
      },
      {
        id: 5,
        title: 'Parcelamento de dívida',
        icon: 'divide'
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
          title="Pagamentos"
          iconButton="arrow-back"
          onPressButton={() => navigation.goBack()}
        />

        <Text style={styles.title}>Formas de pagamento</Text>

        <ScrollView>
          {this.state.feed.map(item =>
            <PaymentItem key={item.id} title={item.title} />
          )}
        </ScrollView>
      </View>
    )
  }
}

export { Payments }
