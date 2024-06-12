import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusFlowPipe} from "./pipes/status-flow.pipe";
import {HighlightDirective} from "./directives/highlight.directive";


@NgModule({
    declarations: [
        StatusFlowPipe,
        HighlightDirective,
    ],
    exports: [
        StatusFlowPipe,
        HighlightDirective,
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
