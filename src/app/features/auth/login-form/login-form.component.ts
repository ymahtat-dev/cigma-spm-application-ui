import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserAuthRequestDto} from "../../../core/models/user-auth-request.dto";
import {AuthService} from "../../../core/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {LoadingSpinnerComponent} from "../../loading/loading-spinner/loading-spinner.component";
import {Router} from "@angular/router";
import {PAGES} from "../../../app.constants";
import {AuthenticatedUserService} from "../../../core/services/authenticated-user.service";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {

    private loading: boolean = false;
    private userAuthRequest: UserAuthRequestDto = {} as UserAuthRequestDto;
    private formGroup: FormGroup = new FormGroup({});

    constructor(
        private authService: AuthService,
        private authenticatedUserService: AuthenticatedUserService,
        private matDialog: MatDialog,
        private router: Router,
    ) {
    }


    get isLoading(): boolean {
        return false && this.loading;
    }

    get title(): string {
        return 'LOGIN FORM';
    }

    get userAuthRequestFormGroup(): FormGroup {
        return this.formGroup;
    }

    get formValid(): boolean {
        return this.formGroup.valid;
    }

    get usernameControl(): FormControl {
        return this.formGroup.get('username') as FormControl;
    }

    get passwordControl(): FormControl {
        return this.formGroup.get('password') as FormControl;
    }


    ngOnInit() {
        this.initForm();
    }


    public onClickSignInHandler(): void {
        this.recoverProjectDataFromReactiveForm();
        this.checkUserAuth();
    }


    private initForm(): void {
        this.formGroup.addControl('username', new FormControl(null, Validators.required));
        this.formGroup.addControl('password', new FormControl(null, Validators.required));
    }

    private recoverProjectDataFromReactiveForm(): void {
        this.userAuthRequest.username = this.formGroup.get('username')?.value ?? '';
        this.userAuthRequest.password = this.formGroup.get('password')?.value ?? '';
    }

    private checkUserAuth(): void {
        const loadingDialogRef = this.matDialog.open(
            LoadingSpinnerComponent,
            {
                width: 'auto',
                height: 'auto',
                disableClose: true,
            }
        );
        this.authService.login(this.userAuthRequest).subscribe(
            result => {
                console.log('response', result);
                this.authenticatedUserService.saveUserAuth(result);
                this.authenticatedUserService.saveUserDetails({
                    id: 1,
                    firstname: "AZIZ",
                    lastname: "MILOZOVIC",
                    username: "admin",
                    gender: "male",
                    birthdate: "1987-03-02",
                    email: "admin@cigma.ma",
                    pictureUrl: "https://www.pngmart.com/files/21/Admin-Profile-Transparent-PNG.png",
                    userType: "admin",
                    study: null
                });
                this.router.navigate([PAGES.HOME]);
            },
            error => {
                console.error('error', error);
                loadingDialogRef.close();
            },
            () => {
                console.log('complete');
                loadingDialogRef.close();
            }
        );
    }

}
