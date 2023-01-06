import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

import { LinkItemComponent } from './components/navbar/link-item/link-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/video/video.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NavbarComponent,
    LinkItemComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
