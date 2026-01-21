import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdDashboardComponent } from './component/student-main/std-dashboard/std-dashboard.component';
import { StdFormComponent } from './component/student-main/std-form/std-form.component';
import { StdCardComponent } from './component/student-main/std-card/std-card.component';
import { PostDashboardComponent } from './component/post-main/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './component/post-main/post-form/post-form.component';
import { PostCardComponent } from './component/post-main/post-card/post-card.component';
import { MovieDashboardComponent } from './component/movie-main/movie-dashboard/movie-dashboard.component';
import { MovieFormComponent } from './component/movie-main/movie-form/movie-form.component';
import { MovieCardComponent } from './component/movie-main/movie-card/movie-card.component';
import { TodoDashboardComponent } from './component/todo-main/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './component/todo-main/todo-form/todo-form.component';
import { TodoCardComponent } from './component/todo-main/todo-card/todo-card.component';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [
    AppComponent,
    StdDashboardComponent,
    StdFormComponent,
    StdCardComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent,
    MovieDashboardComponent,
    MovieFormComponent,
    MovieCardComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoCardComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
