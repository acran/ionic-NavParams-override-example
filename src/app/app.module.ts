import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent, NavComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  entryComponents: [NavComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
