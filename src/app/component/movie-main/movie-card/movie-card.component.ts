import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Imovie } from 'src/app/model/data';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Imovie
  @Output() emitRemove: EventEmitter<string> = new EventEmitter<string>()
  @Output() emitEdit: EventEmitter<Imovie> = new EventEmitter<Imovie>()
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
  onEdit(movie: Imovie) {
    this.emitEdit.emit(movie)
  }

}
