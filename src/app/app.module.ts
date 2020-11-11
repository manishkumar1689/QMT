import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PlaygroundComponent } from './pages/playground/playground.component';
import { GroupOnBoardingComponent } from './pages/Grouping/group-on-boarding/group-on-boarding/group-on-boarding.component';
import { ProjectOnBoardingComponent } from './pages/Grouping/project-on-boarding/project-on-boarding/project-on-boarding.component';

import {
  AccordionModule,
  AppBarModule,
  ButtonModule,
  CheckboxModule,
  DateModule,
  IconModule,
  ProgressBarModule,
  SettingsModule,
  SwitchModule,
  SyntaxHighlightModule,
  SystemBarModule,
  TooltipModule,
  TreeModule,
  InputModule,
  DialogModule,
  GaugeModule,
  DropdownModule,
  RadioModule,
  TabsModule,
  TableModule,
  TileModule,
  ThemeService
} from '../../projects/eds/angular/src/public_api';
import { AgGridModule } from 'ag-grid-angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BtnCellRenderer } from './pages/shared/btn-cell-renderer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProjectComponent } from './pages/Grouping/project-on-boarding/form/create-project/create-project.component';
import { EditProjectComponent } from './pages/Grouping/project-on-boarding/form/edit-project/edit-project.component';
import { SettingsComponent } from './pages/Grouping/project-on-boarding/form/settings/settings.component';
import { CreateGroupComponent } from './pages/Grouping/group-on-boarding/form/create-group/create-group.component';
import { EditGroupComponent } from './pages/Grouping/group-on-boarding/form/edit-group/edit-group.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BtnCellRenderer ,
    PlaygroundComponent,
    GroupOnBoardingComponent,
    ProjectOnBoardingComponent,
    CreateProjectComponent,
    EditProjectComponent,
    SettingsComponent,
    CreateGroupComponent,
    EditGroupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AccordionModule,
    AppBarModule,
    ButtonModule,
    CheckboxModule,
    DateModule,
    IconModule,
    ProgressBarModule,
    SettingsModule,
    SwitchModule,
    SyntaxHighlightModule,
    SystemBarModule,
    TooltipModule,
    TreeModule,
    InputModule,
    DialogModule,
    GaugeModule,
    DropdownModule,
    RadioModule,
    TabsModule,
    TableModule,
    TileModule,
    HttpClientModule,
    AgGridModule.withComponents([BtnCellRenderer])
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
