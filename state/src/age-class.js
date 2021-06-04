import React from 'react';

class Age extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    }
  }
  //method
  changeAge = () => {
    let age = this.state.age + 1;
    this.setState({ age })
  }


  render() {
    return (
      <>
        <h2>Age is: {this.state.age}</h2>
        <button onClick={this.changeAge}>Change Age</button>
      </>
    )
  }


}

export default Age;