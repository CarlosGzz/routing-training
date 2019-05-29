import { MaterialModule } from './core/material/material.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavigationComponent } from './core/header-navigation/header-navigation.component';
import { SidenavListComponent } from './core/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent, HeaderNavigationComponent, SidenavListComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
