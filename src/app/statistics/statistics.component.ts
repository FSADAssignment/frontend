import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DoughnutController } from 'chart.js';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: 'Series A' },
      { data: [ 50, 150, 120 ], label: 'Series B' },
      { data: [ 250, 130, 70 ], label: 'Series C' }
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() {
  }

}
