import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-textarea-field',
    templateUrl: './textarea-field.component.html',
    styleUrl: './textarea-field.component.scss'
})
export class TextareaFieldComponent implements OnInit, OnChanges {

    @Input() label: string = '';
    @Input() rfControl: FormControl = new FormControl();
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
