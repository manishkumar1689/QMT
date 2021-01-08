import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {CustomerService} from './customer-service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import {DialogModule} from '../../../../projects/eds/angular/src/lib/components/dialog/dialog.module';
import {TabsModule} from '../../../../projects/eds/angular/src/lib/components/tabs/tabs.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../common.module'

const routes: Routes = [
    { path: '', component: CustomerComponent }
];

@NgModule({
    imports:
        [
            CommonModule,
            FormsModule,
            BrowserModule, 
            ReactiveFormsModule,
            HttpClientModule,
            AgGridModule,
            DialogModule,
            TabsModule,
            SharedModule
        ],
    declarations:
        [
            CustomerComponent,
           
        ],
    exports:
        [
            CustomerComponent,
        ],
    providers:
        [
            CustomerService,
            HttpClient,
        ]
})

export class CustomerModule { }