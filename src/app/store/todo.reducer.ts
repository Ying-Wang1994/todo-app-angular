import {createReducer, on} from "@ngrx/store";
import {create, finish, translate} from "./todo.actions";
import {Todo} from "./types";



export const initialTodo: Todo[] = [];
export const todoReducer = createReducer(
  initialTodo,
  on(create, (state, {task}) => {
    // Generate a unique ID for the new todo using the current time
    const todoId = String(Date.now());
    // Return a new state with the new todo added
    return [...state, {
      task,
      todoId,
      done: false,
      translations: []
    }]
  }),
  
  on(translate, (state, {todoId, translatedTodo}) => {// Return a new array that maps over the existing state array
    
    return [...state].map(todo => {
      // Check if the current todo item's id matches the id of the todo that was translated
      if (todo.todoId === todoId) {
        return {
          ...todo,
          task: translatedTodo
        }
      }
      return todo;
    })
  }),
  // Handle the `finish` action
  on(finish, (state, {todoId}) => {
    // Return a new state with the specified todo set as done
    return [...state].map(todo => {
      if (todo.todoId === todoId) {
        return {
          ...todo,
          done: true
        }
      }
      return todo;
    });
  })
)

