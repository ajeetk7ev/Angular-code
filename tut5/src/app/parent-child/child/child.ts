import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  student = input<{name:string; email:string; age:number}>()


  studentSelected = output<{name:string; email:string; age:number} | undefined>();

  selectStudent() {
    this.studentSelected.emit(this.student())
  }

 
}
