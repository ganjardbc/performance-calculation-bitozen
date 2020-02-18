import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardCC from './components/PerformanceCalculation'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      payload
    } = this.props

    return (
      <div>
        <CardCC payload={payload} />
      </div>
    )
  }
}
