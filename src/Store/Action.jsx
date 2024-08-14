export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
  });
  
  export const removeTodo = (index) => ({
    type: 'REMOVE_TODO',
    payload: index
  });