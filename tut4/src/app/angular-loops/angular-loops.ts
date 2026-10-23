import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-loops',
  imports: [],
  templateUrl: './angular-loops.html',
  styleUrl: './angular-loops.css',
})
export class AngularLoops {
  tasks = [
    { id: 1, name: 'Learn the new Angular control flow' },
    { id: 2, name: 'Refactor old *ngFor loops' },
    { id: 3, name: 'Deploy the application' }
  ];

  clearTasks() {
    this.tasks = []; // Setting this to empty will automatically trigger the @empty block
  }

  userRole = signal('editor');

  setRole(role: string) {
    this.userRole.set(role);
  }
}
