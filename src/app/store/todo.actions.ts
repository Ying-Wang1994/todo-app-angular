import {createAction, props} from '@ngrx/store';
import {Language} from "./types";

// 声明 create action 和入参，当点击创建todo时触发
export const create = createAction('[Add Todo Component] Create', props<{task: string}>());
// 声明 translate action 和入参，当点击翻译时触发
export const translate = createAction('[Todo List Component] Translate', props<{todoId: string, translatedTodo: string}>());

// 声明 finish action 和入参，当点击完成时触发
export const finish = createAction('[Todo List Component] finish', props<{todoId: string}>());


