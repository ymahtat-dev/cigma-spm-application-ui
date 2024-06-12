import {Pipe, PipeTransform} from '@angular/core';
import {MasterdataService} from "../../core/services/masterdata.service";

@Pipe({
    name: 'statusFlow'
})
export class StatusFlowPipe implements PipeTransform {

    constructor(
        private masterdataService: MasterdataService,
    ) {
    }

    async transform(value: string): Promise<string> {
        const statusLabel = await this.masterdataService.getStatusFlowLabelById(value as string);
        return statusLabel ?? value;
    }

}
