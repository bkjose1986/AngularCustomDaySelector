/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

/**
 * Components
 */
import { DaySelectorComponent } from './daySelector.component';

@NgModule({
    imports: [ BrowserModule, 
        ReactiveFormsModule,
        MatButtonModule ],
    declarations : [ DaySelectorComponent ],
    exports : [ DaySelectorComponent],
    providers : [],
    entryComponents : []

})
export class DaySelectorModule {}

