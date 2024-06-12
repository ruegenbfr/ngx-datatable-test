import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { MyTable } from './my-table/my-table.component';
import { ScrollbarHelper } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    MyTable
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule
  ],
  providers: [ScrollbarHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
