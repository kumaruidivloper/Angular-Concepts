import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Concepts';

  counter = 0;

  increment() {
    this.counter++;
  }

  onCounterChange(counter: number) {
    this.counter = counter;
  }
}
