import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunbookComponent } from './runbook/runbook.component';
import { RunbookDetailsComponent } from './runbook/runbook-details/runbook-details.component';


const routes: Routes =  [
  { 
    path: 'create-runbook', 
    component: RunbookComponent },
  {
    path: 'task-hierarchy',
    component: RunbookDetailsComponent,
    data: { title: 'Product List' }
  },
  { path: '',
    redirectTo: '/create-runbook',
    pathMatch: 'full'
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
