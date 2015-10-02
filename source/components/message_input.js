class MessageInput extends React.Component{
  constructor(){
    super();
    this.state = {
      value : ''
    }
  }
  setState(new_state){
    this.state = new_state
  }
  render(){
    return (<input></input>);
  }
  //find a 'different' solution than _bind (not that it's wrong) just add some flavour
}
