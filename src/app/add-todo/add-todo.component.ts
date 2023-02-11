import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {create} from "../store/todo.actions";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // 依赖注入
  constructor(private store: Store) {
  }
  formGroup = new FormGroup({
    todo: new FormControl('', [
      Validators.required
    ]),
  });


  /**
   * @desc
   * 处理用户提交表单
   */
  handleSubmit() {
    const todo = this.formGroup.get('todo')?.value;
    if (todo) {
      this.store.dispatch(create({task: todo}));
      this.formGroup.get('todo')?.reset();
    }
  }
}
