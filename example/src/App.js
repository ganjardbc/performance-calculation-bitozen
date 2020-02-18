import React, { Component } from 'react'

import PerformanceCalculation from 'performance-calculation-bitozen'

export default class App extends Component {
  render () {
    let payload = {
        "midPayload": {
            "result": {
                "weight": "60%",
                "score": "0",
                "totalScore": "0"
            },
            "process": {
                "weight": "40%",
                "score": "0",
                "totalScore": "0"
            },
            "paMidYear": "0",
            "gradePerformance": "K",
        },
        "finalPayload": {
            "result": {
                "weight": "60%",
                "score": "0",
                "totalScore": "0"
            },
            "process": {
                "weight": "40%",
                "score": "0",
                "totalScore": "0"
            },
            "paMidYear": "0",
            "gradePerformance": "K",
        }
    }
    return (
      <div>
        <PerformanceCalculation payload={payload} />
      </div>
    )
  }
}
