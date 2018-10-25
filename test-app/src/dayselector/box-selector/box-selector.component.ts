import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
/**
 * rxjs imports
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-box-selector',
  templateUrl: './box-selector.component.html',
  styleUrls: ['./box-selector.component.scss']
})
export class BoxSelectorComponent implements OnInit {
    secondClass = true;
    firstClass = false;
 
  /**
   * The form group for days
   */
  public form: FormGroup;
  /**
   * The 7 days in a week
   */
  public days = [
      { id: 'monday', name: 'Mon' },
      { id: 'tuesday', name: 'Tue' },
      { id: 'wednesday', name: 'Wed' },
      { id: 'thursday', name: 'Thu' },
      { id: 'friday', name: 'Fri' },
      { id: 'saturday', name: 'Sat' },
      { id: 'sunday', name: 'Sun' }
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
   * The destroy flag
   */
  public destroyFlag$: Subject<boolean> = new Subject<boolean>();
  /**
   * Constructs the component
   * @param formBuilder 
   */
  constructor(private formBuilder: FormBuilder) { }
  /**
   * ng2 life-cycle hook
   */
  ngOnInit() {
      this._createCheckboxArray();
      this._subscibeFormChanges();
  }
  /**
   * Creates a new array with a form control for each day
   */
  private _createCheckboxArray(): void {
      let controls = this.days.map(day => new FormControl(this.defaultDays.indexOf(day.id) > -1 ? true : false));

      this.form = this.formBuilder.group({
          days: new FormArray(controls)
      });
      this.days.map(day => new FormControl(this.defaultDays.indexOf(day.id) > -1 ? true : false));
  }

  /**
   * Detects the form changes and emits the same to parent component
   */
  private _subscibeFormChanges(): void {
      this.form.valueChanges.pipe(takeUntil(this.destroyFlag$)).subscribe((value) => {
        let daysSelected = value.days.map((v, i) => v ? this.days[i].id : null).filter(v => v !== null);
        this.selectedDays.emit(daysSelected);
    });

  }
  /**
   * Destroys the component ng2 life-cycle hook
   */
  ngOnDestroy() {
      this.destroyFlag$.next(true);
      this.destroyFlag$.unsubscribe();
  }
  onClick1($event) {
    this.secondClass = !this.secondClass;
    this.firstClass = !this.firstClass;
  }
  
}
