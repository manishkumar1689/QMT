import { Component, Input, ViewEncapsulation } from '@angular/core';

interface ITableColumn {
  id?: string;
  content: string;
}

interface ITableCell {
  id?: string;
  content: string;
}

@Component({
  selector: 'eds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class TableComponent {
  @Input() columns: ITableColumn[];
  @Input() data: ITableCell[];
  @Input() modes: string[];

  constructor() { }
}
