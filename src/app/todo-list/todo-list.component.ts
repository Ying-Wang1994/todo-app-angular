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
  // Declare an Observable property for todos
  todos$!: Observable<Todo[]>;

  // Inject the required services
  constructor(
    public translationService: TranslateService,
    private store: Store<{ todos: Todo[] }>
  ) {
    // Get the todos from the store and assign it to the `todos$` property
    this.todos$ = store.select('todos');
  }

  
  handleClickDone(todoId: string) {
    // Dispatch the "finish" action to the store
    this.store.dispatch(finish({todoId}));
  }

  
  handleClickTranslate(todo: Todo, target: Language) {
    // Call the `translate` method of the `TranslationService`
    this.translationService.translate(todo.task, target)
      // Subscribe to the returned Observable
      .subscribe(translatedTask => {
        // Dispatch the "translate" action to the store
        this.store.dispatch(
          translate({
            todoId: todo.todoId,
            translatedTodo: translatedTask
          })
        )
      })
  }
}
