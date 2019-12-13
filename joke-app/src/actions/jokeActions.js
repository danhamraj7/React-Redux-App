export const FETCH_JOKE_START = "FETCH_JOKE_START";

export const getJoke = () => dispatch => {
  dispatch({ type: FETCH_JOKE_START });
};
