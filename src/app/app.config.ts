import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {ROUTES} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {requestHttpInterceptorFn} from "./core/interceptors/request-http.interceptor";


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(ROUTES, withComponentInputBinding()),
        provideHttpClient(withInterceptors([
            requestHttpInterceptorFn,
        ])),
        provideAnimationsAsync(),
        provideNativeDateAdapter(),
        {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    ]
};
