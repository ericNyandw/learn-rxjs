import { Component, signal } from '@angular/core';
import { CombineLatest_ } from './components/observables/combine-latest/combine-latest_.component';
import {Header} from './components/observables/behavior-subject/header/header';
import {Login} from './components/observables/behavior-subject/login/login';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Header,
    Login,
    CombineLatest_,
  ],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lean-rxjs');
}
