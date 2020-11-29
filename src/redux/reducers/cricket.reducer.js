const petReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CRICKETS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // crickets will be on the redux state at:
  // state.crickets
  export default petReducer;