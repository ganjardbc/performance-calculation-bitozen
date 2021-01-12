# performance-calculation-bitozen

> 

[![NPM](https://img.shields.io/npm/v/performance-calculation-bitozen.svg)](https://www.npmjs.com/package/performance-calculation-bitozen) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save performance-calculation-bitozen
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'performance-calculation-bitozen'

let defaultPayload = {
    "midPayload": {
        "rows": [
            {
                "label": "label 1",
                "weight": "0%",
                "score": "0",
                "totalScore": "0"
            },
            {
                "label": "label 2",
                "weight": "0%",
                "score": "0",
                "totalScore": "0"
            },
            {
                "label": "label 3",
                "weight": "0%",
                "score": "0",
                "totalScore": "0"
            }
        ],
        "paMidYear": "",
        "gradePerformance": ""
    },
    "finalPayload": {
        "rows": [
            {
                "label": "label 1",
                "weight": "0%",
                "score": "0",
                "totalScore": "0"
            },
            {
                "label": "label 2",
                "weight": "0%",
                "score": "0",
                "totalScore": "0"
            },
            {
                "label": "label 3",
                "weight": "0%",
                "score": "0",
                "totalScore": "0"
            }
        ],
        "paFullYear": "",
        "gradePerformance": ""
    }
}

class Example extends Component {
  render () {
    return (
      <MyComponent payload={defaultPayload} />
    )
  }
}
```

## License

MIT © [ganjardbc](https://github.com/ganjardbc)
