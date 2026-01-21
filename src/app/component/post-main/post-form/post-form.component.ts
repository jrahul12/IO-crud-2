import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from 'src/app/model/data';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {

  isInEditMode: boolean = false
  @ViewChild('postForm') postForm!: NgForm
  @Output() emitAdd: EventEmitter<Ipost> = new EventEmitter<Ipost>()
  @Output() emitUpdate: EventEmitter<Ipost> = new EventEmitter<Ipost>()
  @Input() edit!: Ipost
  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    if (this.postForm.valid) {
      let createObj: Ipost = {
        ...this.postForm.value,
        id: Date.now().toString()
      }
      this.emitAdd.emit(createObj)
      this.postForm.reset()
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['edit']['currentValue']) {
      this.postForm.form.patchValue(changes['edit']['currentValue'])
      this.isInEditMode = true
    }
  }
  onUpdate() {
    if (this.postForm.valid) {
      let createObj: Ipost = {
        ...this.postForm.value,
        id: this.edit.id
      }
      this.emitUpdate.emit(createObj)
      this.isInEditMode = false
      this.postForm.reset()
    }
  }
}
