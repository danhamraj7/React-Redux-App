import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getJoke } from "../actions";

const Joke = props => {
  return (
    <div>
      <h1>Random Jokes</h1>
      {!props.joke && <p>Get a Joke</p>}
      {props.isFetching && (
        <Loader type="Puff" color="red" height={100} width={100} />
      )}
      <button onClick={props.getJoke}>Click To Laugh</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getJoke })(Joke);
