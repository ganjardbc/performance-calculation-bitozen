import React, { Component } from 'react'

let defaultPayload = {
    "midPayload": {
        "result": {
            "weight": "",
            "score": "",
            "totalScore": ""
        },
        "process": {
            "weight": "",
            "score": "",
            "totalScore": ""
        },
        "paMidYear": "",
        "gradePerformance": ""
    },
    "finalPayload": {
        "result": {
            "weight": "",
            "score": "",
            "totalScore": ""
        },
        "process": {
            "weight": "",
            "score": "",
            "totalScore": ""
        },
        "paMidYear": "",
        "gradePerformance": ""
    }
}

class Performance extends Component {

    constructor (props) {
        super(props)
        this.state = {
            payload: {
                ...defaultPayload,
                midPayload: {
                    ...props.payload.midPayload
                },
                finalPayload: {
                    ...props.payload.finalPayload
                }
            }
        }
    }
    
    componentDidUpdate() {
        if (this.props.payload !== this.state.payload) {
            this.setState({
                payload: this.props.payload
            })
        }
    }

    renderContentMid () {
        let {midPayload} = this.state.payload
        return (
            <div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px border-right">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Criteria</div>
                        </div>
                    </div>
                    <div className="display-flex-normal width width-full">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Weight(%)</div>
                        </div>
                        <div className="padding-15px border-left">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Score (AxB)</div>
                        </div>
                        <div className="padding-15px border-left">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Total Score (AxB)</div>
                        </div>
                    </div>
                </div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px border-right">
                        <div className="padding-15px">
                            <div className="txt-site txt-thin txt-11 txt-main txt-center">Hasil Kerja</div>
                        </div>
                    </div>
                    <div className="display-flex-normal width width-full">
                        <div className="width width-full">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {midPayload.result.weight}
                            </div>
                            {/* <input type="text" value={midPayload.result.weight} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        result: {
                                            ...this.state.midPayload.result,
                                            weight: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {midPayload.result.score}
                            </div>
                            {/* <input type="text" value={midPayload.result.score} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        result: {
                                            ...this.state.midPayload.result,
                                            score: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {midPayload.result.totalScore}
                            </div>
                            {/* <input type="text" value={midPayload.result.totalScore} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        result: {
                                            ...this.state.midPayload.result,
                                            totalScore: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                    </div>
                </div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px border-right">
                        <div className="padding-15px">
                            <div className="txt-site txt-thin txt-11 txt-main txt-center">Proses Kerja</div>
                        </div>
                    </div>
                    <div className="display-flex-normal width width-full">
                        <div className="width width-full">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {midPayload.process.weight}
                            </div>
                            {/* <input type="text" value={midPayload.process.weight} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        process: {
                                            ...this.state.midPayload.process,
                                            weight: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {midPayload.process.score}
                            </div>
                            {/* <input type="text" value={midPayload.process.score} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        process: {
                                            ...this.state.midPayload.process,
                                            score: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {midPayload.process.totalScore}
                            </div>
                            {/* <input type="text" value={midPayload.process.totalScore} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        process: {
                                            ...this.state.midPayload.process,
                                            totalScore: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                    </div>
                </div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">PA Mid Year</div>
                        </div>
                    </div>
                    <div className="width width-full border-left">
                        <div className="txt-site txt-11 txt-main txt-center post-center">
                            {midPayload.paMidYear}
                        </div>
                        {/* <input type="text" value={midPayload.paMidYear} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        paMidYear: e.target.value
                                    }
                                })
                            }} /> */}
                    </div>
                </div>
                <div className="display-flex-normal">
                    <div className="width width-200px">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Grade Performance</div>
                        </div>
                    </div>
                    <div className="width width-full border-left">
                        <div className="txt-site txt-11 txt-main txt-center post-center">
                            {midPayload.gradePerformance}
                        </div>
                        {/* <input type="text" value={midPayload.gradePerformance} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    midPayload: {
                                        ...this.state.midPayload,
                                        gradePerformance: e.target.value
                                    }
                                })
                            }} /> */}
                    </div>
                </div>
            </div>
        )
    }

