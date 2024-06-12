import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrl: './date-field.component.scss'
})
export class DateFieldComponent implements OnInit, OnChanges {

    @Input() label: string = '';
    @Input() rfControl: FormControl = new FormControl();
    @Input() isRequired: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() isReadOnly: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
    }

}
