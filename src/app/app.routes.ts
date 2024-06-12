import {Routes} from '@angular/router';
import {MainContainerComponent} from "./features/layout/main-container/main-container.component";
import {PAGES} from "./app.constants";
import {authGuardFn} from "./core/guards/auth.guard";
import {adminGuardFn} from "./core/guards/admin.guard";

export const ROUTES: Routes = [
    {
        path: '',
        component: MainContainerComponent,
        canActivate: [authGuardFn],
        children: [
            {
                path: '',
                redirectTo: PAGES.HOME,
                pathMatch: 'full',
            },
            {
                path: PAGES.HOME,
                loadComponent: () => import('./pages-components/home-page/home-page.component').then(m => m.HomePageComponent),
            },
            {
                path: PAGES.ADMIN_WORKS,
                loadComponent: () => import('./pages-components/admin-works-page/admin-works-page.component').then(m => m.AdminWorksPageComponent),
                canActivate: [adminGuardFn],
            },
            {
                path: PAGES.ABOUT,
                loadComponent: () => import('./pages-components/about-page/about-page.component').then(m => m.AboutPageComponent),
            },
            {
                path: PAGES.PROJECT,
                loadComponent: () => import('./pages-components/manage-projects-page/manage-projects-page.component').then(m => m.ManageProjectsPageComponent),
            },
            {
                path: PAGES.PROJECT_CREATE,
                loadComponent: () => import('./pages-components/create-project-page/create-project-page.component').then(m => m.CreateProjectPageComponent),
            },
            {
                path: PAGES.PROJECT_EDIT,
                loadComponent: () => import('./pages-components/edit-project-page/edit-project-page.component').then(m => m.EditProjectPageComponent),
            }
        ]
    },
    {
        path: PAGES.LOGIN,
        loadComponent: () => import('./pages-components/login-page/login-page.component').then(m => m.LoginPageComponent),
    },
    {
        path: PAGES.FORBIDDEN_ERROR,
        loadComponent: () => import('./pages-components/forbidden-error-page/forbidden-error-page.component').then(m => m.ForbiddenErrorPageComponent),
    },
    {
        path: PAGES.NOT_FOUND_ERROR,
        loadComponent: () => import('./pages-components/not-found-error-page/not-found-error-page.component').then(m => m.NotFoundErrorPageComponent),
    },
    {
        path: '**',
        redirectTo: PAGES.NOT_FOUND_ERROR,
        pathMatch: 'full',
    }
];
