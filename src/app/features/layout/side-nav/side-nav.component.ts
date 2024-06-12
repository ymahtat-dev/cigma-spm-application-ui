import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {PAGES} from "../../../app.constants";

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {


    constructor(
        private router: Router,
    ) {

    }

    onClickNavigateToHome() {
        this.router.navigate([PAGES.HOME]);
    }

    onClickNavigateManageProject() {
        this.router.navigate([PAGES.PROJECT]);
    }

    onClickNavigateCreateProject() {
        this.router.navigate([PAGES.PROJECT_CREATE]);
    }

    onClickNavigateAbout() {
        this.router.navigate([PAGES.ABOUT]);
    }

}
