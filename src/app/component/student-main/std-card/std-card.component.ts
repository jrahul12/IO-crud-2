import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Istd } from 'src/app/model/data';

@Component({
  selector: 'app-std-card',
  templateUrl: './std-card.component.html',
  styleUrls: ['./std-card.component.scss']
})
export class StdCardComponent implements OnInit {

  @Input() stdObj!: Istd[]
  @Output() emitRemove: EventEmitter<string> = new EventEmitter<string>()
  @Output() emitEdit: EventEmitter<Istd> = new EventEmitter<Istd>()
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
  onEdit(std: Istd) {
    this.emitEdit.emit(std)
  }

}
