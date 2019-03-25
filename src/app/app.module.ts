import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UIJarModule } from 'ui-jar'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AtomicModule } from './modules/atomic/atomic.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

enableProdMode();
platformBrowserDynamic().bootstrapModule(UIJarModule);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
