import React, { Component } from 'react'

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
                {midPayload && midPayload.rows && midPayload.rows.map((dt, index) => {
                    return (
                        <div key={index} className="display-flex-normal border-bottom">
                            <div className="width width-200px border-right">
                                <div className="padding-15px">
                                    <div className="txt-site txt-thin txt-11 txt-main txt-center">
                                        {dt.label}
                                    </div>
                                </div>
                            </div>
                            <div className="display-flex-normal width width-full">
                                <div className="width width-full">
                                    <div className="txt-site txt-11 txt-main txt-center post-center">
                                        {dt.weight}
                                    </div>
                                </div>
                                <div className="width width-full border-left">
                                    <div className="txt-site txt-11 txt-main txt-center post-center">
                                        {dt.score}
                                    </div>
                                </div>
                                <div className="width width-full border-left">
                                    <div className="txt-site txt-11 txt-main txt-center post-center">
                                        {dt.totalScore}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
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
                {finalPayload && finalPayload.rows && finalPayload.rows.map((dt, index) => {
                    return (
                        <div key={index} className="display-flex-normal border-bottom">
                            <div className="width width-200px border-right">
                                <div className="padding-15px">
                                    <div className="txt-site txt-thin txt-11 txt-main txt-center">
                                        {dt.label}
                                    </div>
                                </div>
                            </div>
                            <div className="display-flex-normal width width-full">
                                <div className="width width-full">
                                    <div className="txt-site txt-11 txt-main txt-center post-center">
                                        {dt.weight}
                                    </div>
                                </div>
                                <div className="width width-full border-left">
                                    <div className="txt-site txt-11 txt-main txt-center post-center">
                                        {dt.score}
                                    </div>
                                </div>
                                <div className="width width-full border-left">
                                    <div className="txt-site txt-11 txt-main txt-center post-center">
                                        {dt.totalScore}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="display-flex-normal border-bottom">
                    <div className="width width-200px">
                        <div className="padding-15px">
                            <div className="txt-site txt-bold txt-11 txt-main txt-center">PA Full Year</div>
                        </div>
                    </div>
                    <div className="width width-full border-left">
                        <div className="txt-site txt-11 txt-main txt-center post-center">
                            {finalPayload.paFullYear}
                        </div>
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