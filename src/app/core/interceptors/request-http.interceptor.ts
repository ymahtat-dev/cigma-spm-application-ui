import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {catchError, mergeMap, Observable} from "rxjs";
import {inject} from "@angular/core";
import {AuthenticatedUserService} from "../services/authenticated-user.service";

export const requestHttpInterceptorFn: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const authenticatedUserService = inject(AuthenticatedUserService);
    return authenticatedUserService.getUserAuth().pipe(mergeMap((userAuth) => {
        const token = userAuth.token ?? '';
        const cloned = req.clone({
            setHeaders: {
                authorization: `Bearer ${token}`,
            },
        });
        return next(cloned);
    })).pipe(catchError((error) => {
        console.error('Error on RequestHttpInterceptor', error);
        return next(req);
    }));
};
