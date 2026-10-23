import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-databindings',
  imports: [FormsModule],
  templateUrl: './two-way-databindings.html',
  styleUrl: './two-way-databindings.css',
})
export class TwoWayDatabindings {
  username = signal('Ajeet');

  resetName() {
    // Changing the code automatically updates the HTML input field!
    this.username.set('Ajeet');
  }
}
