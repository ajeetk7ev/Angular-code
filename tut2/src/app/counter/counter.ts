import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  value=0
  increment(){
    this.value += 1
  }
  decrement(){
    this.value -=1
  }
}
