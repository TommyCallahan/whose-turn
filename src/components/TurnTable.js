import React from 'react';

class TurnTable extends React.Component {



  constructor(props) {
    super(props);
    this.handlewhosTurn = this.handlewhosTurn.bind(this); // bind data to send
  }


  handlewhosTurn = (event) => { // function to watch checkbox
    console.log("working")
    console.log(event.target.checked);
    this.props.onwhosTurn(event.target.checked); //send checked value to onwhosturn prop in app.js


    const updateData = { // update the details prop
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.checked.toString() // change the value
    };
    this.props.updateData(this.props.index, updateData) // update the details prop
    console.log(this.props.index)
  }




  handleChange = (event) => { // function to update user name / need to reconcile how this works vs updateData
    console.log("changing");
    const updateData = {
      ...this.props.tableData,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateData(this.props.index, updateData)
  }







render(){
  const {tableName, participant1, participant2, starter, note, timeStamp, turn, currentTurn} = this.props.details;
  const whosTurn = this.props.whosTurn;

  return(
    <div id={timeStamp}  className={'turnTable status-' + (turn)}>
    <button className="delete" title="Delete Table" onClick={() => this.props.deleteTable(this.props.index)}>&times;</button>
      <h3>{tableName}</h3>
      <div className="note">
      <p>{note}</p>
      </div>

      <div className="participants">
      {/*  <div className="participant">{participant1}</div>*/}
        <input className="particpantInputs" name="participant1" type="text" placeholder={participant1} onChange={this.handleChange} />
        <input className="particpantInputs" name="participant1" type="text" placeholder={participant2} onChange={this.handleChange} />
        <div className="checkbox-wrap">
          <input type="checkbox" name="turn" checked={whosTurn} value={turn} onChange={this.handlewhosTurn} />
        </div>
        <div className="what-turn my-turn">My turn.</div>
        <div className="what-turn their-turn">Their turn!</div>


      {/*  <div className="participant">{participant2}</div> */}

      {/* <div>My Turn: {turn}</div> */}

      </div>




    </div>
  )
}


}
export default TurnTable;
