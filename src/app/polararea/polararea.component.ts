import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-polararea',
  templateUrl: './polararea.component.html'
})
export class PolarareaComponent implements OnInit {

  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

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
