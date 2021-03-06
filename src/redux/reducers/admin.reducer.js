const adminReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ADMIN_PET':
        return action.payload;
      case 'UNSET_ADMIN_PET':
        return [];
      default:
        return state;
    }
  };
  
  // admin will be on the redux state at:
  // state.admin
  export default adminReducer;