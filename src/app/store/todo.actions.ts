import {createAction, props} from '@ngrx/store';
import {Language} from "./types";

// Creates an action for creating a new todo item
export const create = createAction('[Add Todo Component] Create', props<{task: string}>());

// Creates an action for translating a todo item
export const translate = createAction('[Todo List Component] Translate', props<{todoId: string, translatedTodo: string}>());

// Creates an action for marking a todo item as finished
export const finish = createAction('[Todo List Component] finish', props<{todoId: string}>());


