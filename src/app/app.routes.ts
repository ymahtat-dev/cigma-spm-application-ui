import {Routes} from '@angular/router';
import {MainContainerComponent} from "./features/layout/main-container/main-container.component";
import {PAGES} from "./app.constants";

export const ROUTES: Routes = [
    {
        path: '',
        component: MainContainerComponent,
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
    }
];
