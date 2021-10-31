import React from 'react';
import '../styles/form.css'
  
class FormComponent extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {} 
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        this.setState({input:input});
  
        alert('Form is validated');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        let Regex = new RegExp("(?=.{8,})");
        if(!Regex.test(input["password"])){
            isValid = false;
            errors["password"] = "Password needs 8 characters or more.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h1 id="title">Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div className="form-group fieldName">
            <label htmlFor="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Please enter your email address" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
  
          <div className="form-group fieldName">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Please enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
             
          <input type="submit" value="Submit" className="btn btn-success submitButton" />
        </form>
      </div>
    );
  }
}
  
export default FormComponent;