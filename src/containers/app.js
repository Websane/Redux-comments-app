import React from 'react';
import { connect } from 'react-redux';

import AddComment from '../components/add-comment';
import Comment from '../components/comments';

import {addComment, removeComment} from '../actions/index';

let App = (props) => {
  const {todos, addComment, removeComment} = props;

  return (
    <div className="container">
      <Comment todos={todos} removeComment={removeComment}/>
      <AddComment addComment={addComment} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, value) => dispatch(addComment(name, value)),
    removeComment: (id) => dispatch(removeComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;