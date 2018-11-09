import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
/**
 * rxjs imports
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-checkbox-selector',
  templateUrl: './checkbox-selector.component.html',
  styleUrls: ['./checkbox-selector.component.scss']
})
export class CheckboxSelectorComponent implements OnInit, OnDestroy {
  /**
   * The form group for days
   */
  public form: FormGroup;
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
   * The destroy flag
   */
  public destroyFlag$: Subject<boolean> = new Subject<boolean>();
  /**
   * Constructs the component
   * @param formBuilder FormBuilder variable
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
      const controls = this.days.map(day => new FormControl(this.defaultDays.indexOf(day.id) > -1 ? true : false));

      this.form = this.formBuilder.group({
          days: new FormArray(controls)
      });
  }

  /**
   * Detects the form changes and emits the same to parent component
   */
  private _subscibeFormChanges(): void {
      this.form.valueChanges.pipe(takeUntil(this.destroyFlag$)).subscribe((value) => {
          const daysSelected = value.days.map((v, i) => v ? this.days[i].id : null).filter(v => v !== null);
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

}


