import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProjectDto} from "../../../core/models/project.dto";
import {ProjectService} from "../../../core/services/project.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-project-datagrid',
    templateUrl: './project-datagrid.component.html',
    styleUrl: './project-datagrid.component.scss'
})
export class ProjectDatagridComponent implements OnInit {

    readonly DISPLAYED_COLUMNS: string[] = ['id', 'name', 'description', 'type', 'status', 'startDate', 'provisionalEndDate', 'endDate', 'actions'];

    private loading = false;
    private dataSource = new MatTableDataSource<ProjectDto>([]);

    constructor(
        private projectService: ProjectService,
        private router: Router,
    ) {
    }

    get isLoading(): boolean {
        return this.loading;
    }

    get projectsDataSource(): MatTableDataSource<ProjectDto> {
        return this.dataSource;
    }

    ngOnInit(): void {
        this.loadProjects();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    public editProject(project: ProjectDto) {
        this.router.navigate(['project', project.id]);
    }

    private loadProjects(): void {
        this.loading = true;
        this.projectService.getProjects().subscribe((projects: Array<ProjectDto>) => {
            this.dataSource.data = projects;
            this.loading = false;
        });
    }

}
