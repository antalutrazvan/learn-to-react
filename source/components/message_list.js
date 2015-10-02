import Message from './message';
class MessageList extends React.Component {
    render() {
      var messageNodes = this.props.data.map(function (item) {
      return (
        <Message heading={item.heading} message={item.message} />
      );
    });

    return ( <ul className="messageList" > {messageNodes} </ul>);

  }
}

    export default MessageList;
