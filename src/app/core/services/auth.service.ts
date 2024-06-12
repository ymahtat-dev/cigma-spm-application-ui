import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserAuthRequestDto} from "../models/user-auth-request.dto";
import {map, Observable} from "rxjs";
import {API_CONTEXT_URI, WEB_SERVICE_URI} from "../../app.constants";
import {UserAuthResponseDto} from "../models/user-auth-response.dto";
import {UserDetailsDto} from "../models/user-details.dto";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
    ) {
    }


    public login(userAuthRequest: UserAuthRequestDto): Observable<UserAuthResponseDto> {
        const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.LOGIN}`;
        return this.http.post(url, userAuthRequest).pipe(map((response: any) => response as UserAuthResponseDto));
    }

    public getCurrentUserDetails(): Observable<UserDetailsDto> {
        const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.GET_PROFILE}`;
        return this.http.get(url).pipe(map((response: any) => response as UserDetailsDto));
    }

}
