/* eslint no-console: 0 */
'use strict'

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Main from './App/Main'

export default class rnGeolocation extends Component {
  render() {
    return (
      <Main />
    )
  }
}

AppRegistry.registerComponent('rnGeolocation', () => rnGeolocation)