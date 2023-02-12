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
    public translationService: TranslateService, 
    private store: Store<{ todos: Todo[] }>
  ) {
    
    this.todos$ = store.select('todos');
  }


 
  handleClickDone(todoId: string) {
    this.store.dispatch(finish({todoId}));
  }

 
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
