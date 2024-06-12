import {Injectable} from '@angular/core';
import {Project} from "../models/project.model";
import {API_CONTEXT_URI, WEB_SERVICE_URI} from "../../app.constants";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(
        private http: HttpClient,
    ) {
    }

    public getProjects(): Observable<Array<Project>> {
        const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.PROJECTS}`;
        return this.http.get(url).pipe(map((response: any) => response as Array<Project>));
    }

    public getProjectById(id: number): Observable<Project> {
        const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.PROJECTS}/${id}`;
        return this.http.get(url).pipe(map((response: any) => response as Project))
    }

    public createProject(project: Project): Observable<any> {
        const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.PROJECTS}`;
        return this.http.post(url, project);
    }

    public updateProject(project: Project): Observable<any> {
        if (project.id) {
            const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.PROJECTS}/${project.id}`;
            return this.http.put(url, project);
        } else {
            return of(null);
        }
    }

    public deleteProject(id: number): Observable<any> {
        const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.PROJECTS}/${id}`;
        return this.http.delete(url);
    }

}
