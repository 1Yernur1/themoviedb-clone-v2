import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
} from '@angular/core';
import { TrendingService } from '../../service/trending.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class TrendingComponent implements OnInit {
  trendingMovies: any[] = [];
  isWeekly: boolean = false;
  isDaily: boolean = false;

  constructor(private trendingService: TrendingService) {}

  ngOnInit(): void {
    this.getDailyTrendingMovies();
  }

  getDailyTrendingMovies() {
    this.trendingService.dailyTrendingMovies.subscribe((data: any) => {
      this.trendingMovies = data.results;
      this.isDaily = true;
      this.isWeekly = false;
    });
  }

  getWeeklyTrendingMovies() {
    this.trendingService.weaklyTrendingMovies.subscribe((data: any) => {
      this.trendingMovies = data.results;
      this.isDaily = false;
      this.isWeekly = true;
    });
  }
}
