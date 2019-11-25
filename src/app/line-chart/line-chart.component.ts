import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [45, 89, 100, 91, 56, 55, 40], label: 'Series B' },
    // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { /*annotation: any*/ }) = {
    responsive: true,
    // scales: {
    //   // We use this empty structure as a placeholder for dynamic theming.
    //   xAxes: [{}],
    //   yAxes: [
    //     {
    //       id: 'y-axis-0',
    //       position: 'left',
    //     },
    //     {
    //       id: 'y-axis-1',
    //       position: 'right',
    //       gridLines: {
    //         color: 'rgba(255,0,0,0.3)',
    //       },
    //       ticks: {
    //         fontColor: 'red',
    //       }
    //     }
    //   ]
    // },
    // annotation: {
    //   annotations: [
    //     {
    //       type: 'line',
    //       mode: 'vertical',
    //       scaleID: 'x-axis-0',
    //       value: 'March',
    //       borderColor: 'orange',
    //       borderWidth: 2,
    //       label: {
    //         enabled: true,
    //         fontColor: 'orange',
    //         content: 'LineAnno'
    //       }
    //     },
    //   ],
    // },
  };
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

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
