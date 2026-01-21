import { Component, OnInit } from '@angular/core';
import { movieData } from 'src/app/const/data';
import { Imovie } from 'src/app/model/data';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  movieArr: Imovie[] = movieData
  editObj!: Imovie
  constructor(private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }

  onAdd(movie: Imovie) {
    this.movieArr.unshift(movie)
    this.snackBar.snackBar(`movie Added SuccessFully`)
  }

  onRemove(id: string) {
    let value = this.movieArr.findIndex(m => m.id === id)
    if (value > -1) {
      this.movieArr.splice(value, 1)
      this.snackBar.snackBar(`movie Removed SuccessFully`)
    }
  }
  onEdit(movie: Imovie) {
    this.editObj = movie
  }

  onUpdate(movie: Imovie) {
    let getIndex = this.movieArr.findIndex(m => m.id === movie.id)
    this.movieArr[getIndex] = movie
    this.snackBar.snackBar(`movie Updated SuccessFully`)
  }

}
