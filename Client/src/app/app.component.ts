import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/app.interface';
import { Store } from '@ngrx/store';

import { loadUser } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Restaurant';

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUser());
  }
}
