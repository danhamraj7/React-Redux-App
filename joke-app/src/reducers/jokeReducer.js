import { FETCH_JOKE_START } from "../actions";

const initialState = {
  joke: null,
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_START:
      return {
        ...state,
        isFetching: true
      };

    default:
      return state;
  }
};

export default reducer;
