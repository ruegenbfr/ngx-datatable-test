import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firefox-issue';
  rows = [
    { name: 'Henry Gustaffson', location: 'Hogwarts' },
    { name: 'Alice Wildermore', location: 'Wunderland' },
    { name: 'Clarice Painter', location: 'Fantasia' },
    { name: 'Helmut Ochsenfrosch', location: 'Nirvana' }
  ];

  columns = [{ prop: 'name' }, { prop: 'location' }];

  ColumnMode = ColumnMode;
}
