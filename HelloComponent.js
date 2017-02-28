var _HelloComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    nameInput: React.PropTypes.string.isRequired
  },

  handleInputChange: function(event) {
    this.props.dispatch(updateNameInput(event.target.value));
  },

  handleSubmit: function() {
    this.props.dispatch(setName());
  },

  render: function() {
    var nameString = "Hello, " + this.props.name + "!";
    var nameInput = this.props.nameInput;

    return ( 
      div({},
        div({},
          input(
            {value: nameInput, onChange: this.handleInputChange },
             null
          ),
          button({onClick: this.handleSubmit}, 'submit')
        ),
        h1({}, nameString)
      ) 
    )
  }
});

var mapStateToProps = function(state) {
  return {
    nameInput: state.nameInput,
    name: state.name

  }
};

var HelloComponent = ReactRedux.connect(mapStateToProps)(_HelloComponent);
