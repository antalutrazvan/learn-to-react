import MessageList from './message_list';

class MessageBox extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [
        {heading:'Hello',message:'Hey there!'},
        {heading:'Hello',message:'Hey there to you too!'},
        {heading:'GoodBye',message:'See ya!'},
        {heading:'BoodBye',message:'So long!'}
      ]
    };
  }
  setState(new_state){
    this.state = new_state;
  }

  render() {
    return (
      <div className="messageBox">
        <h1>Messages:</h1>
        <MessageList data={this.state.data} />
      </div>
    );
  }
}

export default MessageBox;
