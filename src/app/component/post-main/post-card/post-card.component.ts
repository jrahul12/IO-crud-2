import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Ipost } from 'src/app/model/data';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: Ipost
  @Output() emitRemove: EventEmitter<string> = new EventEmitter<string>()
  @Output() emitEdit: EventEmitter<Ipost> = new EventEmitter<Ipost>()
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
  onEdit(post: Ipost) {
    this.emitEdit.emit(post)
  }
}
