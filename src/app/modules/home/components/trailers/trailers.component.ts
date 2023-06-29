import { Component, OnInit } from '@angular/core';
import { TrailerService } from '../../service/trailer.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
})
export class TrailersComponent implements OnInit {
  upcomingMovies: any[] = [];
  backgroundImage: string =
    'linear-gradient(to right, rgba(3, 37, 65, 0.75) 100%, #FFFFFF 0%)';
  showTransition: boolean = false;

  constructor(private trailerService: TrailerService) {}

  ngOnInit(): void {
    this.getTrailers();
  }

  getTrailers(): void {
    this.trailerService.upcomingMovies.subscribe((data: any) => {
      console.log(data);
      this.upcomingMovies = data.results;
    });
  }

  changeBackground(imagePath: string): void {
    this.backgroundImage = `linear-gradient(to right, rgba(3, 37, 65, 0.75) 100%, #FFFFFF 0%), url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${imagePath}')`;
  }
}
