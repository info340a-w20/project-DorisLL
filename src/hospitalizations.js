import React from 'react';
import {InputForms} from './InputForms.js'
import {EstimateBarChart} from './barChart.js'
import './css/WebpageStyle.css'
import firebase from "firebase";
import 'firebase/database';


//this.props.allGuesses
//this.props.actualValue
//this.props.inputs
//inputs=[{'guessedInc': "The average number of days a disease is incubated is "}]

export class Hospitalizations extends React.Component {
//   super(props)
//   this.submissionsRef = firebase.database().ref(this.props.dataRef);
//   const userRef = this.submissionsRef.child(firebase.auth().currentUser.uid);
  // userRef.on('value').then(function(snap) {
  //   if(snap.val() === null) {
  //     this.state = {
  //       inputtedGuess: '',
  //       guessedInc: 0,
  //       allInc: [],
  //       renderedAverage: 0,
  //       actualInc: 0
  //     }
  //   }
  // })

    constructor(props) {
        super(props)
        this.state = {
          inputtedGuess: '',
          guessedInc: 0,
          allInc: [],
          renderedAverage: 0,
          actualInc: 0,
          submitted: false
        }
    }
    
    componentDidMount() {
      this.submissionsRef = firebase.database().ref(this.props.dataRef);
      this.submissionsRef.on("value", (snapshot) => {
        let submissionsObject = snapshot.val();
        let submissionKeys = Object.keys(submissionsObject);
        //add value each to an array
        let submissionArray = submissionKeys.map((key) => {
          let submission = submissionsObject[key];
          return submission.value;
        })

        //this.setState({allInc: submissionArray});
        
        //check to see if the keys array contains the userid
        //set the state to default values if they do no exist in the database
        //if they do exist, set the state to their guess, and the rendered values (leave extimates unmodified to the updated snapshot version)
        
        let user = firebase.auth().currentUser.uid;
        if(submissionsObject[user] != undefined) {
          console.log("user found")
          let userObject = submissionsObject[user];
          let userGuess = userObject.value;
          console.log("userGuess: " + userGuess);
          this.setState({
            guessedInc: userGuess,
            allInc: submissionArray,
            actualInc: this.props.actualValue,
            submitted: true
          });
          console.log("user found state: ", this.state);
        }
        //  else {
        //   console.log("user not found")
        //   this.state = {
        //     guessedInc: 0,
        //     allInc: [],
        //     actualInc: 0
        //   }
        // }

        console.log("state: ", this.state);
    })

    }

    handleChange = (event) => {
        this.setState({inputtedGuess: event.target.value});
      }
    
      handleSubmit = (event) => {
        // when submitted, add to the db
        const userRef = this.submissionsRef.child(firebase.auth().currentUser.uid);
        let submittedValue = Number(this.state.inputtedGuess);
        userRef.set({
          value: submittedValue,
        });

      }
    
    render(){
        this.submissionsRef = firebase.database().ref(this.props.dataRef);
        console.log("rendered state: ", this.state);
        let newAverage = (this.state.allInc.reduce((a,b) => a + b, 0) / this.state.allInc.length)
        if (this.state.submitted) {
          return(
            <EstimateBarChart inputtedGuess={this.state.guessedInc} averageGuess={newAverage} actualValue={this.state.actualInc}/>
          )
        } else {
          return(
            <div>
                <p id="descriptive-paragraph">{this.props.paragraph}</p>
                <InputForms style={{visibility: 'hidden'}} inputs={this.props.inputs} onUpdate={this.handleChange.bind(this)} onClick={this.handleSubmit.bind(this)}  />
                <EstimateBarChart inputtedGuess={this.state.guessedInc} averageGuess={newAverage} actualValue={this.state.actualInc}/>
            </div>
          )
        }        

    }    
}
