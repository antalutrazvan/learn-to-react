import MessageList from './message_list';
import MessageInput from './message_input';
import BindingComponent from './binding_component';

class MessageBox extends BindingComponent{
  constructor(){
    super();
    this._bind('addMessage');
    this.state = this.getInitialState();
  };

  getInitialState(){
    return({
      data: [
        {heading:'Hello',message:'Hey there!'},
        {heading:'Hello',message:'Hey there to you too!'},
        {heading:'GoodBye',message:'See ya!'},
        {heading:'BoodBye',message:'So long!'}
      ]
    });
  }

  addMessage(title,msg){
    if(title === '' || msg === '')
      return;
    let copy = this.state.data;
    copy.push({heading:title,message:msg});
    this.setState({
      data: copy
    });
  }

  render() {

    return (
      <div className="messageBox">
        <MessageInput onSendCallback={this.addMessage} />
        <h1>Messages:</h1>
        <MessageList data={this.state.data} />
      </div>
    );
  }
}

export default MessageBox;
