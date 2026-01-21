import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/data';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @Output() emitAdd: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitUpdate: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() edit!: Itodo
  isInEditMode: boolean = false
  @ViewChild('todoForm') todoForm!: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    if (this.todoForm.valid) {
      let createObj: Itodo = {
        ...this.todoForm.value,
        id: Date.now().toString()
      }
      this.emitAdd.emit(createObj)
      this.todoForm.reset()
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['edit']['currentValue']) {
      this.todoForm.form.patchValue(changes['edit']['currentValue'])
      this.isInEditMode = true
    }
  }
  onUpdate() {
    if (this.todoForm.valid) {
      let createObj: Itodo = {
        ...this.todoForm.value,
        id: this.edit.id
      }
      this.emitUpdate.emit(createObj)
      this.isInEditMode = false
      this.todoForm.reset()
    }
  }
}
