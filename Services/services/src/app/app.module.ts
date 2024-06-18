import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee-service.service';
import { KeywordCountDirective } from './keyword-count.directive';
import { KeywordDisplayComponent } from './keyword-display/keyword-display.component';

@NgModule({
  declarations: [AppComponent, KeywordCountDirective, KeywordDisplayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
