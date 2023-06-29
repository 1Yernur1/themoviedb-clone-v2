import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TrailersComponent } from './components/trailers/trailers.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, TrendingComponent, TrailersComponent],
  imports: [CommonModule, HttpClientModule],
})
export class HomeModule {}
