var DEFAULT_STATE = {
  nameInput: '',
  name: 'World'
};

var updateNameInputReducer = function(state, action) {
  return {
    nameInput: action.value,
    name: state.name
  };
};

var setNameReducer = function(state) {
  return {
    nameInput: state.nameInput,
    name: state.nameInput
  };
};

var rootReducer = function(state, action) {
  var stateOrDefault = state || DEFAULT_STATE;

  switch (action.type) {
    case UPDATE_NAME_INPUT:
      return updateNameInputReducer(stateOrDefault, action)

    case SET_NAME:
      return setNameReducer(stateOrDefault)

    default:
      return stateOrDefault;
  }
};
