import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counterApp';
  count = 0;

  reset() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
}
