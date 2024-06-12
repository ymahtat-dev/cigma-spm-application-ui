import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContainerComponent} from './main-container/main-container.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        MainContainerComponent,
        TopNavComponent,
        SideNavComponent
    ],
    exports: [
        MainContainerComponent,
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
    ]
})
export class LayoutModule {
}

