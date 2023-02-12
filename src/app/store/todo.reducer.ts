import {createReducer, on} from "@ngrx/store";
import {create, finish, translate} from "./todo.actions";
import {Todo} from "./types";


export const initialTodo: Todo[] = [];

export const todoReducer = createReducer(
  initialTodo,
  
  on(create, (state, {task}) => {
    const todoId = String(Date.now());
    return [...state, {
      task,
      todoId,
      done: false,
      translations: []
    }]
  }),
  
  on(translate, (state, {todoId, translatedTodo}) => {
    return [...state].map(todo => {
      if (todo.todoId === todoId) {
        return {
          ...todo,
          task: translatedTodo
        }
      }
      return todo;
    })
  }),
  
  on(finish, (state, {todoId}) => {
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
