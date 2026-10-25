import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  students = signal([
  {
    name: 'Ajeet Kumar',
    email: 'ajeet@gmail.com',
    age: 22
  },
  {
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    age: 21
  },
  {
    name: 'Priya Singh',
    email: 'priya@gmail.com',
    age: 23
  },
  {
    name: 'Amit Verma',
    email: 'amit@gmail.com',
    age: 22
  }
]);

selectedStudent = signal<{name:string; email:string; age:number} | undefined>(undefined);



onStudentSelected(student:{name:string; email:string; age:number}){
  this.selectedStudent.set(student);
}
}
