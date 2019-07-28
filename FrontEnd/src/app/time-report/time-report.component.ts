import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { TimeReportsService } from '../services/time-reports.service';
import { TimeReport } from '../classes/TimeReports';

@Component({
  selector: 'app-time-report',
  templateUrl: './time-report.component.html',
  styleUrls: ['./time-report.component.css']
})
export class TimeReportComponent {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.card_properties;
      }
      return this.card_properties;
    })
  );

  reports: any[];
  normales: any[];
  anormales: any[];
  encendido: any[];
  apagado: any[];
  reparacion: any[];

  c_normales: number;
  c_anormales: number;
  c_encendido: number;
  c_apagado: number;
  c_reparacion: number;

  date: Date;

  card_properties = [
    { title: 'Tiempo Iniciando Generadores',
      value: this.minutesToHourMinutes(0),
      percentage: '0%',
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo de Operación Normal', 
      value: this.minutesToHourMinutes(0),
      percentage: '0%',
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo de Operación Anormal', 
      value: this.minutesToHourMinutes(0),
      percentage: '0%',
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo Apagando Máquinas', 
      value: this.minutesToHourMinutes(0),
      percentage: '0%',
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo de Reparación', 
      value: this.minutesToHourMinutes(0),
      percentage: '0%',
      cols: 1, 
      rows: 1 },
  ];

  constructor(private breakpointObserver: BreakpointObserver,
              private timeReportsService: TimeReportsService) {

    this.c_normales = 0;
    this.c_anormales = 0;
    this.c_encendido = 0;
    this.c_apagado = 0;
    this.c_reparacion = 0;

    this.timeReportsService.getEstadosMaquinas().subscribe(
      data => { this.reports  = data as TimeReport[]},
      err => console.error(err),
      () => this.setUpReports()
    );
  }

  onDateChange() {
    this.reports = [];
    this.timeReportsService.getEstadosMaquinasAfterDate(this.date.toISOString()).subscribe(
      data => { this.reports  = data as TimeReport[]},
      err => console.error(err),
      () => this.setUpReports()
    );
  }

  minutesToHourMinutes(minutes) {
    var hours = Math.floor(minutes/60);
    var mins = minutes - hours * 60;
    return hours + " Horas " + mins + " Minutos";
  }

  setUpReports() {
    console.log(this.reports);
    this.c_normales = 0, this.c_anormales = 0, this.c_encendido = 0, this.c_apagado = 0, this.c_reparacion = 0;
    for (var i = 0; i < this.reports.length; i++) {
      switch(this.reports[i].estado) {
        case 'Normal': this.c_normales++; break;
        case 'Anormal': this.c_anormales++; break;
        case 'Encendido':this.c_encendido++; break;
        case 'Apagado': this.c_apagado++; break;
        case 'Reparacion':this.c_reparacion++; break;
      }
    }
    this.card_properties[0].value = this.minutesToHourMinutes(this.c_encendido);
    this.card_properties[1].value = this.minutesToHourMinutes(this.c_normales);
    this.card_properties[2].value = this.minutesToHourMinutes(this.c_anormales);
    this.card_properties[3].value = this.minutesToHourMinutes(this.c_apagado);
    this.card_properties[4].value = this.minutesToHourMinutes(this.c_reparacion);

    this.card_properties[0].percentage = Math.round(100 * this.c_encendido / this.reports.length) + '%';
    this.card_properties[1].percentage = Math.round(100 * this.c_normales / this.reports.length) + '%';
    this.card_properties[2].percentage = Math.round(100 * this.c_anormales / this.reports.length) + '%';
    this.card_properties[3].percentage = Math.round(100 * this.c_apagado / this.reports.length) + '%';
    this.card_properties[4].percentage = Math.round(100 * this.c_reparacion / this.reports.length) + '%';
  }
}
