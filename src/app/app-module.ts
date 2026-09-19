import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
//import { NgOptimizedImage } from '../../node_modules/@angular/common/types/common';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, HeroesList],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage,FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
