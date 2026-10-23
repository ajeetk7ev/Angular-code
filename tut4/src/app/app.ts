import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalInput } from './signal-input/signal-input';
import { AngularConditionals } from './angular-conditionals/angular-conditionals';
import { AngularLoops } from './angular-loops/angular-loops';
import { TwoWayDatabindings } from './two-way-databindings/two-way-databindings';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalInput, AngularConditionals, AngularLoops, TwoWayDatabindings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users:WritableSignal<string[]> = signal<string[]>(["Ajeet", "Rajan", "Amit"]);
  
  setUser(){
    this.users.set(["Aditya"]);
    console.log("Users are : ", this.users());
  }


  totalUsers = computed(() => `Total users are : ${this.users().length}`)
   
  updateUser(){
    this.users.update((prev) => [...prev, "Prince"]);
    console.log("Users are : ", this.users());
  }
}
