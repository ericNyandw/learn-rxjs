import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CombineLatest } from "./components/combine-latest/combine-latest";

@Component({
  selector: 'app-root',
  imports: [CombineLatest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lean-rxjs');
}
