import React, { Component } from 'react'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'

class QuizPage extends Component {
    constructor(props) {
        super(props)
        this.input = []
        this.dataStore = []
    }

    checkRadioButton = (event, value) => {
        this.onDataChange(event.target.name, event.target.value)
    }

    onDataChange = async (name, value) => {
        // await this.setState({ [name]: value })
        this.dataStore[name] = value
        console.log(this.dataStore)
    }

    clickCalculate = () => {
        let size = Object.keys(this.dataStore).length
        console.log("size", size)
        if (size === 13) {
            this.input.push(this.dataStore.houseSize, this.dataStore.yardSize, this.dataStore.childrenElderly,
                this.dataStore.experiance, this.dataStore.dogAloneTime, this.dataStore.ownerActive,
                this.dataStore.dogEnergy, this.dataStore.dogExercise, this.dataStore.dogBark, this.dataStore.dogCoat,
                this.dataStore.dogGroom, this.dataStore.dogSize, this.dataStore.protective)
            console.log(this.input)
            this.props.classifyDogBreed(this.input)
            this.props.doneQuiz()
        }
        else {
            alert("Please answer all the questions")
        }

    }


    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.headerText}>Every dog deserves more than a loving home – they deserve the right loving home. Find the best match for your family.</h2>

                <div style={styles.quizContainer}>
                    <div style={styles.questionContainer}>
                        <p style={styles.text}>1. What type of home/living space do you have?</p>
                        <RadioButtonGroup name="houseSize" onChange={this.checkRadioButton} >
                            <RadioButton
                                value="apartment"
                                label="Apartment"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="house"
                                label="House"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="large house"
                                label="Large House"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>2. How big is your yard?</p>
                        <RadioButtonGroup name="yardSize" onChange={this.checkRadioButton} >
                            <RadioButton
                                value="yard_none"
                                label="None"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="yard_small"
                                label="Small"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="yard_medium"
                                label="Medium (mowing doesn't take all day)"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="yard_big"
                                label="Large enough to help me forget I've got neighbors"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>3. Do young children or elderly stay with you?</p>
                        <RadioButtonGroup name="childrenElderly" onChange={this.checkRadioButton} >
                            <RadioButton
                                value={true}
                                label="Yes"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={false}
                                label="No"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>


                    <div style={styles.questionContainer}>
                        <p style={styles.text}>4. Have you owned a dog before?</p>
                        <RadioButtonGroup name="experiance" onChange={this.checkRadioButton} >
                            <RadioButton
                                value={true}
                                label="Yes"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={false}
                                label="No"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>5. How much time will your new dog be spending alone?</p>
                        <RadioButtonGroup name="dogAloneTime" onChange={this.checkRadioButton} >
                            <RadioButton
                                value={0}
                                label="I or someone else will be at home most of the time"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={4}
                                label="Only about 4 hours at a time "
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={8}
                                label="Just until I get home from work"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={10}
                                label="My dog should be fine by himself for at least 8 hours"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>6. How active are you?</p>
                        <RadioButtonGroup name="ownerActive" onChange={this.checkRadioButton} >
                            <RadioButton
                                value="active_none"
                                label="Infirm"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="active_small"
                                label="Not very active"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="active_medium"
                                label="Moderately active"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="active_big"
                                label="Very active"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>7. How energetic should your dog be?</p>
                        <RadioButtonGroup name="dogEnergy" onChange={this.checkRadioButton} >
                            <RadioButton
                                value="energy_small"
                                label="You don't really expect me to fetch that ball, do you?"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="energy_medium"
                                label="Let's play catch—but don't make me run around too much"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="energy_big"
                                label="Why are you stopping? We've only been playing for 3 hours!"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>8. How much daily exercise will you give your dog?</p>
                        <RadioButtonGroup name="dogExercise" onChange={this.checkRadioButton} >
                            <RadioButton
                                value={0}
                                label="None, I'm basically a couch potato"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={30}
                                label="30 minutes"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={60}
                                label="1 hour"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={100}
                                label="More than 1 hour"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>9. In terms of barking, how much noise can you tolerate?</p>
                        <RadioButtonGroup name="dogBark" onChange={this.checkRadioButton} >
                            <RadioButton
                                value="bark_small"
                                label="None, I prefer a dog who doesn't bark much"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="bark_medium"
                                label="Some barking doesn't bother me too much"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="bark_big"
                                label="Barking is not an issue for me"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>10. How long do you want your dog's coat to be?</p>
                        <RadioButtonGroup name="dogCoat" onChange={this.checkRadioButton} >
                            <RadioButton
                                value="short"
                                label="Short"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="medium"
                                label="Medium"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="long"
                                label="Long"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>11. How often will your dog be groomed each week?</p>
                        <RadioButtonGroup name="dogGroom" onChange={this.checkRadioButton} >
                            <RadioButton
                                value={0}
                                label="None"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={1}
                                label="Let's not go overboard, once a week should do it"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={3}
                                label="2-3 times a week"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={7}
                                label="Everyday"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <div style={styles.questionContainer}>
                        <p style={styles.text}>12. What size dog are you looking for?</p>
                        <RadioButtonGroup name="dogSize" onChange={this.checkRadioButton} >
                            <RadioButton
                                value="size_small"
                                label="Small"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="size_medium"
                                label="Medium"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="size_big"
                                label="Large"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value="size_whatever"
                                label="No preference"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>


                    <div style={styles.questionContainer}>
                        <p style={styles.text}>13. Do you want a dog that will protect your property?</p>
                        <RadioButtonGroup name="protective" onChange={this.checkRadioButton} >
                            <RadioButton
                                value={true}
                                label='Yes, I want a "Beware of Dog" dog'
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                            <RadioButton
                                value={false}
                                label="No, I'm looking for a cream puff"
                                style={styles.radioButton}
                                labelStyle={styles.labelRadioButton}
                            />
                        </RadioButtonGroup>
                    </div>

                    <RaisedButton
                        label="Calculate"
                        primary={true}
                        style={styles.button}
                        onClick={this.clickCalculate} />

                </div>

            </div>
        )
    }
}

export default QuizPage

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#424141',
        minHeight: '100vh',
        padding: 30
    },
    questionContainer: {
        marginBottom: 10
    },
    quizContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    radioButton: {
        marginBottom: 16,
    },
    labelRadioButton: {
        color: 'black',
        fontSize: 18
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 19
    },
    headerText: {
        color: '#fcb214',
        textAlign: 'center'
    },
    button: {
        margin: 12,
    },
}
