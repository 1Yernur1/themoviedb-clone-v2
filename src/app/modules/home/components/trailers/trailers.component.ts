import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TrailerService } from '../../service/trailer.service';
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
})
export class TrailersComponent implements OnInit {
  upcomingMovies: any[] = [];
  backgroundImage: string = '';

  movieTrailerYoutubeKey: string = '';
  showTrailer: boolean = false;

  faPlay = faPlay;
  faXmark = faXmark;

  constructor(private trailerService: TrailerService) {}

  ngOnInit(): void {
    this.getAllTrailers();
    this.addVideoPlayer();
  }

  getAllTrailers(): void {
    this.trailerService.upcomingMovies.subscribe((data: any) => {
      this.upcomingMovies = data.results;
      this.changeBackground(this.upcomingMovies[0].backdrop_path);
    });
  }

  changeBackground(imagePath: string): void {
    this.backgroundImage = `linear-gradient(to right, rgba(3, 37, 65, 0.75) 100%, #FFFFFF 0%), url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${imagePath}')`;
  }

  addVideoPlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getMovieVideos(movieId: number) {
    return this.trailerService.getMovieVideos(movieId);
  }

  getTrailer(movieId: number) {
    this.getMovieVideos(movieId).subscribe((data: any) => {
      const videos = data.results;
      const trailer = videos.find((video: any) => video.type == 'Trailer');
      this.movieTrailerYoutubeKey = trailer.key;
      this.showTrailer = true;
    });
  }
}
