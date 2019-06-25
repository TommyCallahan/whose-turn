import React from 'react';
import './App.css';
import TurnTable from "./components/TurnTable";
import TurnForm from "./components/TurnForm";

import base from "./base";

class App extends React.Component {



  constructor(props) { // allows for props to be used
    super(props); // allows for props to be used
    this.state = { // creates initial black states for tabledats & whosturn
      tableDatas: {},
      whosTurn: {}
    };

    this.handlewhosTurn = this.handlewhosTurn.bind(this); // binds data in function for sending

}

handlewhosTurn(whosTurn) { // function
  console.log(whosTurn);
  this.setState({
    whosTurn: whosTurn // sets state for whosturn
  })
}





componentDidMount(){

  const {params} = this.props.match;
  this.ref = base.syncState(`${params.timeStamp}/turntables`, { //firebase stuff
  context: this,
  state: "tableDatas"
  });

}


componentWillUnmount() {
  base.removeBinding(this.ref); //not sure if used
}


addTable = (tableData) => { // function to add table
  const tableDatas = {...this.state.tableDatas};
  // ... makes a copy
  tableDatas[`tableData${Date.now()}`] = tableData; //gets timestamp
  this.setState({
    tableDatas: tableDatas //set tabledate state
  });
};



updateData = (key, updateData) => { //function to update table
  const tableDatas = {...this.state.tableDatas};
  console.log(tableDatas)
  tableDatas[key] = updateData; //update this table w/key
  this.setState({tableDatas:tableDatas}); // set state
}

deleteTable = (key) => {
  const tableDatas = {...this.state.tableDatas};
  tableDatas[key] = null; //update this table w/key
  this.setState({tableDatas:tableDatas}); // set state
}


 render() {
  return (
    <div className="App">
      <div className="App-header">
      <p>Use the form below to create as many tables as you like!</p>
        {Object.keys(this.state.tableDatas).map(key => ( //loops through & prints turntables
          <TurnTable
            key={key} // for identification
            index={key} // for identification
            addTable={this.addTable} // i dont think this is used, see turnform
            updateData={this.updateData} //update data via turntable
            details={this.state.tableDatas[key]} // turn table data
            onwhosTurn={this.handlewhosTurn} // function value
            currentTurn={this.state.whosTurn} // function value
            deleteTable={this.deleteTable} // delete table
          />
        ))}


        <TurnForm
          addTable={this.addTable} //function value to add table
        />
      </div>
    </div>
  );
}
}

export default App;
