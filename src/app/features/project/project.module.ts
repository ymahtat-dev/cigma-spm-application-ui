import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectFormComponent} from './project-form/project-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormFieldModule} from "../form-field/form-field.module";
import {ProjectDatagridComponent} from './project-datagrid/project-datagrid.component';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        ProjectDatagridComponent,
        ProjectFormComponent,
    ],
    exports: [
        ProjectDatagridComponent,
        ProjectFormComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatCardModule,
        MatButtonModule,
        FormFieldModule,
        MatInputModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatIconModule,
    ]
})
export class ProjectModule {
}
