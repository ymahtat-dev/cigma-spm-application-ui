import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PAGES} from "../../../app.constants";
import {ProjectDto} from "../../../core/models/project.dto";
import {DateTimeUtility} from "../../../core/utilities/date-time.utility";
import {Router} from "@angular/router";
import {ProjectService} from "../../../core/services/project.service";
import {MasterdataService} from "../../../core/services/masterdata.service";

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {


    @Input() title: string = 'PROJECT FORM';
    @Input() formType: 'create' | 'edit' = 'create';
    @Input() projectId?: number;


    private loading: boolean = false;
    private statusFlows: Array<{ label: string, value: string }> = [];
    private project: ProjectDto = {} as ProjectDto;
    private formGroup: FormGroup = new FormGroup({});


    constructor(
        private masterdataService: MasterdataService,
        private projectService: ProjectService,
        private router: Router,
    ) {
    }


    get isLoading(): boolean {
        return this.loading;
    }

    get projectStatusOptions(): Array<{ label: string, value: string }> {
        return this.statusFlows ?? [];
    }

    get isCreateForm(): boolean {
        return 'create' === this.formType;
    }

    get isEditForm(): boolean {
        return 'edit' === this.formType;
    }

    get projectFormGroup(): FormGroup {
        return this.formGroup;
    }

    get formValid(): boolean {
        return this.formGroup.valid;
    }

    get idControl(): FormControl {
        return this.formGroup.get('id') as FormControl;
    }

    get nameControl(): FormControl {
        return this.formGroup.get('name') as FormControl;
    }

    get descriptionControl(): FormControl {
        return this.formGroup.get('description') as FormControl;
    }

    get typeControl(): FormControl {
        return this.formGroup.get('type') as FormControl;
    }

    get statusControl(): FormControl {
        return this.formGroup.get('status') as FormControl;
    }

    get startDateControl(): FormControl {
        return this.formGroup.get('startDate') as FormControl;
    }

    get provisionalEndDateControl(): FormControl {
        return this.formGroup.get('provisionalEndDate') as FormControl;
    }

    get endDateControl(): FormControl {
        return this.formGroup.get('endDate') as FormControl;
    }

    ngOnInit(): void {
        this.initDataAndForm();
    }

    public onClickValidateHandler(): void {
        this.recoverProjectDataFromReactiveForm();
        if (this.isEditForm) {
            this.updateProject();
        } else {
            this.createProject();
        }
    }

    public onClickCancelHandler(): void {
        this.router.navigate([PAGES.HOME]);
    }

    private async initDataAndForm(): Promise<void> {
        this.loading = true;
        this.statusFlows = (await this.masterdataService.getStatusFlows()).map((statusFlow) => {
            return {label: statusFlow.label, value: statusFlow.id};
        });
        await this.recoverProjectDataFromService();
        this.initForm();
        this.loading = false;
    }

    private async recoverProjectDataFromService(): Promise<void> {
        if (this.isEditForm && this.projectId) {
            try {
                const result = await this.projectService.getProjectById(this.projectId).toPromise();
                this.project = result!;
            } catch (e) {
                console.error(e);
            }
        }
    }

    private initForm(): void {
        this.formGroup.addControl('name', new FormControl(this.project.name, Validators.required));
        this.formGroup.addControl('description', new FormControl(this.project.description, Validators.required));
        this.formGroup.addControl('type', new FormControl(this.project.type, Validators.required));
        this.formGroup.addControl('status', new FormControl(this.project.status, Validators.required));
        this.formGroup.addControl('startDate', new FormControl(this.project.startDate, Validators.required));
        this.formGroup.addControl('provisionalEndDate', new FormControl(this.project.provisionalEndDate, Validators.required));
        if (this.isEditForm) {
            this.formGroup.addControl('id', new FormControl(this.project.id));
            this.formGroup.addControl('endDate', new FormControl(this.project.endDate));
        }
        this.linkFormGroupOnValuesChanges();
    }


    private linkFormGroupOnValuesChanges(): void {
        this.formGroup.valueChanges.subscribe((values) => {
            const startDate = this.startDateControl?.value ?? '';
            const provisionalEndDate = this.provisionalEndDateControl?.value ?? '';
            const isValidDates = DateTimeUtility.isEndDateAfterStartDate(startDate, provisionalEndDate);
            if (!isValidDates) {
                this.provisionalEndDateControl?.setErrors({error: true});
            }
        });
    }


    private recoverProjectDataFromReactiveForm(): void {
        this.project.name = this.formGroup.get('name')?.value ?? '';
        this.project.description = this.formGroup.get('description')?.value ?? '';
        this.project.type = this.formGroup.get('type')?.value ?? '';
        this.project.status = this.formGroup.get('status')?.value ?? '';
        this.project.startDate = this.formGroup.get('startDate')?.value ?? '';
        this.project.provisionalEndDate = this.formGroup.get('provisionalEndDate')?.value ?? '';
    }

    private createProject(): void {
        this.projectService.createProject(this.project).subscribe(
            (response) => {
                console.log('Project created', response);
                this.router.navigate([PAGES.PROJECT]);
            },
            (error) => {
                console.error('Error while creating project', error);
            }
        );
    }

    private updateProject(): void {
        this.projectService.updateProject(this.project).subscribe(
            (response) => {
                console.log('Project updated', response);
                this.router.navigate([PAGES.PROJECT]);
            },
            (error) => {
                console.error('Error while updating project', error);
            }
        );
    }


}
