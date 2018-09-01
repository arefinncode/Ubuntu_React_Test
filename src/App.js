import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';


/**
 *  First component that is rendered
 */


class App extends Component {

    render() {

        const cars = [{id: 1,name:"Saab"},
            {id:2,name:"volvo",},
            {id:3,name:"BMW"}];



        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                {/*<Greeting name="Sara"/>*/}
                {/*<Greeting name="3123123"/>*/}

                {/*let temp="sara_ soudian";*/}



                {/*var cars = ["Saab", "Volvo", "BMW"];*/}


                <Greeting name= "sara_ soudian" cars={cars} />
                {/*<Greeting name= {cars} />*/}
            </div>
        );
    }
}

class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name} ;<br/>

                Cars are:  <ul>
                    {this.props.cars.map((onecar)=>

                        <li key={onecar.id}>
                            {onecar.name}
                        </li>

                    )
                    }
                </ul>
            </h1>


        );



    }

}
Greeting.propTypes = {
    name: PropTypes.string
};

export default App;
