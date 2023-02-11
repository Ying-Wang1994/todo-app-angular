import {createReducer, on} from "@ngrx/store";
import {create, finish, translate} from "./todo.actions";
import {Todo} from "./types";


export const initialTodo: Todo[] = [];

export const todoReducer = createReducer(
  initialTodo,
  // 实现 create action 具体逻辑，和actions 的声明相关
  on(create, (state, {task}) => {
    const todoId = String(Date.now());
    return [...state, {
      task,
      todoId,
      done: false,
      translations: []
    }]
  }),
  // 实现 translate action 具体逻辑，和actions 的声明相关
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
  // 实现 finish action 具体逻辑，和actions 的声明相关
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
