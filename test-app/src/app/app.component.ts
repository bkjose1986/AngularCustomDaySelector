import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  selectedDays = ["thursday", "friday", "saturday"];
  selectionChangedHandler(daysSelected: string) {  
    console.log(daysSelected);
  }
}
