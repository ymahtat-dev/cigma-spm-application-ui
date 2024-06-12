import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutModule} from "./features/layout/layout.module";
import {CoreModule} from "./core/core.module";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CoreModule,
        LayoutModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'atelier2-scolar-projects-management-v2-ui';
}
