import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-input',
  imports: [],
  templateUrl: './signal-input.html',
  styleUrl: './signal-input.css',
})
export class SignalInput {
  name = signal<string>('');


  changeName(value:string){
    console.log("Name is : ", value)
      this.name.set(value);
  }

}
