import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Itodo } from 'src/app/model/data';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() todo!: Itodo[]

  @Output() emitRemove: EventEmitter<string> = new EventEmitter<string>()
  @Output() emitEdit: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor(private _matDailog: MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(id: string) {
    let dailog = this._matDailog.open(GetConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        this.emitRemove.emit(id)
      }
    })
  }
  onEdit(todos: Itodo) {
    this.emitEdit.emit(todos)
  }
}
