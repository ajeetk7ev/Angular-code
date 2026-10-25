import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent-child/parent/parent';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tut5');
}