    renderContentFinal () {
        let {finalPayload} = this.state.payload
        return (
            <div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px border-right">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Criteria</div>
                        </div>
                    </div>
                    <div className="display-flex-normal width width-full">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Weight(%)</div>
                        </div>
                        <div className="padding-15px border-left">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Score (AxB)</div>
                        </div>
                        <div className="padding-15px border-left">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Total Score (AxB)</div>
                        </div>
                    </div>
                </div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px border-right">
                        <div className="padding-15px">
                            <div className="txt-site txt-thin txt-11 txt-main txt-center">Hasil Kerja</div>
                        </div>
                    </div>
                    <div className="display-flex-normal width width-full">
                        <div className="width width-full">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {finalPayload.result.weight}
                            </div>
                            {/* <input type="text" value={finalPayload.result.weight} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        result: {
                                            ...this.state.finalPayload.result,
                                            weight: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {finalPayload.result.score}
                            </div>
                            {/* <input type="text" value={finalPayload.result.score} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        result: {
                                            ...this.state.finalPayload.result,
                                            score: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {finalPayload.result.totalScore}
                            </div>
                            {/* <input type="text" value={finalPayload.result.totalScore} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        result: {
                                            ...this.state.finalPayload.result,
                                            totalScore: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                    </div>
                </div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px border-right">
                        <div className="padding-15px">
                            <div className="txt-site txt-thin txt-11 txt-main txt-center">Proses Kerja</div>
                        </div>
                    </div>
                    <div className="display-flex-normal width width-full">
                        <div className="width width-full">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {finalPayload.process.weight}
                            </div>
                            {/* <input type="text" value={finalPayload.process.weight} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        process: {
                                            ...this.state.finalPayload.process,
                                            weight: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {finalPayload.process.score}
                            </div>
                            {/* <input type="text" value={finalPayload.process.score} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        process: {
                                            ...this.state.finalPayload.process,
                                            score: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                        <div className="width width-full border-left">
                            <div className="txt-site txt-11 txt-main txt-center post-center">
                                {finalPayload.process.totalScore}
                            </div>
                            {/* <input type="text" value={finalPayload.process.totalScore} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        process: {
                                            ...this.state.finalPayload.process,
                                            totalScore: e.target.value
                                        }
                                    }
                                })
                            }} /> */}
                        </div>
                    </div>
                </div>
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">PA Mid Year</div>
                        </div>
                    </div>
                    <div className="width width-full border-left">
                        <div className="txt-site txt-11 txt-main txt-center post-center">
                            {finalPayload.paMidYear}
                        </div>
                        {/* <input type="text" value={finalPayload.paMidYear} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        paMidYear: e.target.value
                                    }
                                })
                            }} /> */}
                    </div>
                </div>
                <div className="display-flex-normal">
                    <div className="width width-200px">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">Grade Performance</div>
                        </div>
                    </div>
                    <div className="width width-full border-left">
                        <div className="txt-site txt-11 txt-main txt-center post-center">
                            {finalPayload.gradePerformance}
                        </div>
                        {/* <input type="text" value={finalPayload.gradePerformance} className="txt txt-full" onChange={(e) => {
                                this.setState({
                                    finalPayload: {
                                        ...this.state.finalPayload,
                                        gradePerformance: e.target.value
                                    }
                                })
                            }} /> */}
                    </div>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className="card" style={{width: '100%', margin: 0}}>
                <div className="display-flex-normal">
                    <div className="width width-full">
                        <div className="padding-15px border-bottom">
                            <div className="txt-site txt-16 txt-bold txt-main txt-center">
                                PERFORMANCE APPRAISAL MID YEAR
                            </div>
                        </div>
                        { this.renderContentMid() }
                    </div>
                    <div className="width width-full border-left">
                        <div className="padding-15px border-bottom">
                            <div className="txt-site txt-16 txt-bold txt-main txt-center">
                                PERFORMANCE APPRAISAL FINAL YEAR
                            </div>
                        </div>
                        { this.renderContentFinal() }
                    </div>
                </div>
            </div>
        )
    }

}

export default Performance