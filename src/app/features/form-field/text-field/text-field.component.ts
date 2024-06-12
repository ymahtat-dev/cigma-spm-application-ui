import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrl: './text-field.component.scss'
})
export class TextFieldComponent implements OnInit, OnChanges {

    @Input() label: string = '';
    @Input() rfControl: FormControl = new FormControl();
    @Input() isSecret: boolean = false;
    @Input() isRequired: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() isReadOnly: boolean = false;
    @Input() placeholder: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
    }

}
