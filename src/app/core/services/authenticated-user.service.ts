import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {UserAuthResponseDto} from "../models/user-auth-response.dto";
import {UserDetailsDto} from "../models/user-details.dto";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedUserService {

    private userAuthBehaviorSubject: BehaviorSubject<UserAuthResponseDto> = new BehaviorSubject<UserAuthResponseDto>({} as UserAuthResponseDto);
    private userAuthObservable = this.userAuthBehaviorSubject.asObservable();

    private userDetailsBehaviorSubject: BehaviorSubject<UserDetailsDto> = new BehaviorSubject<UserDetailsDto>({} as UserDetailsDto);
    private userDetailsObservable = this.userDetailsBehaviorSubject.asObservable();


    constructor(
        private authService: AuthService,
        private cookieService: CookieService,
    ) {
    }


    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // USER AUTH METHODS
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    public recoverUserAuthFromCookie(): void {
        const token = this.cookieService.get('token');
        if (token) {
            this.userAuthBehaviorSubject.next({
                message: 'User authenticated, recoved from cookie.',
                token
            } as UserAuthResponseDto);
            this.authService.getCurrentUserDetails().subscribe((userDetails: UserDetailsDto) => {
                this.userDetailsBehaviorSubject.next(userDetails);
            });
        }
    }

    public saveUserAuth(userAuthResponse: UserAuthResponseDto): void {
        this.cookieService.set('token', userAuthResponse.token);
        this.userAuthBehaviorSubject.next(userAuthResponse);
    }

    public clearUserAuth(): void {
        this.cookieService.delete('token');
        this.userAuthBehaviorSubject.next({} as UserAuthResponseDto);
    }

    public getUserAuth(): Observable<UserAuthResponseDto> {
        if (!this.userAuthBehaviorSubject.getValue().token) {
            this.recoverUserAuthFromCookie();
        }
        console.log('getUserAuth', this.userAuthBehaviorSubject.getValue());
        return this.userAuthObservable;
    }

    public get isAuthenticated(): boolean {
        return Boolean(this.userAuthBehaviorSubject.getValue().token);
    }

    public get token(): string {
        return this.userAuthBehaviorSubject.getValue().token;
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // USER AUTH METHODS
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public saveUserDetails(userDetails: UserDetailsDto): void {
        this.userDetailsBehaviorSubject.next(userDetails);
    }

    public clearUserDetails(): void {
        this.userDetailsBehaviorSubject.next({} as UserDetailsDto);
    }

    public getUserDetails(): Observable<UserDetailsDto> {
        if (!this.userAuthBehaviorSubject.getValue().token) {
            this.recoverUserAuthFromCookie();
        }
        if (!this.userDetailsBehaviorSubject.getValue().username) {
            this.authService.getCurrentUserDetails().subscribe((userDetails: UserDetailsDto) => {
                this.userDetailsBehaviorSubject.next(userDetails);
            });
        }
        return this.userDetailsObservable;
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}
