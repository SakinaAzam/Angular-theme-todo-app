import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  implements OnInit{
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    
  }
  ngOnInit() :void {
      
  }
  delete(todo :Todo) {
    this.todoDelete.emit(todo);
    console.log(" i am click the delete button")
  }
  onCheck(todo:Todo) {
    console.log(todo)
     this.todoCheckbox.emit(todo);
  }

}
