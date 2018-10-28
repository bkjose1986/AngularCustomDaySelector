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
   * boxSelection, checkboxSelection, listSelection
   */
  public type = 'checkboxSelection';
  /**
   * default days
   */
  selectedDays = ['monday', 'friday', 'saturday'];
  /**
   *The method to catch the emitted event
   * @param daysSelected
   */
  selectionChangedHandler(daysSelected: string) {
    console.log(daysSelected);
  }
}
