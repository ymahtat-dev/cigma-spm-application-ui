import {Injectable} from '@angular/core';
import {AuthenticatedUserService} from "./authenticated-user.service";
import {Router} from "@angular/router";
import {PAGES} from "../../app.constants";
import {MasterdataService} from "./masterdata.service";

@Injectable({
    providedIn: 'root'
})
export class AppInitializerService {

    constructor(
        private masterdataService: MasterdataService,
        private authenticatedUserService: AuthenticatedUserService,
        private router: Router,
    ) {
    }


    public async initializeApp(): Promise<boolean> {
        await this.masterdataService.recoverMasterdatas();
        this.authenticatedUserService.recoverUserAuthFromCookie();
        const hasToken = Boolean(this.authenticatedUserService.token);
        if (!hasToken) {
            this.router.navigate([PAGES.LOGIN]);
        }
        return true;
    }

}
