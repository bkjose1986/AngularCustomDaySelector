/**
 * Angular imports
 */
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
/**
 * rxjs imports
 */
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * This component is a day selector widget
 */
@Component({
    templateUrl: './daySelector.component.html',
    styleUrls: ['./daySelector.component.scss'],
    // tslint:disable-next-line:component-selector
    selector: 'day-selector'
})
export class DaySelectorComponent implements OnInit {
    @Input() public selectionType: Array<string>;
    /**
     * The already selected days as an array
     */
    @Input() public defaultDays: Array<string>;
    /**
     * The event emitter to emit the selected days
     */
    @Output() selectedDays: EventEmitter<string> = new EventEmitter();
    /**
     * The already selected days to pass to child components
     */
    public selectedDefaultDays: Array<string>;
    /**
     * Constructs the component
     */
    constructor( ) { }
    /**
     * ng2 life-cycle hook
     */ 
    ngOnInit() {
        this.selectedDefaultDays = this.defaultDays;
    }
    /**
     * to pass selected days to parent component
     * @param daysSelected 
     */
    selectionChangedHandler(daysSelected: string) {  
        this.selectedDays.emit(daysSelected);
      }

}
