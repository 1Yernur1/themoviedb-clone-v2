import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TrailersComponent } from './components/trailers/trailers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    TrendingComponent,
    TrailersComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    YouTubePlayerModule,
    RouterModule
  ],
})
export class HomeModule {}
