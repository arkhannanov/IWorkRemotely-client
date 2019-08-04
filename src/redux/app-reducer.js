const SET_IS_LOADING = 'SET_IS_LOADING';

let initialState = {
  isLoading: true
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return {...state, isLoading: action.isLoading}
    }
    default:
      return state;
  }
}

export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const getIsLoading = () => {
  return (dispatch) => {
      dispatch(setIsLoading(false));
  }
}

export default appReducer;