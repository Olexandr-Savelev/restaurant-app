import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/app.interface';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { selectUser } from './store/selectors/user.selector';
import { loadUser } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Restaurant';
  user$: Observable<User>;

  constructor(private store: Store<IAppState>) {
    this.user$ = this.store.pipe(select(selectUser));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUser());
    this.user$.subscribe((user) => console.log(user));
  }
}
