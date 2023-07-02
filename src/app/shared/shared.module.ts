import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { MovieTrailerVideoComponent } from './components/movie-trailer-video/movie-trailer-video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, MovieTrailerVideoComponent],
  imports: [CommonModule, FontAwesomeModule, YouTubePlayerModule, RouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
