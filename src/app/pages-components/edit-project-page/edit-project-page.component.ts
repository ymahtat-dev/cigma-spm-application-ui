import {Component, Input, OnInit} from '@angular/core';
import {ProjectModule} from "../../features/project/project.module";

@Component({
    selector: 'app-edit-project-page',
    standalone: true,
    imports: [
        ProjectModule
    ],
    templateUrl: './edit-project-page.component.html',
    styleUrl: './edit-project-page.component.scss'
})
export class EditProjectPageComponent implements OnInit {

    @Input() projectId!: number;

    constructor() {
    }

    ngOnInit(): void {
    }

}
