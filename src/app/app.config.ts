import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {ROUTES} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {requestHttpInterceptorFn} from "./core/interceptors/request-http.interceptor";
import {responseHttpInterceptorFn} from "./core/interceptors/response-http.interceptor";
import {AppInitializerService} from "./core/services/app-initializer.service";


function initializeAppFn(appInitializerService: AppInitializerService): () => Promise<boolean> {
    return () => appInitializerService.initializeApp();
}


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(ROUTES, withComponentInputBinding()),
        provideHttpClient(withInterceptors([
            requestHttpInterceptorFn,
            responseHttpInterceptorFn,
        ])),
        provideAnimationsAsync(),
        provideNativeDateAdapter(),
        {provide: MAT_DATE_LOCALE, useValue: 'fr'},
        {
            provide: APP_INITIALIZER,
            useFactory: initializeAppFn,
            deps: [AppInitializerService],
            multi: true
        },
    ]
};
