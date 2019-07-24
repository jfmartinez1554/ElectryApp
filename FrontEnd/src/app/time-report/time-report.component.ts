import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-time-report',
  templateUrl: './time-report.component.html',
  styleUrls: ['./time-report.component.css']
})
export class TimeReportComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.card_properties;
      }

      return this.card_properties;
    })
  );

  card_properties = [
    { title: 'Tiempo Iniciando Generadores',
      value: this.minutesToHourMinutes(190),
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo de Operación Normal', 
      value: this.minutesToHourMinutes(190),
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo de Operación Anormal', 
      value: this.minutesToHourMinutes(190),
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo Apagando Máquinas', 
      value: this.minutesToHourMinutes(190),
      cols: 1, 
      rows: 1 },
    { title: 'Tiempo de Reparación', 
      value: this.minutesToHourMinutes(190),
      cols: 1, 
      rows: 1 },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  minutesToHourMinutes(minutes) {
    var hours = Math.floor(minutes/60);
    var mins = minutes - hours * 60;
    return hours + " Horas " + mins + " Minutos";
  }
}
