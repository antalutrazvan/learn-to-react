class Message extends React.Component {
  render(){
    return <li  className="message"><h3>{this.props.heading}</h3><p>{this.props.message}</p></li>
}
}
Message.propTypes = {
  heading : React.PropTypes.string,
  message : React.PropTypes.string
};
export default Message;
