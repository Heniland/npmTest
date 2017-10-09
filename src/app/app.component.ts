import {Component} from '@angular/core';
import {Car} from 'ha-auto';
import {Engine} from 'ha-engine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  car: Car;

  constructor() {
    this.car = new Car(21680, new Engine('V8', 400), 'Chevrolet', 'Malibu', true);
  }
}
