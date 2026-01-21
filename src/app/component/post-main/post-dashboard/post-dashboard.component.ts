import { Component, OnInit } from '@angular/core';
import { postData } from 'src/app/const/data';
import { Ipost } from 'src/app/model/data';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postArr: Ipost[] = postData
  editObj!: Ipost
  constructor(private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }

  onAdd(post: Ipost) {
    this.postArr.unshift(post)
    this.snackBar.snackBar(`Post Added SuccessFully`)
  }
  onRemove(id: string) {
    let value = this.postArr.findIndex(p => p.id === id)
    if (value > -1) {
      this.postArr.splice(value, 1)
      this.snackBar.snackBar(`Post Removed SuccessFully`)
    }
  }
  onEdit(post: Ipost) {
    this.editObj = post
  }
  onUpdate(post: Ipost) {
    let getIndex = this.postArr.findIndex(p => p.id === post.id)
    this.postArr[getIndex] = post
    this.snackBar.snackBar(`Post Updated SuccessFully`)
  }
}
