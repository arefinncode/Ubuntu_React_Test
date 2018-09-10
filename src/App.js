import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';


/**
 *  First component that is rendered
 */


class App extends Component {



    constructor(props) {
        super(props);
        // this.state = {date: new Date()};
    }
    // componentDidMount() {
    //     focus() {
    //         // Explicitly focus the text input using the raw DOM API
    //         // Note: we're accessing "current" to get the DOM node
    //         this.textInput.current.focus();
    //     }
    // }


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


        let blist=
            [
                {
                    number:0,
                    address:"Dhaka, mIrpur",
                    createdAt:"some date",
                    flag:0,
                    gender:1,
                    image:"https://meteor183.s3.amazonaws.com/files%2Fdhtest%2FIncognito0.7374555212445557propic.png",
                    name:"Incognito",
                    note:"420",
                    phone:"019112745645",
                    userId:"TpbQeN3xhBc7M",
                    id:"mRYjsp5XoMfd",
                    version:1
                },
                {
                    number:1,
                    address:"4/A",
                    createdAt:"some date",
                    flag:0,
                    gender:0,
                    image:"https://meteor183.s3.amazonaws.com/files%2Fdhtest%2FFazil+120.9834444855064628propic.png",
                    name:"Fazil 12",
                    note:"420",
                    phone:"0191126456674",
                    userId:"TpbQeN3xhBc7",
                    _id:"6hHscw5Zbi7vD",
                    _version:1
                },
                {
                    number:3,
                    address:"",
                    createdAt:"some date",
                    flag:0,
                    gender:0,
                    image:"https://s183-ap-southeast-1.amazonaws.com/meteor183/files/itduw2TaR8GcaBm7Q.png",
                    name:"Mastan",
                    note:"96 ",
                    phone:"01911456456",
                    userId:"TpbQeN3x",
                    _id:"yhQjLFc3S",
                    _version:1
                }
            ]


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
        };

        //     const customProp={
        //         color: "blue",
        //         fontSize: 12
        // };

        // const children = "korea";

        // const element = "Hello, world";








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

                {/*<Greeting name= "sara_ soudian" cars={cars} number={number1} person={person} date={date} noteInput={noteInput}*/}
                {/*array_of_numbers={array_of_numbers}  JsNumber={JsNumber} classyObject={classyObject} blist={blist} />*/}

                {/*<SingleComponet single_child={element} />*/}

                <CustomTextInput/>

                {/*<CustomTextInput2/>*/}

                {/*<CustomTextInput4/>*/}








                {/*single_child={children}*/}
                {/*customProp={customProp}*/}

                {/*<Greeting name= {cars} />*/}


            </div>
        );
    }
}



class CustomTextInput4 extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

// Now you can set focus when required.
// this.inputElement.current.focus();

class CustomTextInput2 extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }
    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <input
                type="text"
                ref={this.textInput}
            />
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


                {/*<br/> customProp's information are: {this.props.customProp.color} {this.props.customProp.fontSize}<br/>*/}
                {/*DOESN'T WORK.*/}

                {/*<br/> single_child's information are: {this.props.single_child}<br/>*/}

                <br/>
                <ul>
                    blist information are:
                    {this.props.blist.map((oneBlst) =>

                        <li key={oneBlst.name}>
                            {oneBlst.name} -->
                            {oneBlst.address}

                        </li>
                    )
                    }
                </ul>
                {/*{this.props.blist.address} {this.props.blist.name}*/}




            </h1>




        );

    }

}

class SingleComponet extends React.Component {
    render() {

        return (
            <h1>
                <br/> single_child's information are: {this.props.single_child}<br/>

            </h1>

        );
    }
}


class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);

        // this.textInput = null;
        // let objectA = {a: 'a', b: 'b',c:'c',d:'d',e:'e'};
        // this.textInput = {};
        this.textInput={a: 'a', b: 'b',c:'c',d:'d',e:'e'};

        this.setTextInputRef = element => {
            // console.log("Arefin");
            this.textInput[element] = element;
        };

        this.focusTextInput = (element) => {
            // Focus the text input using the raw DOM API

            console.log('elemnent is ',element);
            if (this.textInput.element!==undefined ) this.textInput.element.focus();
        };
    }

    componentDidMount() {
        // autofocus the input on mount
        this.focusTextInput();
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef('a')}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput('a')}
                />

                <input
                    type="text"
                    ref={this.setTextInputRef('b')}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput('b')}
                />
                <input
                    type="text"
                    ref={this.setTextInputRef('c')}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput('c')}
                />

                <input
                    type="text"
                    ref={this.setTextInputRef('d')}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput('d')}
                />

            </div>
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

    // customProp: function(props, propName, componentName) {
    //     if (!/matchme/.test(props[propName])) {
    //         return new Error(
    //             'Invalid prop `' + propName + '` supplied to' +
    //             ' `' + componentName + '`. Validation failed.'
    //         );
    //     }
    // },


    blist:PropTypes.arrayOf(PropTypes.shape(
        {
            // number: PropTypes.number,
            optionalNumber: PropTypes.number,
            address: PropTypes.string,
            createdAt:PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]),
            flag: PropTypes.number,
            gender:PropTypes.number,
            image: PropTypes.string,

            name: PropTypes.string,

            note: PropTypes.string,
            phone:PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
            userId:  PropTypes.string,
            id: PropTypes.string,
            version:  PropTypes.number

        }
    ))




};
// PropTypes.instanceOf(Message)

SingleComponet.propTypes = {
    single_child: PropTypes.element.isRequired,
}






export default App;
