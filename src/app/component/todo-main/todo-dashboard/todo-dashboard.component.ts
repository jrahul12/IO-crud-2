import { Component, OnInit } from '@angular/core';
import { todoData } from 'src/app/const/data';
import { Itodo } from 'src/app/model/data';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todoArr: Itodo[] = todoData
  editObj!: Itodo
  constructor(private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }
  onAdd(todo: Itodo) {
    this.todoArr.unshift(todo)
    this.snackBar.snackBar(`todo Added SuccessFully`)
  }

  onRemove(id: string) {
    let value = this.todoArr.findIndex(t => t.id === id)
    if (value > -1) {
      this.todoArr.splice(value, 1)
    this.snackBar.snackBar(`todo Removed SuccessFully`)
    }
  }
  onEdit(todo: Itodo) {
    this.editObj = todo
  }

  onUpdate(todo: Itodo) {
    let getIndex = this.todoArr.findIndex(t => t.id === todo.id)
    this.todoArr[getIndex] = todo
    this.snackBar.snackBar(`todo Updated SuccessFully`)
  }
}
