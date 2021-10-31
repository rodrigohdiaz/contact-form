import React from 'react';
import '../styles/form.css'


class ColourSelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'blue'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div onSubmit={this.handleSubmit}>
          <div className="fieldName">
          <label>
            <p>Pick your favorite colour: </p>{' '}
            <select value={this.state.value} onChange={this.handleChange} className="colourOptions">
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
            </select>
          </label>
            <p className="text">Your favorite color is {this.state.value}</p>
          </div>
        </div>
      );
    }
  }
  
  export default ColourSelector;
