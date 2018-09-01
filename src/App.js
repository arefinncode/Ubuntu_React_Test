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

        let number1= 12;

        const person={
            firstName: "John",
            lastName: "Smith",
            isAlive: true,
            age: 27,
            address: {
                streetAddress: "21 2nd Street",
                city: "New York",
                state: "NY",
                postalCode: "10021-3100"
            },
            phoneNumbers: [
                {
                    type: "home",
                    number: "212 555-1234"
                },
                {
                    type: "office",
                    number: "646 555-4567"
                },
                {
                    type: "mobile",
                    number: "123 456-7890"
                }
            ],
            children: [],
            spouse: null
        };

        let date = new Date();

        // let noteInput=420;
        // let noteInput="Great";
        // let noteInput="Dhaka-1216";
        // let noteInput="01911270257";
        // let noteInput="+8801911270257";
        let noteInput=+8801911270257;
        // let noteInput=01911270257; THIS ONE IS WRONG.


        const array_of_numbers = [1, 2, 3, 4, 5];

        const JsNumber=2.31;
        // const JsNumber=new Number(1200);

        const classyObject= {
                color: "blue",
                fontSize: 12
            }






        // let result=Number1.isSafeInteger();


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Greeting name= "sara_ soudian" cars={cars} number={number1} person={person} date={date} noteInput={noteInput}
                          array_of_numbers={array_of_numbers}  JsNumber={JsNumber} classyObject={classyObject} />


                {/*<Greeting name= {cars} />*/}
            </div>
        );
    }
}

class Greeting extends React.Component {
    render() {
        let cts = this.props.date,
            cdate = (new Date(cts)).toString();

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

                Number is: {this.props.number}

                <br/>
                Details of Person is:
                {this.props.person.firstName} <br/>
                {this.props.person.lastName}

                <br/>

                Date is: {cdate}

                <br/>

                NoteInput is: {this.props.noteInput}

                <br/> Arrya of Number is : <br/>
                <ul>
                    {this.props.array_of_numbers.map((single_number)=>
                        <li key={single_number.toString()}>
                            {single_number}
                        </li>
                    )
                    }
                </ul>

                <br/> JsNumber is : {this.props.JsNumber} <br/>

                <br/> classyObject's information are: {this.props.classyObject.color} {this.props.classyObject.fontSize}<br/>








            </h1>




        );

    }

}
Greeting.propTypes = {
    name: PropTypes.string,
    cars:PropTypes.array,
    // cars:PropTypes.object,
    number: PropTypes.number,
    // number: PropTypes.array,
    person:PropTypes.object,

    // date:PropTypes.func,

    date:PropTypes.instanceOf(Date),

    noteInput:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    array_of_numbers: PropTypes.arrayOf(PropTypes.number),

    // JsNumber:PropTypes.objectOf(PropTypes.number),

    classyObject:PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),

};
// PropTypes.instanceOf(Message)


export default App;
