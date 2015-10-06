import Message from './message';
import styles from '../styles/styles.js';

class MessageList extends React.Component {
    render() {
      var messageNodes = this.props.data.map(function (item) {
      return (
        <Message heading={item.heading} message={item.message} />
      );
    });

    return ( <ul style={styles.messageList} className="messageList" > {messageNodes} </ul>);

  }
}

export default MessageList;
