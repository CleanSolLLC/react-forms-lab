import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char: "",
      charsRemaining: this.props.maxChars, 
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      char: event.target.value,   
    })
    this.setCounter()
  };

  setCounter = () => {
    this.setState(previousState => {
      return {
        charsRemaining: previousState.charsRemaining - 1,
      }
      
    })
  };



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.onChangeHandler} value={this.state.char} />  
        <h3>Characters Remaining: {this.state.charsRemaining}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
