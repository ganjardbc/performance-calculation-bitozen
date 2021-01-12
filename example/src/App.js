import React, { Component } from 'react'

import PerformanceCalculation from 'performance-calculation-bitozen'

let payload = {
  "midPayload": {
    "rows": [
      {
          "label": "Sasaran dan Tujuan",
          "weight": "10%",
          "score": "10",
          "totalScore": "10"
      },
      {
          "label": "Kompetensi",
          "weight": "20%",
          "score": "20",
          "totalScore": "20"
      },
      {
          "label": "Kedisiplinan",
          "weight": "30%",
          "score": "30",
          "totalScore": "30"
      },
      {
        "label": "Rekomendasi Pelatihan dan Pengembangan",
        "weight": "40%",
        "score": "40",
        "totalScore": "40"
      },
      {
        "label": "Promosi dan Mutasi",
        "weight": "50%",
        "score": "50",
        "totalScore": "50"
      }
    ],
    "paMidYear": '0',
    "gradePerformance": "K",
  },
  "finalPayload": {
    "rows": [
      {
          "label": "Sasaran dan Tujuan",
          "weight": "10%",
          "score": "10",
          "totalScore": "10"
      },
      {
          "label": "Kompetensi",
          "weight": "20%",
          "score": "20",
          "totalScore": "20"
      },
      {
          "label": "Kedisiplinan",
          "weight": "30%",
          "score": "30",
          "totalScore": "30"
      },
      {
        "label": "Rekomendasi Pelatihan dan Pengembangan",
        "weight": "40%",
        "score": "40",
        "totalScore": "40"
      },
      {
        "label": "Promosi dan Mutasi",
        "weight": "50%",
        "score": "50",
        "totalScore": "50"
      }
    ],
    "paFullYear": "0",
    "gradePerformance": "K",
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      paMidYear: '2',
      gradePerformance: 'K',
      newPayload: {
        ...payload,
        midPayload: {
          ...payload.midPayload,
          paMidYear: '2',
          gradePerformance: 'K'
        }
      }
    }
  }

  // changePaMidYear = (val) => {
  //   this.setState({
  //     paMidYear: val
  //   })
  // }

  // changeGradePerformance = (val) => {
  //   this.setState({
  //     gradePerformance: val
  //   })
  // }

  // changePayload = () => {
  //   let {paMidYear, gradePerformance, newPayload} = this.state
  //   this.setState({
  //     paMidYear: paMidYear,
  //     gradePerformance: gradePerformance,
  //     newPayload: {
  //       ...newPayload,
  //       midPayload: {
  //         ...newPayload.midPayload,
  //         paMidYear: paMidYear,
  //         gradePerformance: gradePerformance
  //       }
  //     }
  //   })
  // }

  render () {
    // let {paMidYear, gradePerformance, newPayload} = this.state
    let {newPayload} = this.state
    return (
      <div className="padding-15px">
        {/* <div className="margin-bottom-15px">
          <input 
            type="text" 
            name="pa mid year" 
            placeholder="pa mid year"
            value={paMidYear}
            onChange={(e) => {
              this.changePaMidYear(e.target.value)
            }} />
          <input 
            type="text" 
            name="grade performance" 
            placeholder="grade performance"
            value={gradePerformance}
            onChange={(e) => {
              this.changeGradePerformance(e.target.value)
            }} />
          <button onClick={() => {
            this.changePayload()
          }}>Change</button>
        </div> */}
        <PerformanceCalculation payload={newPayload} />
      </div>
    )
  }
}
