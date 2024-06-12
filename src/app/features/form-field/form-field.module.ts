import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextFieldComponent} from './text-field/text-field.component';
import {DropdownFieldComponent} from './dropdown-field/dropdown-field.component';
import {TextareaFieldComponent} from './textarea-field/textarea-field.component';
import {DateFieldComponent} from './date-field/date-field.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from './form/form.component';


@NgModule({
    declarations: [
        TextFieldComponent,
        DropdownFieldComponent,
        TextareaFieldComponent,
        DateFieldComponent,
        FormComponent
    ],
    exports: [
        FormComponent,
        TextFieldComponent,
        TextareaFieldComponent,
        DropdownFieldComponent,
        DateFieldComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatIconModule,
        MatDatepickerModule,
        ReactiveFormsModule,
    ]
})
export class FormFieldModule {
}
