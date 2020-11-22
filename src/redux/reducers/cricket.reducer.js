const petReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CRICKETS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // z-pet will be on the redux state at:
  // state.pet
  export default petReducer;