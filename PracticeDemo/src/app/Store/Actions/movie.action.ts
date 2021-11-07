import { createAction, props } from '@ngrx/store';

//action - createAction(type, payload to pass)
export const getMovies = createAction('[any] Get movie');
export const addMovies = createAction(
  '[any] Get movie',
  (movie: any) => movie //props<{ movies: any }>()
);
export const addMoviesSuccess = createAction(
  '[any] Get movie',
  props<{ movies: any }>()
);
