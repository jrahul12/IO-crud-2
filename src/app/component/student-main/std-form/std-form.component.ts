import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/data';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit, OnChanges {

  @Input() edit!: Istd
  isInEditMode: boolean = false
  @ViewChild('stdForm') stdForm!: NgForm
  @Output() emitAdd: EventEmitter<Istd> = new EventEmitter<Istd>()
  @Output() emitUpdate: EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    if (this.stdForm.valid) {
      let createObj: Istd = {
        ...this.stdForm.value,
        id: Date.now().toString()
      }
      this.emitAdd.emit(createObj)
      this.stdForm.reset()
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['edit']['currentValue']) {
      this.stdForm.form.patchValue(changes['edit']['currentValue'])
      this.isInEditMode = true
    }
  }

  onUpdate() {
    if (this.stdForm.valid) {
      let createObj: Istd = {
        ...this.stdForm.value,
        id: this.edit.id
      }
      this.emitUpdate.emit(createObj)
      this.isInEditMode = false
      this.stdForm.reset()
    }
  }

}
