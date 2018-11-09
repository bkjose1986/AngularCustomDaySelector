import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-selector',
  templateUrl: './list-selector.component.html',
  styleUrls: ['./list-selector.component.scss']
})
export class ListSelectorComponent implements OnInit {
  /**
   * array of days which are not selected
   */
  public unSelectedDays = [];
  /**
   * selected day to move form array of selected day to unselected day
   */
  public selectedDayToMove;
  /**
   * selected day to move from array of unselected days to selected day
   */
  public unSelectedDayToMove;
  /**
   * array of days which are selected
   */
  public daysSelected ;
  /**
   * The 7 days in a week
   */
  public days = [
    { id: 'monday', name: 'Monday' },
    { id: 'tuesday', name: 'Tuesday' },
    { id: 'wednesday', name: 'Wednesday' },
    { id: 'thursday', name: 'Thursday' },
    { id: 'friday', name: 'Friday' },
    { id: 'saturday', name: 'Saturday' },
    { id: 'sunday', name: 'Sunday' }
];
/**
 * The already selected days as an array
 */
@Input() public defaultDays: Array<string>;
/**
 * The event emitter to emit the selected days
 */
@Output() selectedDays: EventEmitter<string> = new EventEmitter();
/**
 * constructs the component
 */
  constructor() { }
 /**
   * ng2 life-cycle hook
   */
  ngOnInit() {
    this.daysSelected = this.defaultDays;
    this.filterSelectedDays();
  }
/**
 * find days which are not default days
 */
  filterSelectedDays() {
    this.days.map(day => this.defaultDays.indexOf(day.id) > -1 ? true : this.unSelectedDays.push(day.id));
  }
  /**
   * change the background color of selected day from unselected days list
   * @param event click event as parameter
   */
  unSelectedDaysClick(event) {
    this.selectedDayToMove = event.target.innerHTML;
    const allSelectedDays = (<any>document.getElementsByClassName('unSelected'));
    for ( let i = 0; i < allSelectedDays.length; i++) {
      allSelectedDays[i].style.backgroundColor = '#fff';
    }
    document.getElementById(event.target.id).style.backgroundColor = 'blue';
  }
  /**
   * move selected day from unselected days list to selected days list and emit the selected days list to parent
   */
  toSelect() {
    let unSelectedDaysList;
    if (this.selectedDayToMove !== undefined && this.daysSelected.indexOf(this.selectedDayToMove) < 0) {
      this.daysSelected.push(this.selectedDayToMove) ;
      unSelectedDaysList = this.unSelectedDays.filter(day => day !== this.selectedDayToMove);
      this.unSelectedDays = unSelectedDaysList;
    }
    this.selectedDays.emit(this.daysSelected);
    this.selectedDayToMove = null;
  }
  /**
   * change the background color of selected day from selected days list
   * @param event click event as parameter
   */
  selectedDaysClick(event) {
    this.unSelectedDayToMove = event.target.innerHTML;
    const allSelectedDays = (<any>document.getElementsByClassName('selected'));
    for (let i = 0; i < allSelectedDays.length; i++) {
      allSelectedDays[i].style.backgroundColor = '#fff';
    }
    document.getElementById(event.target.id).style.backgroundColor = 'blue';
  }
  /**
   * move selected day from selected days list to unselected days list and emit the selected days list to parent
   */
  toDeSelect() {
    let selectedDaysList;
    if (this.unSelectedDayToMove !== undefined && this.unSelectedDays.indexOf(this.unSelectedDayToMove) < 0 ) {
      this.unSelectedDays.push(this.unSelectedDayToMove) ;
      selectedDaysList = this.daysSelected.filter(day => day !== this.unSelectedDayToMove);
      this.daysSelected = selectedDaysList;
    }
    this.selectedDays.emit(this.daysSelected);
    this.unSelectedDayToMove = null;
  }
  /**
   * move all days from unselected days list to selected days list and emit the selected days list to parent
   */
  toAllSelect() {
    let unSelectedDaysList;
    this.unSelectedDays.forEach(element => {
      this.daysSelected.push(element);
      unSelectedDaysList = this.unSelectedDays.filter(day => day !== element);
      this.unSelectedDays = unSelectedDaysList;
    });
    this.selectedDays.emit(this.daysSelected);
  }
  /**
   * move all days from selected days list to unselected days list
   */
  toAllDeSelect() {
    let selectedDaysList;
    this.daysSelected.forEach(element => {
      this.unSelectedDays.push(element);
      selectedDaysList = this.daysSelected.filter(day => day !== element);
      this.daysSelected = selectedDaysList;
    });
    this.selectedDays.emit(this.daysSelected);
  }
}
