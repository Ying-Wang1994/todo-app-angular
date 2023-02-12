import {createAction, props} from '@ngrx/store';
import {Language} from "./types";


export const create = createAction('[Add Todo Component] Create', props<{task: string}>());

export const translate = createAction('[Todo List Component] Translate', props<{todoId: string, translatedTodo: string}>());


export const finish = createAction('[Todo List Component] finish', props<{todoId: string}>());


