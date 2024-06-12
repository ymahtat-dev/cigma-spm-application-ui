import {Component} from '@angular/core';
import {AuthModule} from "../../features/auth/auth.module";

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [
        AuthModule
    ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
