import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { PredictedDataComponent } from './predicted-data/predicted-data.component';
import { TimeDataComponent } from './time-data/time-data.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'historical-data', pathMatch: 'full' },
  { path: 'historical-data', component: HistoricalDataComponent },
  { path: 'predicted-data', component: PredictedDataComponent },
  { path: 'time-data', component: TimeDataComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
