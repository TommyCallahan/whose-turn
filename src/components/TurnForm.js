import React from 'react';

class TurnForm extends React.Component {

  constructor(props) { // allows for props to be used
    super(props); // allows for props to be used
    this.handleChange = this.handleChange.bind(this); // binds data in function for sending
  }


  timestampRef = React.createRef(); // create refs to get current value from form
  tablenameRef = React.createRef(); // create refs to get current value from form
  participant1Ref = React.createRef(); // create refs to get current value from form
  participant2Ref = React.createRef(); // create refs to get current value from form
  turnRef = React.createRef(); // create refs to get current value from form
  noteRef = React.createRef(); // create refs to get current value from form


    createTable = (event) => { // create table function
      event.preventDefault();
      const tableData = {
        timeStamp: this.timestampRef.current.value, // values to insert in to table data
        tableName: this.tablenameRef.current.value, // values to insert in to table data
        participant1: this.participant1Ref.current.value, // values to insert in to table data
        participant2: this.participant2Ref.current.value, // values to insert in to table data
        // newTurn: this.state.newTurn,
        turn: this.turnRef.current.value.toString(), // values to insert in to table data
        note: this.noteRef.current.value // values to insert in to table data
      };

      this.props.addTable(tableData); // send table data to add table prop
      event.currentTarget.reset(); // clear out form fields
    };

    handleChange(event) { // this might not be used to set the state but look into it
      this.setState({
        newTurn: event.target.value
      });
    }


render(){
  return(
    <div className="turn-form">
    <form onSubmit={this.createTable}>
      <input ref={this.timestampRef} type="hidden" value={Date.now()}/>
      <input ref={this.tablenameRef} placeholder="Title" name="tableName" type="text"/><br />
      
            <textarea ref={this.noteRef} placeholder="Note" name="note" /><br/>
      <input ref={this.participant1Ref} placeholder="My Name" name="participant1" type="text"/>
      <input ref={this.participant2Ref} placeholder="Their Name" name="participant2" type="text"/>
  <br />
      <select name="iStart" ref={this.turnRef} onChange={this.handleChange}>
        <option value="true">I Start</option>
        <option value="false">They Start</option>
      </select>
  <br />

   <button type="submit">Add Table</button>
    </form>
    </div>
  )
}


}
export default TurnForm;
