import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticatedUserService} from "../../../core/services/authenticated-user.service";

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit {

    @Output() onToggleMenuOutput: EventEmitter<void> = new EventEmitter<void>();

    private currentUsername?: string;


    constructor(
        private authenticatedUserService: AuthenticatedUserService
    ) {
    }


    get username(): string {
        return this.currentUsername || '';

    }


    ngOnInit(): void {
        this.authenticatedUserService.getUserDetails().subscribe((userDetails) => {
            this.currentUsername = userDetails.username;
        });
    }

    public onClickMenuBtnHandler() {
        this.onToggleMenuOutput.emit();
    }

}
