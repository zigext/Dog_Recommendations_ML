import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import './HomePage.css'

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#424141',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 12,
        marginTop: 20
    },
    img: {
        width: '50%'
    },
    label: {
        fontSize: 21
    }
}

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <img src={require('../images/header.jpg')} style={styles.img} />
                <RaisedButton
                    label="Find your dream dog"
                    primary={true}
                    style={styles.button}
                    labelStyle={styles.label}
                    onClick={() => window.location.href = "/quiz"} />
            </div>
        )
    }
}

export default HomePage
