import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { PredictedDataComponent } from './predicted-data/predicted-data.component';
import { TimeReportComponent } from './time-report/time-report.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'historical-data', pathMatch: 'full' },
  { path: 'historical-data', component: HistoricalDataComponent },
  { path: 'predicted-data', component: PredictedDataComponent },
  { path: 'time-report', component: TimeReportComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
