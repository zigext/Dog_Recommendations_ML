import React, { Component } from 'react'
import { data, labels } from '../dataset/dog'
import { DecisionTreeClassifier as DTClassifier } from 'ml-cart'
import Quiz from '../components/QuizPage'
import Result from '../components/Result'
const ml = require('machine_learning')


let dt = new ml.DecisionTree({
    data: data,
    result: labels
})
dt.build()

console.log("Classify : ", dt.classify(["house", "yard_small", false, false, 8, "active_none", "energy_small", 0, "bark_small", "long", 7, "size_small", false]))

class QuizPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            quizzing: true,
        }
        this.baseState = this.state
        this.result
    }

    resetState = () => {
        this.setState(this.baseState)
    }

    doneQuiz = () => {
        this.setState({quizzing: false})
    }

    classifyDogBreed = (input) => {
        this.result = Object.keys(dt.classify(input))
    }

    render() {
        return (
            this.state.quizzing ? <Quiz doneQuiz={this.doneQuiz} classifyDogBreed={this.classifyDogBreed} /> : <Result result={this.result} resetState={this.resetState}/>
        )
    }
}

export default QuizPage
