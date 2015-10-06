import styles from '../styles/styles.js';

class Message extends React.Component {
  render(){

    return <li style={styles.message} className="message"><h3>{this.props.heading}</h3><p>{this.props.message}</p></li>
}

}
Message.propTypes = {
  heading : React.PropTypes.string,
  message : React.PropTypes.string
};
export default Message;
