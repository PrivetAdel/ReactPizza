const initialState = {
  items: [],
  isLoading: true,
  error: null
}

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
      
    default: 
      return state
  };
};

export default pizzas;