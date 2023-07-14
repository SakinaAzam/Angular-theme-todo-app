import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

   
  todos: Todo[] = [
    new Todo(1, 'Buy groceries', 'Remember to buy milk and eggs', true),
    new Todo(2, 'Walk the dog', 'Take the dog for a walk in the park', true),
    new Todo(3, 'Finish coding project', 'Complete the remaining tasks in the project', false),
  ];

  ngOnInit(): void {
      
  }
  localget: string | null;
  constructor() {
    this.localget = localStorage.getItem("todos")||  '';
    console.log("this is my todos", this.localget)
    if (this.localget == null) { 
      this.todos = [];
    }
    else {
      this.todos=JSON.parse(this.localget)
    }
  }
  
  
  deleteTodo(todo:Todo) {
    console.log( "Hey! ,I am todo" , todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
   
  }
    addTodo(todo:Todo) {
    console.log( "Hey! ,I am addtodo" , todo)
      this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
      
    }
      checkTodo(todo:Todo) {
    console.log( "Hey! ,I am addtodo" , todo)
    const index = this.todos.indexOf(todo)
        this.todos[index].active = !this.todos[index].active;
          localStorage.setItem("todos", JSON.stringify(this.todos))
      
  }
}
