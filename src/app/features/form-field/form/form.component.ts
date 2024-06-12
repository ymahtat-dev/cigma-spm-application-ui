import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {

    @Input() formGroup!: FormGroup;

}
