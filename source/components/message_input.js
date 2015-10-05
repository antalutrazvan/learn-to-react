import BindingComponent from './binding_component';

class MessageInput extends BindingComponent {
  constructor() {
    super();
    this._bind('handleHeadingChange', 'handleMessageChange', 'handleSend');
    this.state = this.getInitialState();
  }

  getInitialState() {
    return ({
      heading: '',
      message: ''
    });
  }

  handleHeadingChange(event) {
    this.setState({
      heading: event.target.value
    });

  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    });

  }

  handleSend() {
    this.props.onSendCallback(this.state.heading, this.state.message);
    this.setState(this.getInitialState());
  }

  render() {
    return ( < div className = "MessageInput" >
      < label className = "label" > Title: < /label>  < br / > < input className = "text-input"
      type = "text"
      onChange = {
        this.handleHeadingChange
      }
      value = {
        this.state.heading
      } > < /input> < br / >
      < label className = "label" > Message: < /label>  < br / > < input className = "text-input"
      type = "text"
      onChange = {
        this.handleMessageChange
      }
      value = {
        this.state.message
      } > < /input> < button className = "button-send"
      onClick = {
        this.handleSend
      } > Send < /button> < /div > );
  }

}
MessageInput.propTypes = {
  onSendCallback: React.PropTypes.func.isRequired
};


export default MessageInput;
