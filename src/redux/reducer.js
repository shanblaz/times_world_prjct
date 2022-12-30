const initialState = {
    countries: []
  };
  
  function reducer(state = initialState, action) {
    console.log(action,"acccc")
    switch (action.type) {
      case 'COUNTRIES_FETCH_COMPLETED':
        return {
            countries: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;