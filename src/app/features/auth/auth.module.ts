import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormFieldModule} from "../form-field/form-field.module";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingModule} from "../loading/loading.module";


@NgModule({
    declarations: [
        LoginFormComponent
    ],
    exports: [
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        FormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        LoadingModule,
    ]
})
export class AuthModule {
}
