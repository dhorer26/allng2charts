import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  // click event
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log("click event" + event, active);
  }

  // hover event
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log("hover event" + event, active);
  }

  ngOnInit() {
  }

}
