import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDy0ytzPGCePM_5d6oPOLCqXDFO56lrGkM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
