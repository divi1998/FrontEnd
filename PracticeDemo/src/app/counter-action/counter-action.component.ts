import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter-action.action';

@Component({
  selector: 'app-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.css'],
})
export class CounterActionComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
    console.log(this.count$);
  }

  decrement() {
    this.store.dispatch(decrement());
    console.log(this.count$);
  }

  reset() {
    this.store.dispatch(reset());
    console.log(this.count$);
  }
}
