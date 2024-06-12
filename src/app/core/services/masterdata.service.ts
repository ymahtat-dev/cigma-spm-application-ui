import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_CONTEXT_URI, WEB_SERVICE_URI} from "../../app.constants";
import {map, Observable} from "rxjs";
import {MasterdataEntryDto} from "../models/masterdata-entry.dto";

@Injectable({
    providedIn: 'root'
})
export class MasterdataService {

    private statusFlowsEntries: Array<MasterdataEntryDto> = [];

    constructor(
        private http: HttpClient,
    ) {
    }

    public async recoverMasterdatas(): Promise<void> {
        await this.getStatusFlows();
    }

    public async getStatusFlowLabelById(entryId: string): Promise<string | null | undefined> {
        const statusFlowEntry = await this.getStatusFlowEntryById(entryId);
        return statusFlowEntry?.label ?? undefined;
    }

    public async getStatusFlowEntryById(entryId: string): Promise<MasterdataEntryDto | null | undefined> {
        const statusFlowsEntries = await this.getStatusFlows();
        return statusFlowsEntries.find((entry: MasterdataEntryDto) => entry.id === entryId);
    }

    public getStatusFlows(): Promise<Array<MasterdataEntryDto>> {
        return new Promise<Array<MasterdataEntryDto>>((resolve, reject) => {
            if (this.statusFlowsEntries.length > 0) {
                resolve(this.statusFlowsEntries);
            } else {
                this.getStatusFlowsFromWebBackOffice().subscribe(
                    (statusFlowsEntries: Array<MasterdataEntryDto>) => {
                        this.statusFlowsEntries = statusFlowsEntries;
                        resolve(statusFlowsEntries);
                    },
                    reject
                );
            }
        });
    }

    private getStatusFlowsFromWebBackOffice(): Observable<Array<MasterdataEntryDto>> {
        const url = `${API_CONTEXT_URI}/${WEB_SERVICE_URI.GET_MASTERDATA_STATUS_FLOWS}`;
        return this.http.get(url).pipe(map((response: any) => response as Array<MasterdataEntryDto>));
    }

}
