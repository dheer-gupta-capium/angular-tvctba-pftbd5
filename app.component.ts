import { Component, OnInit } from '@angular/core';
import { complexData2, column } from './data';
import { DataType } from './data-type';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public data;
  public columns = column;
  public complexArrData;
  public filterSettings: Object;
  public dataType = DataType;
  ngOnInit(): void {
    this.data = complexData2;
    this.columns = column;
    // this.complexArrData = complexData[0]['Names'];
    this.filterSettings = { type: 'Excel' };
  }
}
