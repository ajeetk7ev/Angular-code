import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-conditionals',
  imports: [],
  templateUrl: './angular-conditionals.html',
  styleUrl: './angular-conditionals.css',
})
export class AngularConditionals {
  isLoggedin = signal(false);
  isLoading = signal(true)
  toggleLogin() {
    this.isLoggedin.set(!this.isLoggedin())
  }
}
