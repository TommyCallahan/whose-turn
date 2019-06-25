import React from 'react';
import '../App.css';

class OpeningScreen extends React.Component {

  goToStore = event => {
    event.preventDefault();
    this.props.history.push(`/whose-turn`);
  };



  render() {
    return (
      <div className="App-header">
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Check out "Whose Turn?"!<br/>It keeps track of whose turn it is to buy the next round or take the dog for a walk so you don't have to!</h2>
        <button type="submit">Log in→</button>
      </form>
      </div>
    );
  }
}

export default OpeningScreen;
