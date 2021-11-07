import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addMovies, getMovies } from './Store/Actions/movie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'PracticeDemo';
  newMovie: any;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getMovies());
  }
  getAllMovies(): void {
    this.store.dispatch(getMovies()); // store.dispatch(actionName(payload if needed))
    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }
  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
    // this.dataService.addMovies(this.newMovie).subscribe((res) => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }
}
