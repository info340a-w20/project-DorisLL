import React from 'react';
import './css/WebpageStyle.css'


// Import firebase and StyledFirebaseAuth
import firebase from "firebase";

// Configure Firebase (get configuration from Firebase Console)
// const firebaseConfig = {
//   apiKey: "AIzaSyDZRrWIFCCG5zDIR1xU9SpuPG6PNs6NuJg",
//   authDomain: "info430-flu-website.firebaseapp.com",
//   databaseURL: "https://info430-flu-website.firebaseio.com",
//   projectId: "info430-flu-website",
//   storageBucket: "info430-flu-website.appspot.com",
//   messagingSenderId: "508636748505",
//   appId: "1:508636748505:web:668dedbd0f2166156dfcc8",
//   measurementId: "G-KBV16ZWHT6"
// };

export class InputBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      suggestions:[],
      input:'',
      allDefaultZip: this.processDefault,//'none',
      empty: this.upDateEmpty,
    };

    this.zipRef = firebase.database().ref("SavedZip")
  }


// Renew state as user type
onZipChanged = (e) => {
  const { items } = this.props;
  const value = e.target.value;
  let suggestions = [];
  if(value.length > 0) {
    const regex = new RegExp(`^${value}`, 'i');
    suggestions = items.sort().filter(v => regex.test(v));
  }
  this.setState(() => ({ suggestions, input: value }));
  this.props.changeValue(this.state.input); 
  this.processDefault();
}

// Enable click for suggested values
suggestionSelected (value) {
  this.setState(() => ({
    input: value,
    suggestions: [],
  }))
  this.props.changeValue(this.state.input);
  this.processDefault();
}

// Return suggested values
renderSuggestions () {
  const { suggestions } = this.state;
  if(suggestions.length === 0) {
    return null;
  } 
  return (
    <ul>
      {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
    </ul>
  )
 }

 //Generate allDefaultZip (overall), no change
 processDefault() {
   this.upDateEmpty();
   console.log("state.empty: " + this.state.empty)
   // If the database for the user is empty
  if(this.state.empty) {
    this.setState({allDefaultZip: "none"})
  } else {
    // let objectRef = this.zipRef.child(firebase.auth().currentUser.uid).child(newZip);
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => { 
      if (user) {
        const userRef = this.zipRef.child(user.uid);
        userRef.on("value", (snapshot) => {
          if(userRef !== null) {
            let data = snapshot.val();
            if(data == null) {
              this.setState({allDefaultZip: "none"})
              return 
            }
            let dataKeys = Object.keys(data);
              // Get the value of the data
              let string = ''
                dataKeys.map((d) => {
                  string = string + " " + d 
                  console.log("currentString" + string)
                })
            //Set the state
            this.setState({allDefaultZip: string})
          }
        })
      }
    })
  }
  console.log("allDefaultZip:" + this.state.allDefaultZip)
 }

 //check empty
 upDateEmpty () {
  let objectRef = this.zipRef.child(firebase.auth().currentUser.uid);  //.child(newZip);
  if(objectRef.child == null) {
    this.setState(() => ({empty: true}))
  } else {
    this.setState(() => ({empty: false}))
  }
 }

 saveDefault () {
    let newZip = this.state.input;
    const objectRef = this.zipRef.child(firebase.auth().currentUser.uid).child(newZip);
    objectRef.set(({frequency: 1}))
    this.processDefault();
  }

  deleteHistory() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => { 
      if (user) {
        // const userRef = this.zipRef.child(user.uid);
        let input = this.state.input;
        let ref = this.zipRef.child(user.uid).child(input);
        ref.remove();
        this.upDateEmpty();
        this.processDefault();
    }})
  }
 
  render() {
    const { input } = this.state;
    return (
      <form>
        <div className="Input-Box">
          <div className="InputBox">
            <input value={input} onInput={this.onZipChanged} type="number" />
            {this.renderSuggestions()}
          </div>
        </div>          

        <button type="button" id="GoButton" 
                onClick={this.onZipChanged.bind(this)}
                disabled={!this.state.input}>Go</button>

        <button type="button" id="Save" 
                onClick = {() => this.saveDefault()}
                disabled= {!this.state.input}
                >Save Zip</button>
        <button type="button" id="Delete" 
                onClick = {() => this.deleteHistory()}
                disabled= {!this.state.input}
                >Delete Selected History</button>

        <div style= {{color : '#747373'}}>My Saved History: 
          <p > {this.state.allDefaultZip}</p>
          </div>
      </form>
    );
  }
}