import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-dropdown-field',
    templateUrl: './dropdown-field.component.html',
    styleUrl: './dropdown-field.component.scss'
})
export class DropdownFieldComponent implements OnInit, OnChanges {

    @Input() label: string = '';
    @Input() options: Array<{ label: string, value: string }> = [];
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
