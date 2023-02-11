import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {AppModule} from "./app.module";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [
        AppModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todo List');
  }));

});
