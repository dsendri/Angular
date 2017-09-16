import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonToggle: boolean = false;
  clickArray = new Array;
  count = 0;

  onClick() {
    this.buttonToggle = !this.buttonToggle;
    this.count++;
    console.log(this.count);
    this.clickArray.push(new Date());
  }

  getColor(i) {
    return i > 3 ? 'blue' : 'none';
  }
}
