import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CombineLatest } from './components/observables/combine-latest/combine-latest';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lean-rxjs');
}
