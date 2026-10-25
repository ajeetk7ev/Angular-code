import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent-child/parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tut5');
}
