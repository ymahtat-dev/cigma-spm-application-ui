import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {catchError, mergeMap, Observable} from "rxjs";
import {inject} from "@angular/core";
import {AuthenticatedUserService} from "../services/authenticated-user.service";

export const requestHttpInterceptorFn: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const authenticatedUserService = inject(AuthenticatedUserService);
    const token = authenticatedUserService.token;
    const cloned = req.clone({
        setHeaders: {
            authorization: `Bearer ${token}`,
        },
    });
    return next(cloned);
};
