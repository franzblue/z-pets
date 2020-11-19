const petReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PET':
        return action.payload;
      case 'UNSET_PET':
        return {};
      default:
        return state;
    }
  };
  
  // z-pet will be on the redux state at:
  // state.pet
  export default petReducer;