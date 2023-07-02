import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TrailerService } from '../../service/trailer.service';
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class TrailersComponent implements OnInit {
  upcomingMovies: any[] = [];
  backgroundImage: string = '';

  faPlay = faPlay;

  constructor(private trailerService: TrailerService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTrailers();
  }

  getAllTrailers(): void {
    this.trailerService.upcomingMovies.subscribe((data: any) => {
      this.upcomingMovies = data.results;
      this.changeBackground(this.upcomingMovies[0].backdrop_path);
    });
  }

  changeBackground(imagePath: string): void {
    this.backgroundImage = `linear-gradient(to right, rgba(3, 37, 65, 0.75) 100%, #FFFFFF 0%), url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${imagePath}') center / cover no-repeat`;
  }

  getMovieVideos(movieId: number) {
    return this.trailerService.getMovieVideos(movieId);
  }

  getTrailer(movieId: number) {
    this.getMovieVideos(movieId).subscribe((data: any) => {
      const videos = data.results;
      const trailer = videos.find((video: any) => video.type == 'Trailer');
      this.navigateToVideo(trailer.key);
    });
  }

  navigateToVideo(key: string) {
    this.router.navigate(['/video', key]);
  }
}
