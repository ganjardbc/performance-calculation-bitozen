import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardCC from './components/PerformanceCalculation'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      payload: props.payload
    }
  }

  componentDidUpdate() {
    if (this.props.payload !== this.state.payload) {
      this.setState({
        payload: this.props.payload
      })
    }
  }

  render() {
    const {
      payload
    } = this.state

    return (
      <div>
        <CardCC payload={payload} />
      </div>
    )
  }
}
