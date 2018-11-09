/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatListModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

/**
 * Components
 */
import { DaySelectorComponent } from './daySelector.component';
import { CheckboxSelectorComponent } from './checkbox-selector/checkbox-selector.component';
import { BoxSelectorComponent } from './box-selector/box-selector.component';
import { ListSelectorComponent } from './list-selector/list-selector.component';

@NgModule({
    imports: [ BrowserModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatListModule,
        MatButtonModule,
        FormsModule],
    declarations : [ DaySelectorComponent, CheckboxSelectorComponent, BoxSelectorComponent, ListSelectorComponent ],
    exports : [ DaySelectorComponent],
    providers : [],
    entryComponents : []

})
export class DaySelectorModule {}

