import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


  onSubmit() {
    if (this.title && this.desc) {
      const newTodo: Todo = {
        sno: 8,
        title: this.title,
        desc: this.desc,
        active: true
      };
      this.todoAdd.emit(newTodo);
      this.title = '';
      this.desc = '';
    }
  }

}
