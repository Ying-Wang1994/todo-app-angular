import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Language, Todo} from "../store/types";
import {select, Store} from "@ngrx/store";
import {finish, translate} from "../store/todo.actions";
import {TranslateService} from "../translate.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$!: Observable<Todo[]>;
  constructor(
    public translationService: TranslateService, // 这里使用 依赖注入引入 translateService，
    private store: Store<{ todos: Todo[] }>
  ) {
    // 从 store 中获取 todos 数据
    this.todos$ = store.select('todos');
  }


  // 处理用户点击完成事件
  handleClickDone(todoId: string) {
    this.store.dispatch(finish({todoId}));
  }

  // 处理用户点击翻译事件
  handleClickTranslate(todo: Todo, target: Language) {
    this.translationService.translate(todo.task, target)
      .subscribe(translatedTask => {
        this.store.dispatch(
          translate({
            todoId: todo.todoId,
            translatedTodo: translatedTask
          })
        )
      })
  }
}
