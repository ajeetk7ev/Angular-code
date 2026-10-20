import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Counter } from './counter/counter';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tut2');
}
