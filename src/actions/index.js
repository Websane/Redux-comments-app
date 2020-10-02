let nextId = 1;

export const addComment = (name, value) => {

  return {
    type: 'ADD_COMMENT',
    id: nextId++,
    user: name,
    comment: value
  }
}

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    id
  }
}