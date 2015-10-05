(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsMessage_box = require('./components/message_box');

var _componentsMessage_box2 = _interopRequireDefault(_componentsMessage_box);

var _componentsMessage_input = require('./components/message_input');

var _componentsMessage_input2 = _interopRequireDefault(_componentsMessage_input);

React.render(React.createElement(
  'div',
  null,
  React.createElement(_componentsMessage_box2['default'], null)
), document.getElementById('mount-point'));

},{"./components/message_box":3,"./components/message_input":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = (function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    _get(Object.getPrototypeOf(Message.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: "message" },
        React.createElement(
          "h3",
          null,
          this.props.heading
        ),
        React.createElement(
          "p",
          null,
          this.props.message
        )
      );
    }
  }]);

  return Message;
})(React.Component);

Message.propTypes = {
  heading: React.PropTypes.string,
  message: React.PropTypes.string
};
exports["default"] = Message;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _message_list = require('./message_list');

var _message_list2 = _interopRequireDefault(_message_list);

var _message_input = require('./message_input');

var _message_input2 = _interopRequireDefault(_message_input);

var MessageBox = (function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  function MessageBox() {
    _classCallCheck(this, MessageBox);

    _get(Object.getPrototypeOf(MessageBox.prototype), 'constructor', this).call(this);
    this._bind('addMessage');
    this.state = this.getInitialState();
  }

  _createClass(MessageBox, [{
    key: '_bind',
    value: function _bind() {
      var _this = this;

      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
        methods[_key] = arguments[_key];
      }

      methods.forEach(function (method) {
        return _this[method] = _this[method].bind(_this);
      });
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {
        data: [{ heading: 'Hello', message: 'Hey there!' }, { heading: 'Hello', message: 'Hey there to you too!' }, { heading: 'GoodBye', message: 'See ya!' }, { heading: 'BoodBye', message: 'So long!' }]
      };
    }
  }, {
    key: 'addMessage',
    value: function addMessage(title, msg) {
      if (title === '' || msg === '') return;
      var copy = this.state.data;
      copy.push({ heading: title, message: msg });
      this.setState({
        data: copy
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        { className: 'messageBox' },
        React.createElement(_message_input2['default'], { onSendCallback: this.addMessage }),
        React.createElement(
          'h1',
          null,
          'Messages:'
        ),
        React.createElement(_message_list2['default'], { data: this.state.data })
      );
    }
  }]);

  return MessageBox;
})(React.Component);

exports['default'] = MessageBox;
module.exports = exports['default'];

},{"./message_input":4,"./message_list":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageInput = (function (_React$Component) {
  _inherits(MessageInput, _React$Component);

  function MessageInput() {
    _classCallCheck(this, MessageInput);

    _get(Object.getPrototypeOf(MessageInput.prototype), 'constructor', this).call(this);
    this._bind('handleHeadingChange', 'handleMessageChange', 'handleSend');
    this.state = {
      heading: '',
      message: ''
    };
  }

  // MessageInput.propTypes = {
  //   onSendCallback: React.PropTypes.func.isRequired
  // };

  _createClass(MessageInput, [{
    key: '_bind',
    value: function _bind() {
      var _this = this;

      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
        methods[_key] = arguments[_key];
      }

      methods.forEach(function (method) {
        return _this[method] = _this[method].bind(_this);
      });
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {
        heading: '',
        message: ''
      };
    }
  }, {
    key: 'handleHeadingChange',
    value: function handleHeadingChange(event) {
      this.setState({
        heading: event.target.value
      });
    }
  }, {
    key: 'handleMessageChange',
    value: function handleMessageChange(event) {
      this.setState({
        message: event.target.value
      });
    }
  }, {
    key: 'handleSend',
    value: function handleSend() {
      this.props.onSendCallback(this.state.heading, this.state.message);
      this.setState(this.getInitialState());
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'MessageInput' },
        React.createElement(
          'label',
          { className: 'label' },
          ' Title: '
        ),
        '  ',
        React.createElement('br', null),
        ' ',
        React.createElement(
          'input',
          { className: 'text-input',
            type: 'text',
            onChange: this.handleHeadingChange,
            value: this.state.heading },
          ' '
        ),
        ' ',
        React.createElement('br', null),
        React.createElement(
          'label',
          { className: 'label' },
          ' Message: '
        ),
        '  ',
        React.createElement('br', null),
        ' ',
        React.createElement(
          'input',
          { className: 'text-input',
            type: 'text',
            ref: 'messageInput',
            onChange: this.handleMessageChange,
            value: this.state.message },
          ' '
        ),
        React.createElement(
          'button',
          { className: 'button-send',
            onClick: this.handleSend },
          ' Send '
        ),
        ' '
      );
    }
  }]);

  return MessageInput;
})(React.Component);

exports['default'] = MessageInput;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var MessageList = (function (_React$Component) {
  _inherits(MessageList, _React$Component);

  function MessageList() {
    _classCallCheck(this, MessageList);

    _get(Object.getPrototypeOf(MessageList.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MessageList, [{
    key: "render",
    value: function render() {
      var messageNodes = this.props.data.map(function (item) {
        return React.createElement(_message2["default"], { heading: item.heading, message: item.message });
      });

      return React.createElement(
        "ul",
        { className: "messageList" },
        " ",
        messageNodes,
        " "
      );
    }
  }]);

  return MessageList;
})(React.Component);

exports["default"] = MessageList;
module.exports = exports["default"];

},{"./message":2}]},{},[1]);
