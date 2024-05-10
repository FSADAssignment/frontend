import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent implements AfterViewInit {
  @ViewChild('doughnutChartCanvas') doughnutChartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() title: string = '';
  doughnutChart: any;

  constructor() {}

  ngAfterViewInit() {
    this.initDoughnutChart();
  }

  initDoughnutChart() {
    const ctx = this.doughnutChartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Canvas context is null.');
      return;
    }

    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Left'],
        datasets: [{
          data: [60, 40], // 60% completed, 40% left
          backgroundColor: ['#23a64c', '#acadac'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false // Hide legend
          }
        },
        layout: {
          padding: {
            bottom: 20 // Increase bottom padding for title
          }
        }
      }
    });
  }
}
