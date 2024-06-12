import {Component} from '@angular/core';
import {ProjectModule} from "../../features/project/project.module";

@Component({
    selector: 'app-manage-projects-page',
    standalone: true,
    imports: [
        ProjectModule
    ],
    templateUrl: './manage-projects-page.component.html',
    styleUrl: './manage-projects-page.component.scss'
})
export class ManageProjectsPageComponent {

}
