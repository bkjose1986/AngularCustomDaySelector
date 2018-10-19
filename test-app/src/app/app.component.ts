import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  selectedDays = ["thursday", "friday", "saturday"];
  selectionChangedHandler(daysSelected: string) {  
    console.log(daysSelected);
  }
}
