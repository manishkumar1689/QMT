﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TestGridComponent } from './common/ag-grid/generic.grid';
import { TotalRecordsStatusPanelComponent } from './common/ag-grid/total.records.status.panel.component';
import { ClearFilterStatusPanelComponent } from './common/ag-grid/clear.filter.status.panel.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      
        AgGridModule.withComponents([
            TotalRecordsStatusPanelComponent,
            ClearFilterStatusPanelComponent,
        ]),
    ],
    declarations: [
        TestGridComponent,
        TotalRecordsStatusPanelComponent,
        ClearFilterStatusPanelComponent,
    ],
    exports: [
        TestGridComponent,
        TotalRecordsStatusPanelComponent,
        ClearFilterStatusPanelComponent,
    ],
    providers: []
})

export class SharedModule { }
