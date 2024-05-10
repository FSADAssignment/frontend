import { Component } from '@angular/core';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [DoughnutChartComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {

}
