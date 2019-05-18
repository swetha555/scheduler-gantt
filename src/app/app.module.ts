import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunbookComponent } from './runbook/runbook.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RunbookListComponent } from './runbook/runbook-list/runbook-list.component';
import { RunbookDetailsComponent } from './runbook/runbook-details/runbook-details.component';
import { GanttComponent } from './gantt/gantt.component';

@NgModule({
  declarations: [
    AppComponent,
    RunbookComponent,
    NavBarTopComponent,
    MainHeaderComponent,
    RunbookListComponent,
    RunbookDetailsComponent,
    GanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
