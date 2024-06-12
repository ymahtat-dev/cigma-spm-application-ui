import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {PAGES} from "../../app.constants";
import {map} from "rxjs";
import {AuthService} from "../services/auth.service";

export const adminGuardFn: CanActivateFn = (route, state) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    return authService.getCurrentUserDetails().pipe(map(userDetails => {
        console.table(userDetails);
        const isAdmin = (userDetails.userType === 'admin');
        console.log('adminGuardFn', isAdmin);
        if (!isAdmin) {
            console.log('adminGuardFn', 'redirecting to forbidden');
            router.navigate([PAGES.FORBIDDEN_ERROR]);
        }
        return isAdmin;
    }));
};
