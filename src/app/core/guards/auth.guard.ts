import {CanActivateFn, Router} from '@angular/router';
import {AuthenticatedUserService} from "../services/authenticated-user.service";
import {inject} from "@angular/core";
import {PAGES} from "../../app.constants";

export const authGuardFn: CanActivateFn = (route, state) => {
    const authenticatedUserService: AuthenticatedUserService = inject(AuthenticatedUserService);
    const router: Router = inject(Router);
    const isAuthenticated = authenticatedUserService.isAuthenticated;
    console.log('authGuardFn', isAuthenticated);
    if (!isAuthenticated) {
        console.log('authGuardFn', 'redirecting to login');
        router.navigate([PAGES.LOGIN]);
    }
    return isAuthenticated;
};
