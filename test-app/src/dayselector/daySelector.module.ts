/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * Components
 */
import { DaySelectorComponent } from './daySelector.component';

@NgModule({
    imports: [ BrowserModule, 
        ReactiveFormsModule,
        MatCheckboxModule ],
    declarations : [ DaySelectorComponent ],
    exports : [ DaySelectorComponent],
    providers : [],
    entryComponents : []

})
export class DaySelectorModule {}

