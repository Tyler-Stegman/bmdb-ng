import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string = "Movie-Edit";
  submitBtnTitle: string = "Edit";
  movie: Movie = new Movie();

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {
  }

  save() {
    
  }

}
