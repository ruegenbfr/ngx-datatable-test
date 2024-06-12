import { Component, Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'my-table',
  template: `
  <div>
    <h3>
      Fluid Row Heights
      <small>
        <a
          href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/basic-auto.component.ts"
          target="_blank"
        >
          Source
        </a>
      </small>
    </h3>
    <ngx-datatable
      class="material"
      style="min-height: 200px;"
      [rows]="rows"
      [rowHeight]="20"
      [loadingIndicator]="loadingIndicator"
      [columns]="columns"
      [columnMode]="ColumnMode.force"
      [headerHeight]="50"
      [scrollbarV]="true"
      [scrollbarH]="true"
      [footerHeight]="50"
      rowHeight="auto"
      [reorderable]="reorderable"
    >
    </ngx-datatable>
  </div>
`,
  styles: [`h1 { font-family: Lato; }`]
})
export class MyTable  {
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company', sortable: false }];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
    });
  }

  fetch(cb: (data: any) => void) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response) as any);
    };

    req.send();
  }
}
