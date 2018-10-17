/**
 * Angular imports
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
    templateUrl : './daySelector.component.html',
    styleUrls : ['./daySelector.component.css'],
    // tslint:disable-next-line:component-selector
    selector : 'day-selector'
})
export class DaySelectorComponent {
    form: FormGroup;
    days = [
        { id: 'monday', name: 'Monday' },
        { id: 'tuesday', name: 'Tuesday' },
        { id: 'wednesday', name: 'Wednesday' },
        { id: 'thursday', name: 'Thursday' },
        { id: 'friday', name: 'Friday' },
        { id: 'saturday', name: 'Saturday' },
        { id: 'sunday', name: 'Sunday' }
    ];
    @Output() selectedDays: EventEmitter<number> =   new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
        // Create a new array with a form control for each order
        const controls = this.days.map(c => new FormControl(false));
        this.form = this.formBuilder.group({
            days: new FormArray(controls)
        });
    }

    selectionChange() {
        const daysSelected = this.form.value.days
            .map((v, i) => v ? this.days[i].id : null)
            .filter(v => v !== null);
        this.selectedDays.emit(daysSelected);
    }
    
}
