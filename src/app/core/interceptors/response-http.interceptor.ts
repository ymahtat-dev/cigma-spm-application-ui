import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {PAGES} from "../../app.constants";

export const responseHttpInterceptorFn: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn,
) => {
    const router = inject(Router);
    return next(req).pipe(
        catchError((error) => {
            console.error('Error on ResponseHttpInterceptor', error);
            switch (error.status) {
                case 401:
                    // Handle 401 Unauthorized
                    console.error('Unauthorized access - 401');
                    router.navigate([PAGES.LOGIN]);
                    break;
                case 403:
                    // Handle 403 Forbidden
                    console.error('Forbidden access - 403');
                    router.navigate([PAGES.FORBIDDEN_ERROR]);
                    break;
                case 404:
                    // Handle 404 Not Found
                    console.error('Resource not found - 404');
                    router.navigate([PAGES.NOT_FOUND_ERROR]);
                    break;
                default:
                    // Handle other errors
                    console.error('An unknown error occurred');
                    break;
            }
            return throwError(() => new Error(error.message));
        })
    );
};
