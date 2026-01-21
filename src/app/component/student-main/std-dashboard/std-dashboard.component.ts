import { Component, OnInit } from '@angular/core';
import { studentData } from 'src/app/const/data';
import { Istd } from 'src/app/model/data';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  stdArr: Istd[] = studentData
  editObj!: Istd
  constructor(private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }

  onAdd(std: Istd) {
    this.stdArr.unshift(std)
    this.snackBar.snackBar(`student Added SuccessFully`)
  }
  onRemove(id: string) {
    let value = this.stdArr.findIndex(s => s.id === id)
    if (value > -1) {
      this.stdArr.splice(value, 1)
      this.snackBar.snackBar(`student Removed SuccessFully`)
    }
  }
  onEdit(std: Istd) {
    this.editObj = std
  }

  onUpdate(std: Istd) {
    let getIndex = this.stdArr.findIndex(s => s.id === std.id)
    this.stdArr[getIndex] = std
    this.snackBar.snackBar(`student Updated SuccessFully`)
  }
}
