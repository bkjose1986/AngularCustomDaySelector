import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  /**
   * type of the selection
   * boxSelection, checkboxSelection
   */
  public type='checkboxSelection'
  /**
   * default days
   */
  selectedDays = ["monday", "friday", "saturday"];
  /**
   * to get selected days from child component
   * @param daysSelected 
   */
  selectionChangedHandler(daysSelected: string) {  
    console.log(daysSelected);
  }
}
