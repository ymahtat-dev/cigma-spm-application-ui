import {Component} from '@angular/core';
import {ProjectModule} from "../../features/project/project.module";

@Component({
    selector: 'app-create-project-page',
    standalone: true,
    imports: [
        ProjectModule
    ],
    templateUrl: './create-project-page.component.html',
    styleUrl: './create-project-page.component.scss'
})
export class CreateProjectPageComponent {

}
