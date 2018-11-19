import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { colors, fonts } from '../styles'

class CardPost extends Component {
  renderImage() {
    switch (this.props.sourceImage) {
      case 'slip_and_fall':
        return slip_and_fall
      case 'heartbeat':
        return heartbeat
      case 'thermometer':
        return thermometer
      case 'blood_pressure':
        return blood_pressure
      default:
        return ""
    }
  }

  render() {
    return (
      <View style={styles.containerMain}>
        {this.props.children}
        <View style={styles.containerSubMain}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.details}>{this.props.details}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.date}>{this.props.date}</Text>
            <Text style={
              [
                styles.status,
                { color: this.props.statusColor ? this.props.statusColor : null }
              ]}>
              {this.props.status}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  containerMain: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerSubMain: {
    justifyContent: 'space-around',
    flex: 1,
    marginLeft: 15,
    marginRight: 5
  },
  icon: {
    height: 60,
    width: 60
  },
  title: {
    color: colors.darker,
    fontWeight: '600',
    fontSize: fonts.big,
    marginBottom: 5
  },
  details: {
    color: colors.darker,
    fontWeight: '400',
    fontSize: fonts.regular,
    marginBottom: 5
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  date: {
    color: colors.darker,
    fontWeight: '300',
    fontSize: fonts.small
  },
  status: {
    alignSelf: 'flex-end',
    color: 'colors.darker',
    fontWeight: 'bold',
    fontSize: fonts.small
  }
}

export { CardPost }

