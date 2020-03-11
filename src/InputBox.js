import React from 'react';
import './css/WebpageStyle.css'

export class InputBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      suggestions:[],
      input:'',
    };
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
}
// Enable click for suggested values
suggestionSelected (value) {
  this.setState(() => ({
    input: value,
    suggestions: [],
  }))
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

  render() {
    const { input } = this.state;
      return (
        <form>
          <div className="Input-Box">
            <div className="InputBox">
              <input value={input} onChange={this.onZipChanged} type="number" />
              {this.renderSuggestions()}
            </div>
          </div>
          <button type="button" id="GoButton" 
                  onClick={this.onZipChanged.bind(this)} 
                  disabled={!this.state.input}>Go</button>
        </form>

    );
  }
}